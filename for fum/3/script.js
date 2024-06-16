let div1 = document.querySelector(".just1");
let div2 = document.querySelector(".just2");
let div3 = document.querySelector(".just3");
let div4 = document.querySelector(".just4");
let btn1 = document.querySelector(".button1");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let btn4 = document.querySelector(".button4");

btn1.addEventListener("click",()=>{
    div1.classList.remove("lol");
    div2.classList.add("lol");
    div3.classList.add("lol");
    div4.classList.add("lol");
 
})
btn2.addEventListener("click",()=>{
    div1.classList.add("lol");
    div2.classList.remove("lol");
    div3.classList.add("lol");
    div4.classList.add("lol");
})
btn3.addEventListener("click",()=>{
    div1.classList.add("lol");
    div3.classList.remove("lol");
    div2.classList.add("lol");
    div4.classList.add("lol");
})
btn4.addEventListener("click",()=>{
    div1.classList.add("lol");
    div4.classList.remove("lol");
    div3.classList.add("lol");
    div2.classList.add("lol");
})