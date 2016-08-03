$(document).ready(function() {

  console.log('joinin the rebellion!')

  $('.bubble').click(changeClass)


  function changeClass() {
    $(this).toggleClass('bubble');
    $(this).toggleClass('hovering');
    let title = $(this).children()[0];
    title.toggle();
    let desc = $(this).children()[1];
    desc.toggle();
  }





});
