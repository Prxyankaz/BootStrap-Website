document.addEventListener("DOMContentLoaded", function () {
    const collapses = document.querySelectorAll('.collapse');

    collapses.forEach((collapse) => {
      collapse.addEventListener('show.bs.collapse', function () {
        collapses.forEach((item) => {
          if (item !== collapse && item.classList.contains('show')) {
            new bootstrap.Collapse(item, { toggle: false }).hide();
          }
        });
      });
    });

    document.addEventListener('click', function (event) {
      const isClickInside = Array.from(collapses).some(collapse => collapse.contains(event.target)) ||
        event.target.closest('[data-bs-toggle="collapse"]');

      if (!isClickInside) {
        collapses.forEach((collapse) => {
          if (collapse.classList.contains('show')) {
            new bootstrap.Collapse(collapse, { toggle: false }).hide();
          }
        });
      }
    });
  });
  
  const btn = document.getElementById('themeToggleSidebar');
  // On load, apply saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
  });

