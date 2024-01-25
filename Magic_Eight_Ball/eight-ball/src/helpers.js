/** Choose a random element from a given array. */
const choice = (items) => {
    const randomElement = Math.floor(Math.random() * items.length);
    return items[randomElement];
}

export default choice;