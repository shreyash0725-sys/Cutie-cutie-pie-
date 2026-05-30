const pages = document.querySelectorAll('.page');
let hearts = [];

// Smooth heart animation
function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = ['💗', '💕', '💖', '❤️', '🥰'][Math.floor(Math.random() * 5)];
  heart.style.position = 'absolute';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 22 + 18 + 'px';
  heart.style.opacity = Math.random() * 0.5 + 0.4;
  heart.style.zIndex = 2;
  heart.style.userSelect = 'none';
  document.body.appendChild(heart);
  
  let y = window.innerHeight + 50;
  let x = parseFloat(heart.style.left);
  const speed = Math.random() * 1.8 + 1.2;
  const sway = Math.random() * 0.8 + 0.4;

  hearts.push(heart);

  function animate() {
    y -= speed;
    x += Math.sin(y / 30) * sway;
    
    heart.style.top = y + 'px';
    heart.style.left = x + 'vw';
    heart.style.transform = `rotate(${Math.sin(y / 20) * 15}deg)`;

    if (y > -100) {
      requestAnimationFrame(animate);
    } else {
      heart.remove();
      hearts = hearts.filter(h => h !== heart);
    }
  }
  animate();
}

function launchConfetti() {
  for (let i = 0; i < 25; i++) {        // Even fewer
    setTimeout(() => createHeart(), i * 40);
  }
}

// Navigation
function nextPage(pageNum) {
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(`page${pageNum}`).classList.add('active');
  launchConfetti();

  if (pageNum === 3) {
    setTimeout(() => {
      const bar = document.getElementById('progressBar');
      bar.style.width = '100%';
      setTimeout(() => {
        document.getElementById('checkBtn').style.display = 'block';
      }, 3200);
    }, 400);
  }
}

// Very light background hearts
setInterval(() => {
  if (hearts.length < 8 && Math.random() > 0.6) {   // Max 8 hearts at once
    createHeart();
  }
}, 1200);

// Initialize
document.getElementById('page1').classList.add('active');
