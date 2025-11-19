// Mobile menu toggle and small interactions
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      // swap icon between hamburger and X
      if (menuIcon) {
        if (isHidden) {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        } else {
          menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
        }
      }
    });
  }

  // Close mobile menu when clicking outside (optional improvement)
  document.addEventListener('click', (e) => {
    if (!mobileMenu || !menuBtn) return;
    if (mobileMenu.classList.contains('hidden')) return;
    const target = e.target;
    if (!mobileMenu.contains(target) && !menuBtn.contains(target)) {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
    }
  });
  
  // Add small keyboard navigation helpers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
        menuBtn.focus();
      }
    }
  });
});

