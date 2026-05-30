const pages = document.querySelectorAll('.page');

// Create single heart
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = ['💗', '💕', '💖', '❤️', '🥰'][Math.floor(Math.random()*5)];
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 25 + 18 + 'px';
  heart.style.opacity = Math.random() * 0.6 + 0.4;
  heart.style.zIndex = 2;
  document.body.appendChild(heart);

  let y = window.innerHeight;
  const speed = Math.random() * 2.5 + 1.5;

  const animate = setInterval(() => {
    y -= speed;
    heart.style.top = y + 'px';
    heart.style.transform = `rotate(${Math.random()*20-10}deg)`;
    
    if (y < -100) {
      clearInterval(animate);
      heart.remove();
    }
  }, 40);
}

function launchConfetti() {
  for (let i = 0; i < 35; i++) {   // Reduced from 80 to 35
    setTimeout(() => createHeart(), i * 35);
  }
}

// Navigation
function nextPage(pageNum) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(`page${pageNum}`).classList.add('active');
  launchConfetti();

  // Progress Bar on Page 3
  if (pageNum === 3) {
    setTimeout(() => {
      const bar = document.getElementById('progressBar');
      bar.style.width = '100%';
      
      setTimeout(() => {
        document.getElementById('checkBtn').style.display = 'block';
      }, 3200);
    }, 500);
  }
}

// Fewer background hearts (much slower now)
setInterval(() => {
  if (Math.random() > 0.75) createHeart();   // Reduced frequency
}, 800);   // Slower spawn rate

// Start first page
document.getElementById('page1').classList.add('active');
