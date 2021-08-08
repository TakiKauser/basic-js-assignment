// problem 1:

function seerToMon(seer) {
    // handling error
    if ((typeof seer != "number") || (seer < 0)) {
        return "Invalid Input!";
    }
    
    const mon = seer / 40; // conversion calculation

    return mon;
}
// console.log(seerToMon(100));

// problem 2:

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // handling error
    if ((typeof shirtQuantity != "number") || (typeof pantQuantity != "number") || (typeof shoesQuantity != "number")) {
        return "Invalid Input!";
    }
    if ((shirtQuantity < 0) || (pantQuantity < 0) || (shoesQuantity < 0)) {
        return "Invalid Input!";
    }
    const productsPrice = [100, 200, 500]; // listing product's prices as an array 
    const totalPrice = ((shirtQuantity * productsPrice[0]) + (pantQuantity * productsPrice[1]) + (shoesQuantity * productsPrice[2])); // calculating total price of products

    return totalPrice;
}

// console.log(totalSales(3, 2, 1));

// problem 3:

function deliveryCost(productQuantity) {
    // handling error
    if ((typeof productQuantity != "number") || (productQuantity < 0)) {
        return "Invalid Input!";
    }

    const costs = [100, 80, 50]; // listing product's costs as an array
    const shipmentCost = [0, 0, 0]; // listing product's shipment cost at primary, secondary and tertiary level as an array
    let totalCost = 0;

    if ((productQuantity >= 0) && (productQuantity <= 100)) {
        shipmentCost[0] = costs[0] * productQuantity; // calculating primary level shipment cost
        totalCost = shipmentCost[0];
    }
    else if ((productQuantity > 100) && (productQuantity <= 200)) {
        shipmentCost[0] = costs[0] * 100; // calculating primary level shipment cost
        const restProduct = productQuantity - 100;
        shipmentCost[1] = costs[1] * restProduct; // calculating secondary level shipment cost
        totalCost = shipmentCost[0] + shipmentCost[1];
    }
    else if (productQuantity > 200) {
        shipmentCost[0] = costs[0] * 100; // calculating primary level shipment cost
        shipmentCost[1] = costs[1] * 100; // calculating secondary level shipment cost
        const restProduct = productQuantity - 200;
        shipmentCost[2] = costs[2] * restProduct; // calculating tertiary level shipment cost
        totalCost = shipmentCost[0] + shipmentCost[1] + shipmentCost[2];
    }

    return totalCost;
}

// console.log(deliveryCost(199));

// problem 4:

function perfectFriend(friends) {
    // handling error
    for (const friend of friends) {
        if (typeof friend != "string") {
            return "Invalid Input!";
        }
    }
    for (const friend of friends) {
        if (friend.length == 5) {
            return friend; // returning required string
        }
    }
    return "Ooops! you don't have a perfect friend!!!";
}
/* 
const closeFriends = ["arefin", "nahid", "shadhin", "bappi", "khairul", "rafsan", "chamak", "didi", "mahfuz", "ovi", "saeid", "nowshad"];
console.log(perfectFriend(closeFriends));
*/ 