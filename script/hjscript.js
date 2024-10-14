window.onload = function(){

let view = new Swiper('.news_view', {
    wrapperClass:'slider', //슬라이드를 감싸는 요소의 클래스명
    slideClass:'view', //슬라이드 요소의 공통된 클래스명
    spaceBetween: 50,
    loop:true, //슬라이드가 반복됨.
    autoplay: { //자동슬라이드
        delay: 3500, //2000=2초마다 전환됨.    
    },
    pagination: { //슬라이트 버튼
        el: '.pager', //버튼영역 요소 지정    
        type:'fraction',
    },
    navigation: {  //이전&다음버튼
        nextE1: '.next',
        prevE1: '.prev',
    },
}); //end:new Swiper() 
}

var sgc1 = new ScrollGiveClass("#dome", {
    baseline:'middle',
    add:0.1,
});

var sgc2 = new ScrollGiveClass(".dome_menu", {
    baseline:'middle',
    add:0.1,
})