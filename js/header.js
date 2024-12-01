const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink'); // Додаємо клас при скролі
  } else {
    header.classList.remove('shrink'); // Видаляємо клас, якщо повертаємось вгору
  }
});