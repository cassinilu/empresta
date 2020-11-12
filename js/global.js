$(document).ready(function () {
    // INCLUDE DO MENU PRINCIPAL
    $('#mainNav').load('include/main-nav.html',function(){
        
        // FECHAR O MENU
        $('#mainNav').find('.toggleMobile').click(function(e){
            $('#container-main').toggleClass('menuOppened');
        });

        // SWIPE MENU
        var mc = new Hammer(document.querySelector('#mainNav'));
        mc.on("swipeleft", function(ev) {
            if($(window).width() < 768){
                $('#mainNav').find('.toggleMobile').trigger('click');
            }
        });
        // SUBMENU
        $('.toggle-submenu').click(function (e) {
            e.preventDefault();
            !$('#mainNav').hasClass('minSize') || $(window).width() < 768 ? $(this).toggleClass('active').next().stop().slideToggle('fast') : ''
        });

        // TAMANHO DO MENU
        $('#mainNav').find('.toggleNav').click(function (e) { 
            $('#mainNav').toggleClass('minSize');
        });
    });

    // INCLUDE DA HEADER
    $('header:not(.preview-header)').load('include/header.html',function(){
        // TAMANHO DO MENU
        $('header').find('.toggleNav').click(function (e) { 
            $('#mainNav').toggleClass('minSize');
        });

        // MENU NO MOBILE
        $('header').find('.toggleMobile').click(function(e){
            $('#container-main').toggleClass('menuOppened');
        }); 
    });

    // APLICAÇÃO DE TOOLTIP
    $('[data-toggle="tooltip"]').each(function(index, el) {
		$(this).tooltip({
	        trigger:'hover focus',
	        template: `<div class="tooltip ${ $(this).data('type') }" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>`
	    });
    });
});

$(window).resize(function () { 
    $('#container-main').removeClass('menuOppened');
});