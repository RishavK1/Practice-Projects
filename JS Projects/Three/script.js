
 var main = document.querySelector("#main");

 var csr = document.querySelector(".cursor");

 main.addEventListener("mousemove", (res)=>{
   csr.style.left = res.x +"px";
   csr.style.top = res.y +"px";

 })