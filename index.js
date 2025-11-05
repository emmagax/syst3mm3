
// Matrix Code Rain (Canvas Drawing)
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('Matrix');
    const context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '01';
    
    const alphabet = katakana + latin + nums;
    
    const fontSize = 20;
    const columns = canvas.width/fontSize;
    
    const rainDrops = [];
    
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        context.globalCompositeOperation = 'destination-out';
        context.fillStyle = 'rgba(0, 0, 0, 0.1)'; // adjust alpha for fade speed
        context.fillRect(0, 0, canvas.width, canvas.height);
      
        // Switch back to default to draw new text
        context.globalCompositeOperation = 'source-over';
      
        context.fillStyle = '#00a6ff76';
        context.font = fontSize + 'px monospace';
        context.textBaseline = 'top';
      
        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
      
          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
    };
    
    setInterval(draw, 50);
});

// Hover Sound

let audioUnlocked = false;
const hoverSound = document.getElementById('hover-sound');

document.body.addEventListener('click', () => {
  audioUnlocked = true;
  hoverSound.volume = 1;
  hoverSound.play().catch(() => {}); // play once to unlock
  hoverSound.pause();
  hoverSound.currentTime = 0;
});


document.querySelectorAll('.nav-m-home').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.nav-wheel-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.window-close').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.window-maximize').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.window-minimize').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.nav-btn').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.sidebar-btn').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.music-control__stream').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.music-control__lyrics').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});
document.querySelectorAll('.window-close-m').forEach(item => {
  item.addEventListener('mouseenter', () => {
    if (audioUnlocked) {
      hoverSound.currentTime = 0;
      hoverSound.play();
    }
  });
});



hoverSound.play().catch(error => {
  console.log('Audio play prevented:', error);
});

// Handle Click with Sound

const clickableItems = document.querySelectorAll('.nav-item',);

const windowDisplay1 = document.querySelector("#window1");

const windowTab = document.querySelector("#minimItem1");

const sidebar = document.querySelector(".sidebar")

clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1;
    audio.play();
    
    audio.onended = () => {
      if (windowDisplay1.classList.contains('window-hidden')) {
        windowDisplay1.classList.remove('window-hidden');
        windowDisplay1.classList.add('window-visible');
      
      if (sidebar.classList.contains('window-hidden')) {
        sidebar.classList.remove('window-hidden');
      }

      if (windowTab.classList.contains('closed-tab')) {
        windowTab.classList.remove('closed-tab');
        windowTab.classList.add('active-tab');
      }
        
        
      }
    };
  });
});

const clickableItems2 = document.querySelectorAll('.nav-item2');

clickableItems2.forEach(item => {
  item.addEventListener('click', () => {
    const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();

    
  });
});

const clickableItems3 = document.querySelectorAll('.nav-m-home');


clickableItems3.forEach(item => {
  item.addEventListener('click', () => {
    const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
  });
});



// Decoding

function decodeText(element) {
  const chars = '!<>-_\\/[]{}-=+*^?#__ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const originalText = element.dataset.value || element.textContent;
  element.dataset.value = originalText;
  let frame = 0;
  const totalFrames = 20;
  const intervalTime = 90;

  const scramble = () => {
    let output = '';
    for (let i = 0; i < originalText.length; i++) {
      if (i < frame) {
        output += originalText[i];
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.textContent = output;
    frame++;
    if (frame <= originalText.length) {
      setTimeout(scramble, intervalTime);
    } else {
      element.textContent = originalText;
    }
  };

  scramble();
}

// Usage: apply on hover
document.querySelectorAll('.nav-item').forEach(navItem => {
  navItem.addEventListener('mouseenter', () => {
    const h2 = navItem.querySelector('.nav-info h2.decode-text');
    if (h2) {
      decodeText(h2);
    }
  });
});
document.querySelectorAll('.nav-item2').forEach(navItem => {
  navItem.addEventListener('mouseenter', () => {
    const h2 = navItem.querySelector('.nav-info h2.decode-text');
    if (h2) {
      decodeText(h2);
    }
  });
});
document.querySelectorAll('#minimItem1').forEach(sidebarItem => {
  sidebarItem.addEventListener('mouseenter', () => {
    const h2 = sidebarItem.querySelector('h2.decode-text');
    if (h2) {
      decodeText(h2);
    }
  });
});

// Fade Out Button

document.querySelectorAll('.nav-btn').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('fade-out-scale');

    item.addEventListener('animationend', () => {
      item.style.visibility = 'hidden';
      item.classList.remove('fade-out-scale');
    }, { once: true });
  });
});



// Hide Info Panel on click

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const navInfo = item.querySelector('.nav-info');
    if (navInfo) {
      navInfo.style.display = 'none';  

      setTimeout(() => {
        navInfo.style.display = ''; 
      }, 3000);
    }
  });
});

document.querySelectorAll('.nav-item2').forEach(item => {
  item.addEventListener('click', () => {
    const navInfo = item.querySelector('.nav-info');
    if (navInfo) {
      navInfo.style.display = 'none';  

      setTimeout(() => {
        navInfo.style.display = ''; 
      }, 3000);
    }
  });
});


const overlay = document.getElementById('black-overlay');

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');

  overlay.addEventListener('transitionend', () => {
    overlay.remove();
  }, { once: true });
});

