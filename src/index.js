import "./styles.css"
import home from "./module/home.js"
import menu from "./module/menu.js"
import about from "./module/about.js"


console.log('Nah');
home()
document.getElementById("button-home").addEventListener("click",()=>{
    home()
})
document.getElementById("button-menu").addEventListener("click",()=>{
    menu()
})
document.getElementById("button-about").addEventListener("click",()=>{
    about()
})