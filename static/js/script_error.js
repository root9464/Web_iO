document.addEventListener("DOMContentLoaded",() =>{
  
    let body = document.body;
     setInterval(createStar,100);
     function createStar(){
       let right=Math.random()*1000;
       let top=Math.random()*screen.height;
       let star=document.createElement("div");
    star.classList.add("star")
     body.appendChild(star);
     setInterval(runStar,25);
       star.style.top=top+"px";
     function runStar(){
       if(right>=screen.width){
         star.remove();
       }
       right+=3;
       star.style.right=right+"px";
     }
     } 
   })   