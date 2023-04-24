//redirecting to specific codes
const ddElements = document.querySelectorAll('dd a');

ddElements.forEach((ddElement) => {
  ddElement.addEventListener('click', (event) => {
    event.preventDefault();
    const href = ddElement.getAttribute('href');
    const targetElement = document.querySelector(href);
    const offset = targetElement.offsetTop - 20; // adjust scroll position by 20 pixels
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});
