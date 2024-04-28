function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// DARK/LIGHT THEME 
/*
document.getElementById('darkModeToggle').addEventListener('click', function() {
  var body = document.body;
  var header = document.querySelector('header');
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
});
*/
