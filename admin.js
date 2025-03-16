function navigate(section) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.style.display = 'none');

  const targetSection = document.getElementById(section);
  if (targetSection) {
      targetSection.style.display = 'block';
  }

  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));

  const activeLink = [...links].find(link => link.getAttribute('onclick')?.includes(section));
  if (activeLink) {
      activeLink.classList.add('active');
  }
}

document.addEventListener("DOMContentLoaded", () => navigate('feedback'));
