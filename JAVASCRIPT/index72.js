/* */
const orderBeer = require("./promise");


async function drinkBeer() {
    try {
        const result = await orderBeer();
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

module.exports = drinkBeer;
