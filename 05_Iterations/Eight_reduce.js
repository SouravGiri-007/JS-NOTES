// Reduce

const myNums = [1, 2, 3]

const total = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currVal: ${currval}`);
    return acc + currval
}, 2 /* acc start value */ )
/*console.log(total);

Output:
acc: 2 and currVal: 1
acc: 3 and currVal: 2
acc: 5 and currVal: 3
8(total)

******************************************************************************************/

// Real Life Example

const shoppingBasket = [
    {
        itemName: "Yoga Mat",
        price: 1500
    },
    {
        itemName: "Dumbbells Set",
        price: 3500
    },
    {
        itemName: "Protein Powder",
        price: 2500
    },
    {
        itemName: "Running Shoes",
        price: 4500
    },
]

const totalPrice = shoppingBasket.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice); // Output: 12000

/* In this example, the total cost of the items in the shopping basket is calculated using the 'reduce' method. The final price to be paid is displayed.
*/
