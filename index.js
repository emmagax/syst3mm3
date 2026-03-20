
// Matrix Code Rain (Canvas 2D)



// Hover Sound

let audioUnlocked = false;
const hoverSound = document.getElementById('hover-sound');

// Shared click sound (reused to avoid creating a new Audio object on every click)
const clickSound = new Audio('./sounds/hover-sound.mp3');
clickSound.volume = 1;
clickSound.preload = 'auto';

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}
window.playClickSound = playClickSound;

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
document.querySelectorAll('button').forEach(item => {
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

// Keep track of whether any window is open (used to suppress hover info panels)
function updateWindowOpenState() {
  const anyVisible = document.querySelectorAll('.windows > div.window-visible').length > 0;
  document.body.classList.toggle('window-open', anyVisible);
}
window.updateWindowOpenState = updateWindowOpenState;

// Handle Click with Sound

const clickableItems = document.querySelectorAll('.nav-item',);

const windowDisplay1 = document.querySelector("#window1");

const windowTab = document.querySelector("#minimItem1");

const windowDisplay2 = document.querySelector("#window2");
const windowTab2 = document.querySelector("#minimItem2");

const sidebar = document.querySelector(".sidebar")

// helper to center an element within viewport
function centerWindow(el) {
  if (!el) return;
  // clear ALL inline positioning and transform/opacity from minimize or dragging
  el.style.left = '';
  el.style.top = '';
  el.style.transform = '';
  el.style.opacity = '';
  el.style.pointerEvents = '';
  // force reflow so cleared styles are applied
  void el.offsetWidth;
  
  const rect = el.getBoundingClientRect();
  const left = window.innerWidth / 2 - rect.width / 2;
  const top = window.innerHeight / 2 - rect.height / 2;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.nav-btn');
    if (btn) {
      windowDisplay1._navButton = btn;
    }

    playClickSound();

    // immediately reveal window/sidebar/tab instead of waiting for sound
    if (windowDisplay1.classList.contains('window-hidden')) {
      windowDisplay1.classList.remove('window-hidden');
      windowDisplay1.classList.add('window-visible');
      // center immediately without setTimeout
      centerWindow(windowDisplay1);
    }

    if (sidebar.classList.contains('window-hidden')) {
      sidebar.classList.remove('window-hidden');
    }

    if (windowTab.classList.contains('closed-tab')) {
      windowTab.classList.remove('closed-tab');
      windowTab.classList.add('active-tab');
    }

    if (typeof window.updateWindowOpenState === 'function') {
      window.updateWindowOpenState();
    } else {
      document.body.classList.add('window-open');
    }
  });
});

const clickableItems2 = document.querySelectorAll('.nav-item2');

clickableItems2.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.nav-btn');
    if (btn) {
      windowDisplay2._navButton = btn;
    }

    playClickSound();

    // Open portfolio window (window2) and activate its tab.
    if (windowDisplay2.classList.contains('window-hidden')) {
      windowDisplay2.classList.remove('window-hidden');
      windowDisplay2.classList.add('window-visible');
      centerWindow(windowDisplay2);
    }

    if (sidebar.classList.contains('window-hidden')) {
      sidebar.classList.remove('window-hidden');
    }

    if (windowTab2.classList.contains('closed-tab')) {
      windowTab2.classList.remove('closed-tab');
      windowTab2.classList.add('active-tab');
    }

    if (typeof window.updateWindowOpenState === 'function') {
      window.updateWindowOpenState();
    } else {
      document.body.classList.add('window-open');
    }
  });
});

const clickableItems3 = document.querySelectorAll('.nav-m-home');


clickableItems3.forEach(item => {
  item.addEventListener('click', () => {
    playClickSound();
  });
});



// Decoding

function decodeText(element) {
  const chars = '█▓▒░';
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
// Only trigger the hover info when the actual button is hovered (not the empty animation container)
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    if (document.body.classList.contains('window-open')) return;

    const navInfo = btn.parentElement.querySelector('.nav-info');
    const h2 = navInfo ? navInfo.querySelector('h2.decode-text') : null;
    if (h2) {
      decodeText(h2);
    }
  });
});

document.querySelectorAll('.sidebar-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const navInfo = btn.parentElement.querySelector('.nav-info');
    const h2 = navInfo ? navInfo.querySelector('h2.decode-text') : null;
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
const overlayBtn = document.querySelector('.click-screen__button');
const logo = document.querySelector('h1');

overlayBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  logo.style.display = 'block';

  overlay.addEventListener('transitionend', () => {
    overlay.remove();
  }, { once: true });
});

