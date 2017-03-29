var main = function(){
  var colorClass = '';
  var blink;
  var toggleBlink = function(){
  if (!blink){
    blink = setInterval(function(){
      $('.box.magenta').toggleClass('blink');
      $('.box.yellow').toggleClass('blink');
      $('.box.cyan').toggleClass('blink');
    }, 350);
  } else {
    window.clearInterval(blink);
    blink = null;
  }
};
  $('.select-color').on('click', function(){
    var selectedColor = $(this).attr('class');
    var cyan = 'select-color cyan not-selected';
    var yellow = 'select-color yellow not-selected';
    var magenta = 'select-color magenta not-selected';
    if (selectedColor === cyan){
      colorClass = 'cyan';
    } else if (selectedColor === yellow) {
      colorClass = 'yellow';
    } else if (selectedColor === magenta){
      colorClass = 'magenta';
    }
    $(this).toggleClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
  $('.box').on('click', function(){
   $(this).toggleClass(colorClass);
    console.log(colorClass);
  });
  $('.toggle-blink').on('click', function(){
    if (colorClass){
      $('.toggle-blink').toggleClass('opacity');
      toggleBlink();
    } 
  });
}

$(document).ready(main);