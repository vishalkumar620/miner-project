

const img_contain = document.querySelector(".img");


const img_contain2 = document.querySelector(".img2");


const img_contain3 = document.querySelector(".img3");

img_contain2.addEventListener('click', function(){
  
  img_contain.src = "images/computer2.png";

  
})

img_contain3.addEventListener('click', function(){
  
  img_contain.src = "images/computer3.png";
  
})

img_contain.addEventListener('click', function(){
  
  img_contain.src = "images/computer.png";
  
})





let togg = document.querySelector('.menu');

let slideshow = document.querySelector('.slideshow');

let bodie = document.querySelector('.image_contain2');




togg.addEventListener('click', function(){
  
    if(slideshow.style.display === "none"
    ){
      slideshow.style.display = "block";
      
      bodie.style.opacity = "0.3";
      
      
      
    }else{
      slideshow.style.display = "none";
      
      bodie.style.opacity = "1";
  
    }
  
})


