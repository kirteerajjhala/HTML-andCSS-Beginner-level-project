var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(k){
crsr.style.left = k.x+"px"
crsr.style.top = k.y+"px"


})