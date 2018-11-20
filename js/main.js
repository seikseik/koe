

$(document).ready(function(){
    $("span").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
        
    });
});

$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $("span").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
        
});	



$(document).ready(function(){
    $(window).scroll(function(){
        
        if($(this).scrollTop()>$(window).height()){
             uno.style.display = "none";   
        }
        
    });
        
});






let uno = document.querySelector(".one");
let due = document.querySelector(".titolo");
var page = document.getElementById('page');
var sections = page.getElementsByTagName('section');

var transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
page.style.transition = transition;
page.onclick = slideDown;







function slideDown(e) {
  if (e.target.className != 'next') {
    return;
  }
     
  page.onclick = '';
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;


  page.style.top = (-offset.height-offset.top) + 'px';

  setTimeout(function () {
    page.style.transition = 'none';
    page.style.top = '';
    window.scrollTo(0, offset.height+scroll);
      
    page.style.transition = transition;
    page.onclick = slideDown;
     uno.style.display = "none";
      

  }, 800);
}


