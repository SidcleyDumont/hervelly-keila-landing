// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      const a = item.querySelector('.faq-a');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Open first FAQ on load
const firstOpen = document.querySelector('.faq-item.open .faq-a');
if (firstOpen) firstOpen.style.maxHeight = firstOpen.scrollHeight + 'px';

// Mobile menu
const menu = document.getElementById('mobileMenu');
document.getElementById('menuToggle').addEventListener('click', () => menu.classList.add('open'));
document.getElementById('menuClose').addEventListener('click', () => menu.classList.remove('open'));
menu.querySelectorAll('[data-close]').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
