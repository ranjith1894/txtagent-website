const materialStyles = document.createElement('link');
materialStyles.rel = 'stylesheet';
materialStyles.href = 'material.css';
document.head.appendChild(materialStyles);

document.querySelectorAll('.install').forEach(link => link.addEventListener('click', event => {
  const url = document.documentElement.dataset.storeUrl;
  if (url) { link.href = url; return; }
  event.preventDefault();
  const toast = document.querySelector('.toast');
  toast.classList.add('show');
  clearTimeout(window.txtagentToast);
  window.txtagentToast = setTimeout(() => toast.classList.remove('show'), 2500);
}));

document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('details').forEach(other => { if (other !== item) other.open = false; });
}));
