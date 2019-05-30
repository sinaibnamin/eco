



// $(document).ready(function(){
//   $("button.kok").click(function(){
//     $(".pol").toggle();
//   });
// });
//


var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function(){
  content.classList.toggle("appear");
}, false);



$('.slide-active').owlCarousel({
    loop:true,
autoPlay:true,
    nav:true,
    autoplayTimeout:1000,
autoplayHoverPause:true,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1,
             loop:true
        },
        600:{
            items:1,
             loop:true
        },
        1000:{
            items:1,
             loop:true
        }
    }
})


$('.product-active').owlCarousel({
    loop:true,
    margin:20,
    navText:['Back','Next'],
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})




(function ($){

"use strict";


})(jquery);
