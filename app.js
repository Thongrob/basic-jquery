
// ให้เกิด event เมื่อ click
// $(document).ready(function () {
//   $('#btn').click(function (){
//     $("p").hide();
//   })
// });


// ให้เกิด event เมื่อวาง mouse   และ mouse ออก
// $(document).ready(function () {
//   $('p').on({
//    mouseenter: function() {
//     $(this).css('background-color',"lightgray");
//    },
//    mouseleave: function() {
//     $(this).css('background-color',"blue");
//    },
//    click: function() {
//     $(this).css('background-color', "brown")
//    }
//   })
// });

// //Show and Hide
// $(document).ready(function () {
//  $('#show').click(function(){
//   $('p').show(2000)
//  })

//  $('#hide').click(function(){
//   $('p').hide(2000)
//  })
// });

// //Show and hide with toggle
// $(document).ready(function () {
//  $('#show').click(function(){
//   $('p').toggle(2000)
//  })

//  $('#hide').click(function(){
//   $('p').toggle(2000)
//  })
// });


//Fadein Fade out
$(document).ready(function () {
 $('#btn').click(function(){
  $('#div1').show()
 })

 $('#btn').click(function(){
  $('#div1').animate({
    left: '250px',
    width: '150px',
    height: '150px',
  })
 })

 $('#stop').click(function () {
  $('#div2').toggle()
 })
});

