<script>
    (function(){
        let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight; // 页面总高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight; // 浏览器视口高度
        let scrollAvail = pageHeight - windowHeight; // 可滚动的高度
        console.log('可滚动的高度：', scrollAvail);
        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  // 获取滚动条的高度
            console.log('滚动条的高度：', scrollTop);
            document.querySelector('.progressdx').style.width = (scrollTop/scrollAvail)*100 + '%';    // 计算占比
        };
    }());
</script>
