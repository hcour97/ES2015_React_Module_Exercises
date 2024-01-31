import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Chips from "./Chips";
import Chocolate from "./Chocolate";
import Gatorade from "./Gatorade";

import "./snacks.css";

const VendingMachine = () => {
    return (
        <div className="VendingMachine">Vending Machine
            
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/chocolate" element={<Chocolate />} />
                    <Route path="/gatorade" element={<Gatorade />} />
                    <Route path="/home" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;