// function change(){
//     const rColor = Math.floor(Math.random()*16777215).toString(16);
//     const rColor2 = Math.floor(Math.random()*16777215).toString(16);

//     document.getElementById("body").style.background = "linear-gradient(" + rColor + "deg, " + "#" +;
// }


function criarGrad() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";
  
  for ( var i = 0; i < 6; i++ ) {
    hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
  }
  return hexCode1;
}

function gen() {
  
  var deg = Math.floor(Math.random() *360);
  
  var gradient = "linear-gradient(" + deg + "deg, " + "#" + criarGrad() + ", " + "#" + criarGrad() +")";
  
  document.getElementById("body").style.background = gradient;
  
  console.log(gradient);
 
}