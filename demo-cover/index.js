var angle = 0;
var hand__seconds = document.getElementById('hand__seconds');
setInterval(function () {
    hand__seconds.style.webkitTransform = 'rotateZ(' + angle + 'deg)';
    hand__seconds.style.transform = 'rotateZ(' + angle + 'deg)';
    angle += 6;
    console.log(angle)
}, 1000)
