//header
$('header>button.M').click(function(){
    $('header>button.M>span, header>.nav_M').toggleClass('on');
})

//main event
var area = document.querySelector('body');
var p = document.getElementById('ob');

area.onmousemove = function(event) {   
    var bodyW = $("body").width();
    console.log(event.clientX + ', ' + event.clientY + ', ' + bodyW);    
    var x = event.clientX;
    var y = event.clientY;
    p.style.transform = 'translate(' + ((-0.1 * bodyW) + x * 0.2) + 'px, ' + (y * 0.2 - 50) + 'px)';
}; 
area.onmouseout = function() {
    p.style.transform = 'translate(0, 0)';
}

$('main>.mark_up_list>ul>li').mouseover(function(){
    $(this).find('.inner_li').css('display','block');
    $(this).siblings().find('.inner_li').css('display','none');
    $(this).find('a').css('background','#fff');
})
$('main>.mark_up_list>ul>li').mouseleave(function(){
    $(this).find('.inner_li').css('display','none');
    $(this).siblings().find('.inner_li').css('display','none');
    $(this).find('a').css('background','#000');
})

$('main>.mark_up_list>ul>li:nth-of-type(1)').mouseover(function(){
    $('main #ob>.set>.box_vid>img').attr('src','img/img_tv_per.gif');
})
$('main>.mark_up_list>ul>li:nth-of-type(2)').mouseover(function(){
    $('main #ob>.set>.box_vid>img').attr('src','img/img_tv_cos.gif');
})
$('main>.mark_up_list>ul>li:nth-of-type(3)').mouseover(function(){
    $('main #ob>.set>.box_vid>img').attr('src','img/img_tv_cha.gif');
})
$('main>.mark_up_list>ul>li:nth-of-type(4)').mouseover(function(){
    $('main #ob>.set>.box_vid>img').attr('src','img/img_tv_tele.gif');
})
$('main>.mark_up_list>ul>li').mouseleave(function(){
    $('main #ob>.set>.box_vid>img').attr('src','img/img_tv_noise.gif');
})