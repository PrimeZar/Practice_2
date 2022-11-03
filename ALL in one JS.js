

// //////// food/////////

$(document) .ready(function() {
    
    $('h1') .click(function(){
        $(this) .css('background-color', 'blue');
   
   
    })
            
    $('.js--section-features') .waypoint(function(direction){
       if(direction=='down'){
           ('nav') .addClass('sticky');
       } else {
           ('nav') .removeClass('sticky');
       }
   })
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////Practice_2 ///////////////////////////////////
// alert();

window.addEventListener('scroll', () => {
    document.querySelector('nav'). classList.toggle
    ('window-scroll', window.scrollY> 0 )
  
})

window.addEventListener('scroll', ( ) =>{
    document.querySelector('nav') .classList.toggle
    ('boy', window.scrollY>0 )

})

// show/hide FAQ answer
const FAQ=document.querySelectorAll('.faq__box');

FAQ.forEach(faq__box => {
    faq__box.addEventListener('click', () =>{
        faq__box. classList.toggle('open');


        //change icon
        const icon = faq__box.querySelector('.faqs__icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        } else{
            icon.className = 'uil uil-plus';
        }
    })
})

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = " inline-block";
    menuBtn.style.display = "none";

})

//close new menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";

}
closeBtn.addEventListener('click', closeNav);

//////////Practice_2 end  ///////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////

/////practice_3//////////
$(document) .ready(funtion (){
    $( '.fa-bars' ) .click(function () {
       $(this). toggleClass( ' fa-times' );
       $( '.navbar' ). toggleClass ('nav-toggle');
     });
 });
 

