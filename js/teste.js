// function criarGrad() {
//   var hexCode1 = "";
//   var hexValues1 = "0123456789abcdef";
  
//   for ( var i = 0; i < 6; i++ ) {
//     hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
//   }
//   return hexCode1;
// }

// function gen() {
  
//   var deg = Math.floor(Math.random() *360);
  
//   var gradient = "linear-gradient(" + deg + "deg, " + "#" + criarGrad() + ", " + "#" + criarGrad() +")";
  
//   document.getElementById("body").style.background = gradient;
  
//   console.log(gradient);
 
// }

function b1() {
  var scr = document.getElementById("screen");
  var text = document.getElementById("text");

  scr.style.backgroundColor = "green";
  text.innerText = "Verde";

}

function b2() {
  var scr = document.getElementById("screen");
  var text = document.getElementById("p");

  scr.style.backgroundColor = "red";
  text.innerText = "<b>Verde<b>";
  console.log("nadaaa");

}

// var btn = document.getElementById("b");
// var btn2 = document.getElementById("b2");

// btn.addEventListener("click", log);
// btn2.addEventListener("click", log);


