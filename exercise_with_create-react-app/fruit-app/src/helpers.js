/** Choose a random element from given array. */

const choice = (items) => {
    const randomElement = Math.floor(Math.random() * items.length);
    return items[randomElement];
}

/** Return copy of array w/o the removed item.
 *  If item is not found, return undefined.
 */

const remove = (item, items) => {
    for (let i=0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };