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
        let sectionOffset = Math.ceil($(sectionHref).offset().top);

        $(link).click(function(){
            $('body, html').animate({
                scrollTop: sectionOffset
            }, 1500);
        });
    }
    
    // Add Active Class
    $(window).scroll(function(){
        let windowScrollTop = $(window).scrollTop();

        for(let link of navLinks){
            let sectionHref = $(link).attr('href');
            let sectionOffset = Math.ceil($(sectionHref).offset().top);

            if(windowScrollTop > sectionOffset - 150){
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
        }
        else{
            $('.goup').css('opacity', '0');
        }
    });

    // Click on goup button to home
    $('.goup').click(function(){
        let homeOffset = $('#home').offset().top;
        $('body, html').animate({
            scrollTop: homeOffset
        }, 1500);
    });
    
})