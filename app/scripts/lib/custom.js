function sliding() {
    var offset = 100;

    $('#page-content').scroll(function(){
        console.log('scrolling',$('#page-content').scrollTop());
        if ($('#page-content').scrollTop() > offset) {
            $('#slider').addClass('fixed');
            $('#detail_page').addClass('fixed');
        } else {
            $('#slider').removeClass('fixed');
            $('#detail_page').removeClass('fixed');
        }
    });    
}
