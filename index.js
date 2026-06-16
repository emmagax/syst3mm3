
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






// Keep track of whether any window is open (used to suppress hover info panels)
function updateWindowOpenState() {
  const anyVisible = document.querySelectorAll('.windows > div.window-visible').length > 0;
  document.body.classList.toggle('window-open', anyVisible);
}

function windowIsRunning(win) {
  if (!win) {
    return false;
  }

  return win.classList.contains('window-visible') || win.dataset.running === 'true';
}

function syncNavActiveState() {
  const musicActive = windowIsRunning(document.querySelector('#window1'));
  const portfolioActive = windowIsRunning(document.querySelector('#window2'));

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('active', Boolean(musicActive));
  });

  document.querySelectorAll('.nav-item2').forEach((item) => {
    item.classList.toggle('active', Boolean(portfolioActive));
  });
}

function markWindowRunning(win, isRunning) {
  if (win) {
    win.dataset.running = isRunning ? 'true' : 'false';
  }
}

window.updateWindowOpenState = updateWindowOpenState;
window.syncNavActiveState = syncNavActiveState;

// Handle Click with Sound

const clickableItems = document.querySelectorAll('.nav-item',);

const wmplayer = document.getElementById('app');
const musicButton = document.querySelector('.nav-item .nav-btn');
const windowDisplay1 = document.querySelector("#window1");

const windowDisplay2 = document.querySelector("#window2");

if (musicButton && wmplayer) {
  musicButton.addEventListener('click', () => {
    wmplayer.style.display = 'block';
  });
}

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

function restoreOrCenterWindow(win) {
  if (!win) return;

  const navItem = win._navButton?.closest('.nav-item, .nav-item2');

  if (navItem) {
    navItem.classList.remove('minimized');
  }

  if (
    typeof window.restoreWindowPosition === 'function' &&
    win.dataset.restoreLeft &&
    win.dataset.restoreTop
  ) {
    window.restoreWindowPosition(win);
    return;
  }

  centerWindow(win);
}

clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.nav-btn');
    if (btn) {
      windowDisplay1._navButton = btn;
    }

    item.classList.remove('minimized');
    markWindowRunning(windowDisplay1, true);

    if (wmplayer) {
      wmplayer.style.display = 'block';
    }

    // immediately reveal window/sidebar/tab instead of waiting for sound
    if (windowDisplay1.classList.contains('window-hidden')) {
      windowDisplay1.classList.remove('window-hidden');
      windowDisplay1.classList.add('window-visible');
      restoreOrCenterWindow(windowDisplay1);
    }

    if (typeof window.updateWindowOpenState === 'function') {
      window.updateWindowOpenState();
    } else {
      document.body.classList.add('window-open');
    }

    window.syncNavActiveState();
  });
});

const clickableItems2 = document.querySelectorAll('.nav-item2');

clickableItems2.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('.nav-btn');
    if (btn) {
      windowDisplay2._navButton = btn;
    }

    item.classList.remove('minimized');
    markWindowRunning(windowDisplay2, true);

    // Open portfolio window (window2) and activate its tab.
    if (windowDisplay2.classList.contains('window-hidden')) {
      windowDisplay2.classList.remove('window-hidden');
      windowDisplay2.classList.add('window-visible');
      restoreOrCenterWindow(windowDisplay2);
    }

    if (typeof window.updateWindowOpenState === 'function') {
      window.updateWindowOpenState();
    } else {
      document.body.classList.add('window-open');
    }

    window.syncNavActiveState();
  });
});

const clickableItems3 = document.querySelectorAll('.nav-m-home');




// Decoding



// Usage: apply on hover
// Only trigger the hover info when the actual button is hovered (not the empty animation container)
document.querySelectorAll('.nav-item, .nav-item2').forEach(item => {
  const btn = item.querySelector('.nav-btn');
  const navInfo = item.querySelector('.nav-info');

  if (btn) {
    btn.addEventListener('mouseenter', () => {
      item.classList.add('show-label');

      const h2 = navInfo ? navInfo.querySelector('h2.decode-text') : null;

      if (h2 && typeof decodeText === 'function') {
        decodeText(h2);
      }
    });

    btn.addEventListener('mouseleave', () => {
      if (!navInfo || !navInfo.matches(':hover')) {
        item.classList.remove('show-label');
      }
    });
  }

  if (navInfo) {
    navInfo.addEventListener('mouseenter', () => {
      item.classList.add('show-label');
    });

    navInfo.addEventListener('mouseleave', () => {
      item.classList.remove('show-label');
    });
  }
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

if (overlayBtn && overlay) {
  overlayBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    if (logo) {
      logo.style.display = 'block';
    }

    overlay.addEventListener('transitionend', () => {
      overlay.remove();
    }, { once: true });
  });
}

