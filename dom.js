
// Change document background color to
// silver
// Change the font color for h1 title tag to
// green
// Change the font case for h3 title tags to
// uppercase
// Add one more fruit to the fruits list
// Add one more vegetable to the vegetables
// list

let background = document.querySelector("body");
background.style.backgroundImage = "url('greener.jpeg')" ;
background.style.backgroundRepeat = "no-repeat"
background.style.backgroundSize = "100vw"

let font = document.querySelector("h1");
font.style.color = "white";
font.style.textAlign = "center"
font.style.fontSize = "70px"

let change_p = document.querySelector("p");
change_p.style.color = "white";
change_p.style.fontSize = "30px"
change_p.style.fontStyle = "Bold"



let add_fruit = document.getElementById("fruitList");
add_fruit.style.color = "white"
// let adding_more = document.getElementsName("li");
// let fruit_name = document.createTextNode("Pineapple");
// adding_more.append(fruit_name);

let change_heading3 = document.getElementsByTagName("h3");
change_heading3.style.color = "white";
change_heading3.style.fontSize= "40px";

