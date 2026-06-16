/*
  Window behavior: close / maximize / minimize / drag.
  Supports multiple windows (window1, window2, etc.) and their sidebar tabs (minimItem1, minimItem2, ...).
*/

const windows = Array.from(document.querySelectorAll('.windows > div[id^="window"]'));

if (!windows.length) {
  console.error('No windows found for window controls.');
} else {
  windows.forEach(win => {
    const idNum = win.id.replace(/^window/, '');
    const tab = document.getElementById(`minimItem${idNum}`);

    setupWindow(win, tab);
    dragElement(win);
  });
}

// Ensure body has correct "window-open" state on load
updateWindowOpenState();
window.syncNavActiveState?.();

function playClickSound() {
  if (typeof window.playClickSound === 'function' && window.playClickSound !== playClickSound) {
    return window.playClickSound();
  }

  const audio = new Audio('./sounds/hover-sound.mp3');
  audio.volume = 1;
  audio.play().catch(() => {});
}

function updateWindowOpenState() {
  const anyWindowVisible = document.querySelectorAll('.windows > div.window-visible').length > 0;
  document.body.classList.toggle('window-open', anyWindowVisible);
}

function getNavItemForWindow(win, tab) {
  return tab?.closest('.nav-item, .nav-item2') || win._navButton?.closest('.nav-item, .nav-item2');
}

function setNavItemMinimizedState(win, tab, isMinimized) {
  const navItem = getNavItemForWindow(win, tab);
  if (navItem) {
    navItem.classList.toggle('minimized', isMinimized);
  }
}

function saveWindowPosition(win) {
  if (!win) return;

  const rect = win.getBoundingClientRect();
  win.dataset.restoreLeft = `${rect.left}px`;
  win.dataset.restoreTop = `${rect.top}px`;
}

function restoreWindowPosition(win) {
  if (!win) return;

  if (win.dataset.restoreLeft && win.dataset.restoreTop) {
    win.style.left = win.dataset.restoreLeft;
    win.style.top = win.dataset.restoreTop;
  } else {
    win.style.left = '';
    win.style.top = '';
  }

  win.style.transform = '';
  win.style.opacity = '';
  win.style.pointerEvents = '';
}

// expose helper for other scripts to keep window-open state in sync
window.updateWindowOpenState = updateWindowOpenState;
window.restoreWindowPosition = restoreWindowPosition;

function setupWindow(win, tab) {
  const closeBtn = win.querySelector('.window-close');
  const maxBtn = win.querySelector('.window-maximize');
  const minBtn = win.querySelector('.window-minimize');

  if (closeBtn) closeBtn.addEventListener('click', () => closeWindow(win, tab));
  if (maxBtn) maxBtn.addEventListener('click', () => toggleMaximize(win));
  if (minBtn) minBtn.addEventListener('click', () => minimizeWindow(win, tab));

  if (tab) {
    tab.addEventListener('click', () => restoreWindow(win, tab));
  }
}

function closeWindow(win, tab) {

  win.classList.remove('fade-in', 'window-visible', 'minimizing', 'maximize');
  win.classList.add('window-hidden');
  win.dataset.running = 'false';
  delete win.dataset.restoreLeft;
  delete win.dataset.restoreTop;
  setNavItemMinimizedState(win, tab, false);

  if (tab) {
    tab.classList.remove('active-tab', 'minimized-tab');
    tab.classList.add('closed-tab');
  }

  // Only restore the nav button that opened this window (if known).
  // This prevents closing one window from restoring other windows' nav icons.
  const targetBtn = win._navButton;
  if (targetBtn) {
    if (targetBtn.style.visibility === 'hidden') {
      targetBtn.style.visibility = 'visible';
      targetBtn.classList.add('fade-in-scale');
    }
  } else {
    // Fallback: restore any hidden nav elements for compatibility.
    document.querySelectorAll('.nav-btn').forEach(item => {
      if (item.style.visibility === 'hidden') {
        item.style.visibility = 'visible';
        item.classList.add('fade-in-scale');
      }
    });
  }

  updateWindowOpenState();
  window.syncNavActiveState?.();
}

function toggleMaximize(win) {
  win.classList.toggle('maximize');
}

function minimizeWindow(win, tab) {
  const target = getNavItemForWindow(win, tab);

  if (!target) return;

  saveWindowPosition(win);

  const windowRect = win.getBoundingClientRect();
  const tabRect = target.getBoundingClientRect();

  const deltaX = (tabRect.left + tabRect.width / 2) - (windowRect.left + windowRect.width / 2);
  const deltaY = (tabRect.top + tabRect.height / 2) - (windowRect.top + windowRect.height / 2);

  win.style.setProperty('--minimize-to-x', `${deltaX}px`);
  win.style.setProperty('--minimize-to-y', `${deltaY}px`);

  win.classList.add('minimizing');

  setTimeout(() => {
    win.classList.remove('minimizing');
    win.classList.remove('window-visible');
    win.classList.add('window-hidden');

    win.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
    win.style.opacity = '0';
    win.style.pointerEvents = 'none';
    setNavItemMinimizedState(win, tab, true);

    updateWindowOpenState();
    window.syncNavActiveState?.();
  }, 500);
}

function restoreWindow(win, tab) {

  restoreWindowPosition(win);
  setNavItemMinimizedState(win, tab, false);

  win.classList.remove('window-hidden', 'minimizing');
  win.classList.add('window-visible');

  if (tab) {
    tab.classList.remove('minimized-tab', 'closed-tab');
    tab.classList.add('active-tab');
  }

  updateWindowOpenState();
  window.syncNavActiveState?.();
}

function dragElement(elmnt) {
  if (!elmnt) {
    console.error('Cannot drag: element is null');
    return;
  }

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = elmnt.querySelector('.window-header');

  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    if (elmnt.classList.contains('maximize')) {
      return;
    }

    if (!elmnt || !elmnt.style) {
      console.error('Element lost during drag operation');
      return;
    }

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    if (!elmnt || !elmnt.style || elmnt.classList.contains('maximize')) {
      closeDragElement();
      return;
    }

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
    elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';// Ensure dragged window stays on top
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
