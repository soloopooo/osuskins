(function() {
    var wh = window.innerHeight;//页面高度
    var h = document.getElementsByClassName("visible");

    var dh = h[0].getBoundingClientRect.height - wh;
    window.addEventListener('scroll', function() {
        window.requestAnimationFrame(function() {
            var percent = Math.max(0, Math.min(1, window.pageYOffset / dh));
            document.querySelector("#progressdx").style.width = percent * 100 + '%';
        })
    }, false);
})();
