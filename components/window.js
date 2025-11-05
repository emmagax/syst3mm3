if (windowDisplay1) {
  dragElement(windowDisplay1);
} else {
  console.error("windowDisplay1 element not found for dragging");
}

function dragElement(elmnt) {
  if (!elmnt) {
    console.error("Cannot drag: element is null");
    return;
  }
 
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = document.querySelector(".window-header");
 
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
      console.error("Element lost during drag operation");
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
      console.error("Element lost during drag or became maximized - stopping drag");
      closeDragElement();
      return;
    }
   
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
   
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
 
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Handle close 
const windowClose = document.querySelector(".window-close");

function closeWindow() {
  const audio = new Audio('./sounds/hover-sound.mp3');
  audio.volume = 1;
  audio.play();
 
  if (windowDisplay1) {
    windowDisplay1.classList.remove('fade-in');
    sidebarItemEl.classList.remove('active-tab')
    sidebarItemEl.classList.remove('minimizing')
    sidebarItemEl.classList.add('closed-tab')
    
      windowDisplay1.classList.remove('window-visible');
      windowDisplay1.classList.add('window-hidden');
      
      
      document.querySelectorAll('.nav-btn').forEach(item => {
        if (item.style.visibility === 'hidden') {
          item.style.visibility = 'visible';
          item.classList.add('fade-in-scale');
        }
      })
  }
};

if (windowClose) {
  windowClose.addEventListener("click", closeWindow);
} else {
  console.error("Close button not found");
}

// Handle Maximize

const windowMaximize = document.querySelector(".window-maximize")

function maxWindow() {
  const audio = new Audio('./sounds/hover-sound.mp3');
  audio.volume = 1;
  audio.play();
  
  if (windowDisplay1) {
    windowDisplay1.classList.toggle('maximize');
  }
}

windowMaximize.addEventListener("click", maxWindow)

// Handle Minimize
const windowEl = document.querySelector('#window1');
const sidebarItemEl = document.querySelector('#minimItem1');
  
function minimizeWindow(window1, minimItem1) {
  windowEl.classList.add('minimizing');
  const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
  setTimeout(() => {
    windowEl.classList.add('window-hidden');
    sidebarItemEl.classList.remove('active-tab');
    sidebarItemEl.classList.add('minimized-tab')
  }, 100); 
}

document.querySelector('#window1 .window-minimize').addEventListener('click', () => {
  minimizeWindow('window1', 'minimItem1');
});

document.getElementById('minimItem1').addEventListener('click', () => {
  const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
  const windowEl = document.getElementById('window1');
  const sidebarItemEl = document.getElementById('minimItem1');

  windowEl.classList.remove('window-hidden');
  windowEl.classList.remove('minimizing');
  sidebarItemEl.classList.remove('minimized-tab')
  sidebarItemEl.classList.add('active-tab');
});
