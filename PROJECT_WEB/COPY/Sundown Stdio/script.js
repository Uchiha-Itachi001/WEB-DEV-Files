let info = document.querySelectorAll(".hero");
let video =document.querySelector(".videoswitch");
info.forEach((e)=>{
   
   e.addEventListener( "mouseenter", function(){
      video.style.display="block"; 
   });
   e.addEventListener( "mouseleave", function(){
      video.style.display="none"; 
   });
})

info.forEach((e)=>{
   console.log()
   e.addEventListener( "mouseenter", function(){
      let p = e.getAttribute( 'data-img' );
      video.style.backgroundImage=`url(${p})`;
   })
})