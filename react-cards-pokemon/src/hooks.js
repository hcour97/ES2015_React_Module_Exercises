import axios from "axios";
import {useState, useEffect} from "react";

function useFlip(initialVal = true) {
    // call useState, "reserve a piece of state"
    const [isFlipped, setFlipped] = useState(initialVal);
    const flip = () => {
        setFlipped(isUp => !isUp);
    };
    // return piece of state and a function to flip it
    return [isFlipped, flip];
}

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue];
  }

function useAxios(keyInLS, baseUrl) {
const [responses, setResponses] = useLocalStorage(keyInLS);

const addResponseData = async (formatter = data => data, restOfUrl = "") => {
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses(data => [...data, formatter(response.data)]);
};

const clearResponses = () => setResponses([]);

return [responses, addResponseData, clearResponses];
}

export default useLocalStorage;

export {useFlip, useAxios, useLocalStorage};