$(document).ready(function(){


// 풀페이지 연결

new fullpage('#wrap', {
    anchors:['anchor1','anchor2','anchor3','anchor4','anchor5','anchor6','anchor7'],
    scrollBar:true,
    normalScrollElements:".sec-5,.sec-6",
    fitToSection:false,
    responsiveWidth:1500,
    navigation:true,
    autoScrolling:true,
    navigationTooltips: ['', '', '', '','','',''],


    });

    // 헤더버튼 클릭시 해당 섹션으로 이동하게끔 처리


    ww = $(window).width();
    wh = $(window).height();

    const sct = $(window).scrollTop();
    $(window).scroll(function(){
        console.log(sct)

        const banner = $('.banner').offset().top;
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const ik = $('.ik').offset().top;
        const verr = $('.verrvui').offset().top;
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const sec5 = $('.sec-5').offset().top;
        const sec6 = $('.sec-6').offset().top;

        $('.menu').each(function(index){
            $(this).attr('data-index',index);
        });

        $('.menu1').click(function(){
            $('html,body').stop().animate({
                scrollTop:banner
            });
        });
        $('.menu2').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec1
            });
        });
        $('.menu3').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec2
            });
        });
        $('.menu-web').click(function(){
            $('html,body').stop().animate({
                scrollTop:verr
            });
        });
        $('.menu5').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec5
            });
        });
        $('.menu6').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec6
            });
        });

        $('.sub1').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec3
            });
        });
        $('.sub-3ce').click(function(){
            $('html,body').stop().animate({
                scrollTop:sec4
            });
        });
    });

    
    // about me page data-alt 연결
    $('.sub-top-wrap li').click(function(){
        // data-alt 연결

        // li 클릭했을때 border-bottom 추가 ->정상작동 완
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        const result = $(this).attr('data-alt');

        // 내용 부분 액티브 걸렸을때만 display block 되게끔 액티브 추가해주기
        // 클릭당하는 본인의 형제요소에게 액티브 제거
        $('.right-sub-bottom div').siblings().removeClass('active');

        //클릭당하는 요소에게 액티브 추가
        // data-alt 연결해준애에게 액티브 연결해주는거임.
        $(`#${result}`).addClass("active");

    });

    // section ik 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          loop:true,
        //   loopedSlides: 1
        // loopAdditionalSlides : 1,
        },
        effect:'fade',
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
        // breakpoint : {

        // }
      });

      //section verrvui 스와이퍼
      var swiper = new Swiper(".verrSwiper", {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          loop:true,
        },
        effect:'fade',
        autoplay:{
            delay:3000,
            disableOnInteraction:false,
        },
      });
      
    // 햄버거 버튼 생성
    $('#hamburger').click(function(){
        $('#hamburger span').toggleClass('active');
        $(' .header ul.header-btn-wrapper').toggleClass('active');
    });
    // 컨테이너(바깥영역) 클릭했을때 햄버거 메뉴페이지 들어가고, 햄버거버튼 모양 원래대로 처리
    $('.container').click(function(){
        $(' .header ul.header-btn-wrapper').removeClass('active');
        $('#hamburger span').removeClass('active');


    });
    

}); //end

