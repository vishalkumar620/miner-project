let carts = document.querySelectorAll('.add-to-cart');

let products = [
  
  {
    Tag: "image",
    
    Rating: "4",
    
    Price: "49,999",
    
    Features: "Iphone 12 Pro",
    
    inCart: 0
    
  },
  
  {
    Tag: "image",
  
    Rating: "5",
  
    Price: "79,999",
  
    Features: "Mac Pro",
    
    inCart: 0
  
  },
  
  {
    Tag: "image",
  
    Rating: "4",
  
    Price: "29,999",
  
    Features: "Inter Computer",
    
    inCart: 0
  
  },
  
  {
    Tag: "image",
  
    Rating: "4",
  
    Price: "2,999",
  
    Features: "boAt Headphones",
    inCart: 0
  
  },
  
  ];



for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    
    cartsNumbers(products[i])
    
  })
  
}

function loadCarts(){
  
  let productNumbers = localStorage.getItem('cartsNumbers');
  
  if(productNumbers){
    
    document.querySelector('.notification span').textContent = productNumbers;
   
  }
 
}


function cartsNumbers(product){
  
  
  let productNumbers = localStorage.getItem('cartsNumbers');
  
  productNumbers = parseInt(productNumbers);
  
  if(productNumbers){
    
    localStorage.setItem('cartsNumbers', productNumbers + 1);
    
    document.querySelector('.notification span').textContent = productNumbers + 1; 
  }else{
    
    localStorage.setItem('cartsNumbers', 1);
    document.querySelector('.notification span').textContent = 1;
   
  }
  
  setItem(product);
}

function setItem(product){
    
    let cart = localStorage.getItem("product_item");
    
    cart = JSON.parse(cart);
    
    if(cart != null){
      
      if(cart[product.Features] == undefined){
        cart = {
          ...cart,
        [product.Features]: product
        }
        
      }
      
      cart[product.Features].inCart += 1;
      
    }else{
    
    product.inCart = 1;
    
     cart = {
      
      [product.Features]: product
      
    }
      
    }
    
    localStorage.setItem("product_item", JSON.stringify(cart));
  
}

function displaycart(){
  let cart = localStorage.getItem("product_item");
  
  cart = JSON.parse(cart);
  
  let productcart = document.querySelector(".orders");
  
  
  
  if(cart && productcart ){
    productcart.innerHTML = '';
    
    
  }
  
}


loadCarts();
displaycart();




let togg = document.querySelector('.menu');

let slideshow = document.querySelector('.slideshow');

let bodie = document.querySelector('.section');




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
