
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
background.style.backgroundImage = "url('blackboard2.jpg')"
background.style.backgroundRepeat = "no-repeat"
background.style.backgroundSize = "100vw"


let font = document.querySelector("h1");
let hr = document.createElement('hr');
document.body.appendChild(hr)
hr.style.width = '90vw'
hr.style.marginTop ='-343px'    
font.style.color = "white";
font.style.textAlign = "center"
font.style.fontSize = "40px"
font.style.marginTop = "20px"

let change_p = document.querySelector("p");
change_p.style.color = "white";
change_p.style.fontSize = "20px"
change_p.style.fontStyle = "Bold"
change_p.style.marginTop = '-30px'  
change_p.style.marginLeft = '497px'    

// let box_one = document.querySelector("#fruit-journey");
// box_one.style.border = "3px solid white";
// box_one.style.backgroundColor = "white";
// box_one.style.width = "190px";



// let add_fruit = document.getElementById("fruitList");
// add_fruit.style.color = "white"
// let adding_more = document.getElementsName("li");
// let fruit_name = document.createTextNode("Pineapple");
// adding_more.append(fruit_name);

let change_heading3 = document.getElementById("fruit-journey");
change_heading3.style.color = "white";
change_heading3.style.fontSize = "30px";
change_heading3.style.marginLeft = "80px";



