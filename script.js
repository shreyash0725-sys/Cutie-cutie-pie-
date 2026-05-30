const pages = document.querySelectorAll('.page');

// Confetti + Hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = ['💗', '💕', '💖', '❤️', '🥰'][Math.floor(Math.random()*5)];
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 30 + 20 + 'px';
  heart.style.opacity = Math.random() * 0.7 + 0.5;
  heart.style.zIndex = 2;
  document.body.appendChild(heart);

  let y = window.innerHeight;
  const speed = Math.random() * 3 + 2;

  const animate = setInterval(() => {
    y -= speed;
    heart.style.top = y + 'px';
    heart.style.transform = `rotate(${Math.random()*30-15}deg)`;
    
    if (y < -100) {
      clearInterval(animate);
      heart.remove();
    }
  }, 30);
}

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => createHeart(), i * 20);
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

// Start flying hearts
setInterval(() => {
  if (Math.random() > 0.4) createHeart();
}, 300);

// Show first page
document.getElementById('page1').classList.add('active');
