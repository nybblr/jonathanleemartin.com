(document => {

let toggleMenu = document.querySelectorAll('.js-toggle-menu');
let navbar = document.querySelector('.js-menu');
let scrollBody = document.querySelector('.js-scroll-body');
let clickBody = document;

let hide = () => {
  navbar.classList.remove('menu-expanded');
  scrollBody.classList.remove('body-scroll-lock');
  clickBody.removeEventListener('click', hide);
};

let show = () => {
  navbar.classList.add('menu-expanded');
  scrollBody.classList.add('body-scroll-lock');
  setTimeout(() => {
    clickBody.addEventListener('click', hide);
  }, 0);
};

let toggle = () => {
  let isOpen = navbar.classList.contains('menu-expanded');
  isOpen ? hide() : show();
};

let handleToggle = (event) => {
  event.preventDefault();
  toggle();
};

toggleMenu.forEach(button => {
  button.addEventListener('click', handleToggle);
});

})(window.document);

(document => {

let contactLinks = document.querySelectorAll('a[data-service]');

let handleContactLink = ({ currentTarget: link }) => {
  let { service } = link.dataset;
  let serviceButton = document.querySelector(`input[data-service="${service}"]`)
  serviceButton.checked = true;
};

contactLinks.forEach(link => {
  link.addEventListener('click', handleContactLink);
});

})(window.document);

((document, autosize) => {

let textareas = document.querySelector('textarea.autogrow');
autosize(textareas);

})(window.document, window.autosize);
