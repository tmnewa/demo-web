var bg_width = 1280;
var bg_height = 803;
var bg_proportion = bg_width / bg_height;

windowDetect();

window.addEventListener('resize', windowDetect);

function windowDetect() {
  var window_proportion = window.innerWidth / window.innerHeight;
  var container = document.querySelector('.container');
  if (window_proportion > bg_proportion) { // use max height

    console.log(container);
    if (container.classList) {

      container.classList.add('mode--vh');
    } else {
      container.className += ' ' + 'mode--vh';
    }
  } else {
    if (container.classList) {

      container.classList.remove("mode--vh");
    } else {

      container.className = container.className.replace(new RegExp('(^|\\b)' + "mode--vh" + '(\\b|$)', 'gi'), ' ');
    }
  }

}

var angle = 0;
var hand__seconds = document.getElementById('hand__seconds');
setInterval(function () {
  hand__seconds.style.webkitTransform = 'rotateZ(' + angle + 'deg)';
  hand__seconds.style.transform = 'rotateZ(' + angle + 'deg)';
  angle += 6;
  //  console.log(angle)
}, 1000)
