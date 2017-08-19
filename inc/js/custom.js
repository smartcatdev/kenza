 jQuery( document ).ready( function( $ ) { 
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯ 
//  Sticky Bar
//______________________________________________________________________________
    if ( $( window ).width() > 600 ){
        if ( $( "#wpadminbar" ).length > 0 ) {
            $( ".site-header" ).sticky({ topSpacing:32 });
        } else {
            $( ".site-header" ).sticky({ topSpacing:0 });
        }
    } else {
        $( ".site-header" ).unstick();
    }

    $( window ).resize(function() {        
        if ( $( window ).width() > 600 ){
            if ( $( "#wpadminbar" ).length > 0 ) {
                $( ".site-header" ).sticky({ topSpacing:32 });
            } else {
                $( ".site-header" ).sticky({ topSpacing:0 });
            }
        } else {
            $( ".site-header" ).unstick();
        }
    });
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯    
//  Mobile Opacity Layer
//______________________________________________________________________________
    var opacityCtr = 0;
    
    $( ".menu-link" ).on( 'click', function (){
        //Every other click fadeOut
        if ( opacityCtr % 2 ) {
            $( "#mobile-overlay" ).fadeOut(300);
            $('html, body').css({
                overflow: 'auto'
            });
        } else {
            $( "#mobile-overlay" ).fadeIn(200);
            $('html, body').css({
                overflow: 'hidden'
            });
        }
        opacityCtr++;
        
    });
    
    $( ".menu-link" ).on( 'touchend', function (){
        //Every other click fadeOut
        if ( opacityCtr % 2 ) {
            $( "#mobile-overlay" ).fadeOut(300);
            $('html, body').css({
                overflow: 'auto'
            });
        } else {
            $( "#mobile-overlay" ).delay(200).fadeIn(200); 
            $('html, body').css({
                overflow: 'hidden'
            });
        }
        opacityCtr++;
        
    });
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
//  Search Menu
//______________________________________________________________________________  
    $( ".search-btn" ).on( 'click', function(){
        $( "#search-menu" ).fadeIn(300).css( "display", "table" );
        $('html, body').css({
           overflow: 'hidden',
           height: '100%'
        });
    });
    $( ".search-btn" ).on( 'touchend', function(){
        $( "#search-menu" ).fadeIn(300).css( "display", "table" );
        $( "html, body" ).css({
           overflow: 'hidden',
           height: '100%'
        });
    });
    
    $( "#close-search-btn" ).on( 'click', function(){
        $( "#search-menu" ).fadeOut(300);
        $( "#main-navigation" ).css( "z-index", "0" );
        $( "html, body" ).css({
           overflow: 'auto',
           height: 'auto'
        });
    });
    $( "#close-search-btn" ).on( 'touchend', function(){
        $( "#search-menu" ).fadeOut(300);
        $( "#main-navigation" ).css( "z-index", "0" );
        $( "html, body" ).css({
           overflow: 'auto',
           height: 'auto'
        });
    });
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
//  Scroll To Top
//______________________________________________________________________________  
     
    $( "#scrolltotop-btn" ).on( 'click', function(){
        $( 'html, body' ).animate({ scrollTop: 0 }, 'fast' );
    });  
    
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
//  Mobile Menu- Big Slide.js
//______________________________________________________________________________ 
    $( '.menu-link' ).bigSlide({
        menu: ( '#menu' ),
        side: 'right'
    });
    
 });
