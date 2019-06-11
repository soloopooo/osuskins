(function() {
    var dh = $(document).height();
    var vh = $(window).height();
    var sHeight = dh - vh;
    $(window).scroll(function () {  
      var perc = $(window).scrollTop() / (dh - vh);
      $('.j-scroll-indicator').css({width: perc * 100 + '%'});
});  
}());