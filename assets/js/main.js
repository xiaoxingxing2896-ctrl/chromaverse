
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('toggle-btn');
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
});
