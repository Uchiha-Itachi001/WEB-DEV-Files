const pra = document.querySelector("p");
// pra.classList.add("log");
let btn = document.createElement("button");
let div = document.querySelector("div");
let div2 = document.querySelector(".pk");
let h1 = document.querySelector("h1");
btn.innerText=`To Add animation\n"click me"`;
pra.after(btn);

btn.classList.add("btn");
let p= true;
btn.addEventListener("click",()=>{
    if(p)
    {
        div.classList.add("lol");
        div2.classList.add("div");
        h1.classList.add("h1-p");
        btn.innerText=`To stop Animation\n"Click Me"`;
        btn.style.background="linear-gradient(45deg, red, orange)";
        console.log(p);
        
        p=false;
    }
    else{
        btn.style.background="green";
        div2.classList.remove("div");
        div.classList.remove("lol");
        h1.classList.remove("h1-p");
        btn.innerText=`To Add animation\n"click me"`;
        btn.style.background="linear-gradient(45deg,  rgb(15, 138, 42),rgb(11, 225, 57))";
        console.log(p);
        p=true;
    }
})
