$(function(){
    // galerie d'affiche de film
    $('.affiche').on('click',function(){
        $(this).addClass('on').removeClass('off')
        $('.affiche').not(this).addClass('off').removeClass('on')
    });
    // générateur de synopsis
    $('.synopsis').hide()    
    $('#deadman').on('click',function(){
        $('#syndead').delay(500).fadeIn('slow')
        $(".synopsis[id!='syndead']" ).fadeOut();
    });
    $('#volcoucou').on('click',function(){
        $('#synvolcoucou').delay(500).fadeIn('slow')
        $(".synopsis[id!='synvolcoucou']" ).fadeOut();
    });
    $('#requiem').on('click',function(){
        $('#synrequiem').delay(500).fadeIn('slow')
        $(".synopsis[id!='synrequiem']" ).fadeOut();
    });
    $('#edward').on('click',function(){
        $('#synedward').delay(500).fadeIn('slow')
        $(".synopsis[id!='synedward']" ).fadeOut();
    });
    $('#enter').on('click',function(){
        $('#synenter').delay(500).fadeIn('slow')
        $(".synopsis[id!='synenter']" ).fadeOut();
    });
    $('#enemy').on('click',function(){
        $('#synenemy').delay(500).fadeIn('slow')
        $(".synopsis[id!='synenemy']" ).fadeOut();
    });
    
});