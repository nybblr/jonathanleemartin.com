var active;
var activeClass = 'scroll-active';

var scroll = new SmoothScroll('a[href*="#"]', {
  updateURL: false,
  speed: 750,
  customEasing: BezierEasing(.37,1.12,.07,1)
});

document.addEventListener('scrollStart', function (event) {
  var current = event.detail;
  active && active.anchor.classList.remove(activeClass);
  active && active.toggle.classList.remove(activeClass);
  active = current;
  active && active.anchor.classList.add(activeClass);
  active && active.toggle.classList.add(activeClass);
});
