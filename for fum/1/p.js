function color(){
  let p = Math.ceil(0 + Math.random() * 225);
  let r = Math.ceil(0 + Math.random() * 225);
  let q = Math.ceil(0 + Math.random() * 225);
  return `rgb(${p},${q},${r})`;
}
let btn = document.querySelector("button");
let p = setInterval((e) => {
  btn.style.background = color();
  btn.style.color = color();
  btn.style.border = "none";
  btn.style.borderRadius = "2px";

},1500);
// clearInterval(p);
