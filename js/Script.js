$(document).ready(function() {

let innerLink;

let split;

let num = [0,0,0];

let term = [0,0,0];

let sumTerm, sumNum;


$( '#Type' ).change(function() {

    split = $('#Type').val().split(' ');
    num[0] = split[0];
    term[0] = split[1];

});

$( '#Design' ).change(function() {

    split = $('#Design').val().split(' ');
    num[1] = split[0];
    term[1] = split[1];

});

$( '#Adaptive' ).change(function() {

    split = $('#Adaptive').val().split(' ');
    num[2] = split[0];
    term[2] = split[1];

});


$( '.Count__select' ).change(function() {

    sumNum = (+num[0]) + (+num[1]) + (+num[2]);
    sumTerm = (+term[0]) + (+term[1]) + (+term[2]);

    $('#num').text(sumNum);
    $('#term').text(sumTerm);

});

if($('.slider').length>0) {
    $('.slider').slick( {
        // autoplay: true,
        // infinite: false,
        dots: false,
        arrows: false, 
        autoPlaySpeed: 3000,

    });
}


if($('.Reviews__slider').length>0) {
    $('.Reviews__slider').slick( {
        // autoplay: true,
        // infinite: false,
        dots: true,
        arrows: false,
        accessibility: true,
        slidesToShow: 1, 
        autoPlaySpeed: 3000,
        adaptiveHeight: true,

        responsive: [{
            breakpoint: 768,
            settings: {}
        }],

    });
}

});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });

$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {

    $(this).toggleClass('icon-menu__active');
    $('.header__row').toggleClass('active');
    $('body').toggleClass('lock');

});

$( window ).resize(function() {
  
});

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

$('.slider').on('afterChange', function(event, slick, currentSlide) {

    innerLink = $('.slick-active > .Cases__textBlock > .Cases__row > .Cases__item > .Cases__websiteDescription').attr('href');

    console.log(innerLink);

    $('.Cases__button').attr('href', innerLink);

});

