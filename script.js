const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const filters = document.querySelectorAll('.capture-filter');
const captures = document.querySelectorAll('.capture-card');

filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(item => item.classList.toggle('active', item === button));
  captures.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
  });
}));

const lightbox = document.querySelector('.capture-lightbox');
const lightboxImage = lightbox?.querySelector('img');

captures.forEach(card => card.addEventListener('click', () => {
  if (!lightbox || !lightboxImage) return;
  const preview = card.querySelector('img');
  lightboxImage.src = card.dataset.full;
  lightboxImage.alt = preview?.alt || 'HAL interface capture';
  lightbox.showModal();
}));

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
