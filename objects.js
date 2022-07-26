// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60.00"
function fruitsKiosk(fruitName,quantity) {
    var fruits = {"Mango":80.00,"Banana":60.00,"Watermelon":100.00,"Pawpaw":90.00,Grapes:80.00}
    if(fruitName in fruits){
        var fruitPrice =fruits[fruitName]*quantity
        console.log(`${quantity} ${fruitName} for ${fruitPrice}`);
    }
    else{
        console.log("Fruit not there");
    }
}
fruitsKiosk("Watermelon",11)

// Write a class KioskCalc that has the following fruitsPriceList object.
// this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
// and takes two parameters (fruit, quantity) when initialized i.e.
// var kioskCalc = new KioskCalc(“orange”, 2);
// Thereafter, it allows one to calculate the total cost of the fruit by accessing the
// getTotalCost( ) method.
// kioskCalc.getTotalCost( ) // returns “2 orange for KES 60”



class kioskCalc{
    constructor(){
        this.fruitsPriceList = {"Orange":30,"Mango":15,"Avocado":40};
        
    }
  
}
kioskCalc.prototype.getTotalCost=function(fruit,quantity) {
   var price = this.fruitsPriceList[fruit] * quantity
   return `${quantity} ${fruit} for KES ${price}`
    }
var kiosk = new kioskCalc("Mango",9);
console.log(kiosk.getTotalCost("Mango",9));


