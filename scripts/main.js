const myHeading = document.querySelector('h1'); /*querySelector('') is a function*/
myHeading.textContent = 'Yamete Kudasai!';
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
alert('Yay, I love chocolate iceCream');
} else {
alert('Awww, but chocolate is the best');
} /*alert ('') it's a function*/
{
//myVariable = document.querySelector('h1');
//alert('caquita fea');
}
var el_up = document.getElementById("GFG_UP");
            var el_down = document.getElementById("GFG_DOWN");
            var str = "Click on button to change the background color";
          
            el_up.innerHTML = str;
          
            function changeColor(color) {
                document.body.style.background = color;
            }
              
            function gfg_Run() {
                changeColor('grey');
                el_down.innerHTML = "Background Color changed";
            }
            var el_up = document.getElementById("GFG_UP");
            var el_down = document.getElementById("GFG_DOWN");
            var str = "Click on button to change the background color";
          
            el_up.innerHTML = str;
          
            function changeColor(color) {
                document.body.style.background = color;
            }
              
            function gfg_Runn() {
                changeColor('white');
                el_down.innerHTML = "Background Color changed";
            }