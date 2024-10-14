window.addEventListener('load',function(){ 


    let service_mom = document.getElementById('service');
    let service_out = document.querySelector('#service_out');
    let service_in = document.getElementById('service_inner');
    service_out.addEventListener('click',function(){       
        service_in.classList.toggle('active');
        service_mom.classList.toggle('active');
    });



    // let f_site_1 = document.getElementById('f_site_1');
    // f_site_1.addEventListener('click',function(){
    //     alert(f_site_1+'f_site_1');
    //     f_site_1.classList.toggle('active');
    // });

    // let f_site_2 = document.getElementById('f_site_2')
    // f_site_2.addEventListener('click',function(){
    //     alert(f_site_2+'f_site_2');
    //     f_site_2.classList.toggle('active');
    // });

    // let f_site_3 = document.getElementById('f_site_3')
    // f_site_3.addEventListener('click',function(){
    //     alert(f_site_3+'f_site_3');
    //     f_site_3.classList.toggle('active');
    // });


    let main_banner = new Swiper('#main_banner', {
        wrapperClass:'main_baner_in', //슬라이드를 감싸는 요소의 클래스명
        slideClass:'main_banner', //슬라이드 요소의 공통된 클래스명
        effect:'fade', //전환효과
        loop:true, //슬라이드가 반복됨.
        autoplay: { //자동슬라이드
        delay: 5000, //2000=2초마다 전환됨.
        }
    });

    let welfare1 = new Swiper('#welfare1_wrap',{
          
        wrapperClass:'welfare_ul', //슬라이드를 감싸는 요소의 클래스명
        slideClass:'welfare_li', //슬라이드 요소의 공통된 클래스명
        loop:true, //슬라이드가 반복됨.
        autoplay: { //자동슬라이드
        delay: 5000, //2000=2초마다 전환됨.
          },
        pagination: {
            el: "#welfare-pagination",
            clickable:'true', //클릭시 슬라이드전환 활성화
            bulletActiveClass: 'active', //활성화된 버튼에 부여된는 클래스명
          },   
          navigation: {
            nextEl: "#welfare_next",
            prevEl: "#welfare_prev",
          },
        spaceBetween: 20,
    }); 
   
    let partner = new Swiper('#partner_ri',{
        wrapperClass:'partner_ri_ul',
        slideClass:'partner_ri_li',
        slidesPerView: 5,
        loop:true, //슬라이드가 반복됨.
        autoplay: { //자동슬라이드
            delay: 3000, //2000=2초마다 전환됨.
              },

    })

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





});


var sgc1 = new ScrollGiveClass("#dome", {
    baseline:'middle',
    add:0.1,
});

var sgc2 = new ScrollGiveClass(".dome_menu", {
    baseline:'middle',
    add:0.1,
});

function scrolled(){
    var win_y = this.window.scrollY;
    var area = document.getElementById('top_gnb');
    if(800 < win_y)
    {   area.classList.add('scrolled')

    }else{
        area.classList.remove('scrolled');
    }
    
}


window.addEventListener('scroll',scrolled)


