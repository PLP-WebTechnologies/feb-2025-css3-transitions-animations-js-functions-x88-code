const body = document.body;
const button = document.getElementById('toggleTheme');

// Load saved theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add('theme-light');
  }
}

// Toggle theme and save to localStorage
function toggleTheme() {
  body.classList.toggle('theme-dark');
  body.classList.toggle('theme-light');

  // Animate button
  button.classList.add('animate');
  setTimeout(() => button.classList.remove('animate'), 800);

  const currentTheme = body.classList.contains('theme-dark') ? 'theme-dark' : 'theme-light';
  localStorage.setItem('theme', currentTheme);
}

// Event Listener
button.addEventListener('click', toggleTheme);

// Initialize
loadTheme();
