var card = document.querySelector('#tech-writing');
var gestures = new Hammer.Manager(card, {
  touchAction: "auto"
});

var pinch = new Hammer.Pinch();
gestures.add(pinch);

card.style.transformOrigin = "top left";

var focused = true;

var toggleFocus = function() {
  focused = !focused;
  card.style.transform = `scale(${multiplier()})`;
};

var multiplier = function() {
  return focused ? 1 : 0.5;
};

card.addEventListener('click', function(event) {
  card.style.transition = `transform 0.5s var(--easing)`;
  toggleFocus();
});

gestures.on("pinchstart", function(event) {
  card.style.transition = `none`;
});

gestures.on("pinch", function(event) {
  event.preventDefault();
  card.style.transform = `scale(${event.scale * multiplier()})`;
});

gestures.on("pinchend", function(event) {
  card.style.transition = `transform 0.5s var(--easing)`;
  toggleFocus();
});

gestures.on("pinchcancel", function(event) {
  card.style.transition = `transform 0.5s var(--easing)`;
  card.style.transform = `scale(${multiplier()})`;
});
