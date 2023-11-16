let indicator = document.querySelector("#gura");
let items = document.querySelectorAll('nav a');
const root = document.querySelector(':root');
const rootstyles = getComputedStyle(root);
const red = rootstyles.getPropertyValue("--clr")
const red2 = rootstyles.getPropertyValue("--clr2")

setInterval(()=>{
   
   const getrandomclr = ()=> Math.floor(Math.random()*0xffffff).toString(16);
const color = getrandomclr();
const color2 = getrandomclr();
root.style.setProperty("--clr",`#${color}`)
 root.style.setProperty("--clr2",`#${color2}`)
},1000)
console.log();
function marker(e){
  const getrandomclr = ()=> Math.floor(Math.random()*0xffffff).toString(16);
const color = getrandomclr();

  indicator.style.left= e.offsetLeft+"px";
  indicator.style.width = e.offsetWidth +"px";
  root.style.setProperty("--clr",`#${color}`)
  if ( '#'+color == "#ffffff") {
items.style.color = "black"
  }
};
items.forEach(link => {
  
 link.addEventListener("click",(e) => {
   marker(e.target);
  

 });
 
});
