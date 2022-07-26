// Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. 
// This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors.
// To begin with, farmers have to register on the platform and login.
//  Thereafter, they can upload their products with respective prices. 
//  On the other hand, grocery vendors can signup and login to 
//  the platform to place their bulk order requests. 

// Create a class Mkulima that will keep a list of farms, grocery vendors and products. 
// A single farm record should contain id, farm name, farmer, phone number and address.
//  A single grocery vendor record should contain id, store name and phone number. 
// A product should have id, name and price fields. 

// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity


class Mkulima{
    constructor(){
        this.farms_list=[];
        this.product_list=[];
        this.grocery_vendors=[]; 
        this.orders=[]
        this.full_farm_details={}
        // "Jim's kiosk","Walatuni's green kiosk","Nala's Organic kiosk","Pilipili's Hot Kiosk","Naruda's Kiosk"
        // "Apples","Spinach","Sukuma Wiki","Bananas","Peas","Beans","Potatoes","Avocadoes","Chillies","Greengrams","Mangoes"
        // "Upendo Tomato Farm","Waru Farmers","Green Veggie Farm","Laleida's Fruit farm","Milo Legume Farm"
       

    }
    
}
Mkulima.prototype.addFarm = function(farmId,name,farmer,phone,address){
var farmer_farm= {farm_id:farmId,farm_name:name,farmer_name:farmer,phone_number:phone,address_name:address}
Object.assign(this.full_farm_details,farmer_farm)
return this.full_farm_details

}
var mkulima = new Mkulima(4321,"Waru Farmers","Maria Nduta","+25472314571","Limuru 303");
var mkulima_2 = new Mkulima(9807,"Laleida's Fruit Farm","Laleida Oloiboni","+254723456213","Kajiado 110");
var mkulima_3 = new Mkulima(6543,"Upendo Tomato Farm","Mr.Jackson Chinui","+25474678909","Nanyuki 908");
var mkulima_4 = new Mkulima(2021,"Milo Legume Farm ","Milo Abusako","+254790807080","Kakamega 607");
var mkulima_5 = new Mkulima(3201,"Green Veggie Farm","Samuel Osango","+254753214578","Kisumu 888");

console.log(mkulima.addFarm(4321,"Waru Farmers","Maria Nduta","+25472314571","Limuru 303"));
console.log(mkulima_2.addFarm(9807,"Laleida's Fruit Farm","Laleida Oloiboni","+254723456213","Kajiado 110"));
console.log(mkulima_3.addFarm(6543,"Upendo Tomato Farm","Mr.Jackson Chinui","+25474678909","Nanyuki 908"));
console.log(mkulima_4.addFarm(2021,"Milo Legume Farm ","Milo Abusako","+254790807080","Kakamega 607"));
console.log(mkulima_5.addFarm(3201,"Green Veggie Farm","Samuel Osango","+254753214578","Kisumu 888"));

Mkulima.prototype.removeFarm = function(farmId){
    if(farmId in this.full_farm_details){
    

    }
}

Mkulima.prototype.updateFarm = function(farmId,name,farmer,phone,address){
    var details = {farm_id:farmId,farm_name:name,farmer_name:farmer,phone_number:phone,address_name:address} 
    Object.assign(this.full_farm_details,details)

    return this.full_farm_details;
}

var newMkulima = new Mkulima(7789,"Pilipili Farm","Amos Gisidi","+25473214567","Kiambu 609");

console.log(newMkulima.updateFarm(7789,"Pilipili Farm","Amos Gisidi","+25473214567","Kiambu 609"));


Mkulima.prototype.getFarm = function(farmId){

}

Mkulima.prototype.addProduct = function(productId,name,price){
    var products = {product_id:productId,product_name:name,product_price:price}
    this.product_list.push(products);
    return this.product_list;
}

var products = new Mkulima(001,"Irish Potatoes",300);
var products_2 = new Mkulima(002,"Beans",150);
var products_3 = new Mkulima(003,"San Marzano Tomatoes",230);
var products_4 = new Mkulima(004,"Savoy Spinach",120);
var products_5 = new Mkulima(005,"Watermelon",100);

console.log(products.addProduct(001,"Irish Potatoes",300));
console.log(products_2.addProduct(002,"Beans",150));
console.log(products_3.addProduct(003,"San Marzano Tomatoes",230));
console.log(products_4.addProduct(004,"Savoy Spinach",120));
console.log(products_5.addProduct(005,"Watermelon",100));


Mkulima.prototype.removeProduct = function(productId){

}

Mkulima.prototype.updateProduct = function(productId,name,price){
    var update = {product_id:productId,product_name:name,product_price:price}
    this.product_list.push(products);
   return this.product_list
}

var updatedProduct = new Mkulima(5404,"Red Chilli Pepper", 220);
console.log(updatedProduct.updateProduct(5404,"Red Chilli Pepper", 220));

Mkulima.prototype.getProduct = function(productId){
    
}

Mkulima.prototype.printProducts = function(){
    return this.product_list
}

Mkulima.prototype.calculateOrderCost = function(productId,quantity){
  var cost = this.product_list[productId] * quantity
    return `${productId} for ${quantity} is KES ${cost}`
}
var prod = new Mkulima(005,9);
console.log(prod.calculateOrderCost(005,9));
