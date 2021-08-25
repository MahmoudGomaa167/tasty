$(document).ready(function(){
    // Dark Mode Toggle
    $('.icon-moon').click(function(){
        $(this).toggleClass('icon-sun');
        $(this).toggleClass('icon-moon');
        $('body').toggleClass('dark-mode');
    });

    
    let navLinks = document.querySelectorAll('.nav__link');

    // Scroll Smoothly to sections
    for(let link of navLinks){
        let sectionHref = $(link).attr('href');
        let sectionOffset = Math.ceil($(sectionHref).offset().top + 50);

        $(link).click(function(){
            $('body, html').animate({
                scrollTop: sectionOffset
            }, 2000);
            $('.nav__menu').removeClass('show-menu');
        });
    }
    
    // Add Active Class
    $(window).scroll(function(){
        let windowScrollTop = $(window).scrollTop();

        for(let link of navLinks){
            let sectionHref = $(link).attr('href');
            let sectionOffset = Math.ceil($(sectionHref).offset().top);

            if(windowScrollTop > sectionOffset - 100){
                $(link).addClass('active');
                $(link).parent().siblings().children().removeClass('active');
            }
        }
    });

    // Show goup button on scroll
    $(window).scroll(function(){
        let windowScrollTop = $(window).scrollTop();
        if(windowScrollTop > 100){
            $('.goup').css('opacity', '1');
            $('nav').css('box-shadow', '0 2px 8px rgba(3, 74, 40, 0.15)')
        }
        else{
            $('.goup').css('opacity', '0');
            $('nav').css('box-shadow', 'none')
        }
    });

    // Click on goup button to home
    $('.goup').click(function(){
        let homeOffset = $('#home').offset().top;
        $('body, html').animate({
            scrollTop: homeOffset
        }, 2000);
    });

    // Nav Toggler
    $('.nav__toggle').click(function(){
        $('.nav__menu').toggleClass('show-menu');
    });


    // Scroll Reveal Animation Library
    let sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    });

    sr.reveal(`.home__intro, .home__image, .about__image, .about__info, .services__header, .services__item, .menu__header, .menu__item, .application__image, .application__info, .contact__info, .contact__button, .footer__item`,{
        interval: 200
    })
    
})