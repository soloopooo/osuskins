(function() {
    var wh = window.innerHeight;//页面高度
    var hm = document.getElementsByClassName("visible");
    var h = hm[0].getBoundingClientRect().height;//body高度
    var dh = h - wh;
    window.addEventListener('scroll', function() {
        window.requestAnimationFrame(function() {
            var percent = Math.max(0, Math.min(1, window.pageYOffset / dh));
            document.querySelector(".progressdx").style.width = percent * 100 + '%';
        })
    }, false);
})();
