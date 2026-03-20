// On Click handle



const clickableIndex = document.querySelector('.nav-m-home');
const menuClose = document.querySelector('.nav-m-menu-close')
const menu = document.querySelector('.nav-m-menu')
const show = document.querySelector('.landing-img');

// Prefer shared click sound (set up in index.js) to avoid creating new Audio objects repeatedly.

const logos = document.querySelectorAll(".logo");
const navBtns = document.querySelectorAll(".nav-m-btn");

let lastY = null;
let uiHidden = false;

// Mostrar menú
function showMenu() {
  menu.classList.add("show-menu");
}

// Cerrar menú
function closeMenu() {
  menu.classList.remove("show-menu");

  // 🔹 Reset completo para permitir reabrir con scroll
  lastY = null;
  uiHidden = false;
  logos.forEach(el => el.classList.remove("hide-ui"));
  navBtns.forEach(el => el.classList.remove("hide-ui"));
}

menuClose.addEventListener("click", closeMenu);

// Scroll / movimiento
window.addEventListener("pointermove", (e) => {
  const currentY = e.clientY;

  // Si el menú está abierto → no hacer nada
  if (menu.classList.contains("show-menu")) return;

  // Inicializa lastY si es null
  if (lastY === null) {
    lastY = currentY;
    return;
  }

  const delta = currentY - lastY;

  // Ocultar logo y botones solo en móvil
  if (!uiHidden && window.innerWidth <= 600 && Math.abs(delta) > 5) {
    uiHidden = true;
    logos.forEach(el => el.classList.add("hide-ui"));
    navBtns.forEach(el => el.classList.add("hide-ui"));
  }

  // Mostrar menú si el scroll va hacia abajo suficiente
  if (delta > 5) {
    showMenu();
    // 🔹 reset lastY para que puedas volver a abrir después de cerrar
    lastY = null;
  } else {
    lastY = currentY;
  }
});

function closeMenu() {
  menu.classList.remove("show-menu");
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});

  // 🔥 RESET COMPLETO
  lastY = null;
  hasStarted = false;
  uiHidden = false;

  // 🔴 vuelve a mostrar UI
  logos.forEach(el => el.classList.remove("hide-ui"));
  navBtns.forEach(el => el.classList.remove("hide-ui"));
}

menuClose.addEventListener("pointerup", (e) => {
  e.stopPropagation();
  closeMenu();
});

const clickableItems4 = document.querySelectorAll('.nav-wheel-item');
const musicItem = document.getElementById('nav-wheel-item-music');
const portItem = document.getElementById('nav-wheel-item-portafolio');
const mobileWindow = document.querySelector('#window1m');
const mobileWindow2 = document.querySelector('#window2m');

clickableItems4.forEach(item => {
  item.addEventListener('click', () => {
    playClickSound();
  });
});

musicItem.addEventListener('click', () => {
  if (menu.style.display != 'none') {
      menu.style.display = 'none';
    }
    if (mobileWindow.classList.contains('window-hidden')) {
      mobileWindow.classList.remove('window-hidden')
      mobileWindow.classList.add('window-visible')
    }
})
portItem.addEventListener('click', () => {
  if (menu.style.display != 'none') {
      menu.style.display = 'none';
    }
    if (mobileWindow2.classList.contains('window-hidden')) {
      mobileWindow2.classList.remove('window-hidden')
      mobileWindow2.classList.add('window-visible')
    }
})


  menuClose.addEventListener('click', () => {
    playClickSound();
  });

// Handle Scroll
const wheel = document.querySelector('.nav-m-wheel');
const items = document.querySelectorAll('.nav-wheel-item');
const infoPanel = document.getElementById('mobile-info-panel');
const decodeEl = infoPanel.querySelector('.decode-text');
let lastActiveItem = null;



function updateActiveItem() {
  const wheelRect = wheel.getBoundingClientRect();
  const wheelCenter = wheelRect.top + wheelRect.height / 2;

  let closestItem = null;
  let closestDistance = Infinity;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.top + rect.height / 2;
    const distance = Math.abs(itemCenter - wheelCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
    }
  });

  if (closestItem && closestItem !== lastActiveItem) {
    items.forEach((item) => item.classList.remove('active'));
    closestItem.classList.add('active');

    
    const audio = closestItem.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    const infoText = closestItem.getAttribute('data-info') || '';
    if (infoText) {
      decodeEl.textContent = infoText;
      infoPanel.classList.add('show');
    } else {
      decodeEl.textContent = '';
      infoPanel.classList.remove('show');
    }

    lastActiveItem = closestItem;
  }
}

let wheelScrollRaf = null;
wheel.addEventListener('scroll', () => {
  if (wheelScrollRaf) return;
  wheelScrollRaf = requestAnimationFrame(() => {
    updateActiveItem();
    wheelScrollRaf = null;
  });
});

window.addEventListener('load', updateActiveItem);

wheel.addEventListener('click', (event) => {
  const clickedItem = event.target.closest('.nav-wheel-item');
  if (!clickedItem) return;

  if (clickedItem === lastActiveItem) {
    const url = clickedItem.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  } else {
    lastActiveItem.classList.remove('active');
    clickedItem.classList.add('active');
    lastActiveItem = clickedItem;

    const audio = clickedItem.querySelector('audio');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    const infoText = clickedItem.getAttribute('data-info') || '';
    if (infoText) {
      infoPanel.classList.add('show');
    } else {
      infoPanel.classList.remove('show');
    }
  }
});

// Handle Close

const mwindowClose = document.querySelector('.window-close-m')
const mwindowClose2 = document.querySelector('.window-close-m2')

const closePlayer = () => {
  if(mobileWindow.classList.contains('window-visible')) {
    mobileWindow.classList.add('window-hidden')
    mobileWindow.classList.remove('window-visible')
    menu.style.display = 'flex';
  }
  const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
};
const closePort = () => {
  if(mobileWindow2.classList.contains('window-visible')) {
    mobileWindow2.classList.add('window-hidden')
    mobileWindow2.classList.remove('window-visible')
    menu.style.display = 'flex';
  }
  const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
};

mwindowClose.addEventListener('click', closePlayer);
mwindowClose2.addEventListener('click', closePort);


(() => {
  // Helper function to decode Base64 encoded URLs
  const decodeUrl = (encoded) => atob(encoded);

  const playlist = [
    {
      id: 1,
      url: "Li9zb3VuZHMvc2FsdmFtZS1tYXN0ZXIyLndhdiA=",
      title: "sálvame (otra vez)",
      artist: "EMME",
      cover: "./src/img/cover-salvame.jpg",
      links: {
        youtube: "https://music.youtube.com/playlist?list=OLAK5uy_kUC6e7og2S7KJVuh3il5HDcSR7gjbyG0A&si=xyMljLSNQSjAJHOx",
        spotify: "https://open.spotify.com/track/75LN8l04nd2OKGlCsCUa1S?si=cacb81a563f240c2",
        apple: "https://music.apple.com/us/song/s%C3%A1lvame-otra-vez/1879784698",
        bandcamp: "https://systemme.bandcamp.com/track/s-lvame-otra-vez"
      },
      lyrics: "El cielo está gris.<br> Fuego corre por la calle.<br> No se a donde ir.<br> Espero que alguien me salve.<br> No espero que alguien me salve.<br><br> Entre horcas y antorchas,<br> veo a mi madre llorar.<br> Entre gritos, suplico,<br> Por favor dejame entrar.<br> No hay porque insultar.<br><br> El cielo está gris.<br> Fuego corre por la calle.<br> No se a donde ir.<br> Espero que alguien me salve.<br> No espero que alguien me salve.<br><br> No espero que, alguien,<br> me salve otra vez,<br> (salve otra vez, salve, salve)<br> y otra vez,<br> y otra vez,<br> y otra vez,<br> me salve otra vez.<br><br> No espero que, alguien,<br> me salve otra vez,<br> (salve otra vez, salve, salve)<br> y otra vez,<br> y otra vez,<br> y otra vez,<br> me salve otra vez.<br><br> Cae la noche en el bosque.<br> Escucho la luna cantar,<br> y me dice, mi niña,<br> nunca dejes de brillar.<br> Eres la luz en la oscuridad.<br><br> El cielo está gris.<br> Fuego corre por la calle.<br> No se a donde ir.<br> Espero que alguien me salve.<br> No espero que alguien me salve.<br><br> No espero que, alguien,<br> me salve otra vez,<br> (salve otra vez, salve, salve)<br> y otra vez,<br> y otra vez,<br> y otra vez,<br> me salve otra vez.<br><br> No espero que,<br> alguien,<br> me salve otra vez,<br> (salve otra vez, salve, salve)<br> y otra vez,<br> y otra vez,<br> y otra vez,<br> me salve otra vez."
    },
    {
      id: 2,
      url: "Li9zb3VuZHMvbGFncmltYXMtZGUtYW5nZWwtbWFzdGVyZmluYWw1LndhdiA=",
      title: "lágrimas de ángel",
      artist: "EMME",
      cover: "./src/img/lad-cover1.png",
      links: {
        youtube: "https://www.youtube.com/watch?v=YkrVgdVqG7k",
        spotify: "https://open.spotify.com/album/0OUMexq2kJ0eNuw4Nysib1",
        apple: "https://music.apple.com/ae/album/l%C3%A1grimas-de-%C3%A1ngel-single/1871279273",
        bandcamp: "https://systemme.bandcamp.com/track/l-grimas-de-ngel"
      },
      lyrics: "No temas más.<br> ¿Quien te dijo que te iba a lastimar?<br> No hay tormenta solo hay calma cuando luz brilla en mi alma.<br><br> Se que es dificil de entender.<br> Si no quieres ver.<br> El oro nubla tu vision.<br> Envenenandome.<br><br> Lagrimas de angel caen por la madrugada.<br> El cielo se abre y caen lagrimas de angel.<br><br> Lagrimas de angel x4. No temas más.<br> Los recuerdos no me dejan descansar.<br> Un llanto que se transforma en el lago de mis memorias.<br><br> Se que es dificil de entender.<br> Si no quieres ver.<br> De agua se llena mi pulmon.<br> Ahogandome.<br><br> Lagrimas de angel caen por la madrugada.<br> El cielo se abre y caen lagrimas de angel.<br><br> Lagrimas de angel x4"
    },
    {
      id: 3,
      url: "Li9zb3VuZHMvUkVCT1JOTUFTVEVSLndhdiA=",
      title: "REBORN",
      artist: "EMME",
      cover: "./src/img/Reborn-cover.png",
      links: {
        youtube: "https://music.youtube.com/watch?v=px6D8QK8lX0&si=gUoAJucfnWlyLYoX",
        spotify: "https://open.spotify.com/album/2YvjyPRo0JPeWuOGP4FfZ3?si=7yZ5KztLQI-aDNxwhLG5lA",
        apple: "https://music.apple.com/song/reborn/1822419923",
        bandcamp: "https://systemme.bandcamp.com/track/reborn"
      },
      lyrics: "We gather here today.<br> To celebrate the life of someone who no longer exists.<br> He exists just in your memory and in mine.<br> Welcome to my funeral.<br><br> Crying for a memory, but those are fleeting and often get it wrong. <br><br> Hoping for a dream i had.<br> Wake me up and tell me its all a lie.<br><br> Bribing my way into hell.<br>Cause God's plan is expensive and I cannot pay the rent.<br><br> Walking through deadly pastures.<br> Its quieter inside the fiery flame.<br><br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br><br> Praying for a miracle.<br> To be unbinded from my flesh and bones.<br><br> Scorching my own heart ablaze.<br> The Queen of Rot has laid me down in bed.<br><br> Fighting just to die and come back to life again.<br><br> Walking through deadly pastures.<br> Its quieter inside the fiery flame.<br><br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood."
    }
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let timer = null;
  let previewTimer = null;
  const previewLength = 30;
  const audio = new Audio(playlist[currentIndex].url);

  // === DOM ELEMENTS ===
  const currentTimeEl = document.querySelector(".music-time-m__current");
  const lastTimeEl = document.querySelector(".music-time-m__last");
  const progressBar = document.getElementById("length-m");
  const progressContainer = document.getElementById("progress-m");
  const playBtn = document.getElementById("play-m");
  const forwardBtn = document.getElementById("forward-m");
  const backwardBtn = document.getElementById("backward-m");
  const titleEl = document.querySelector(".music-player-m__title");
  const artistEl = document.querySelector(".music-player-m__author");
  const coverEl = document.querySelector(".music-img-m img");
  const overlay = document.getElementById("music-overlay-m");
  const overlayBtns = document.querySelector(".music-overlay-m__buttons");
  const overlayTitle = document.getElementById("overlay-title-m");
  const overlayOpen = document.querySelector('.music-control-m__stream')
  const lyricsOpen = document.querySelector('.music-control-m__lyrics')
  const lyrics = document.querySelector('.lyrics-m')

  // === FUNCTIONS ===
  const updateOverlayLinks = (track) => {
    overlayBtns.innerHTML = "";
    if (!track.links) {
        overlayTitle.textContent = "Próximamente";
        return;
    } else
    overlayBtns.innerHTML = `
      <a href="${track.links.youtube}" target="_blank" id="music-btn" class="music-btn-m youtube">Youtube</a>
      <a href="${track.links.apple}" target="_blank" id="music-btn" class="music-btn-m apple">Apple Music</a>
      <a href="${track.links.spotify}" target="_blank" id="music-btn" class="music-btn-m spotify">Spotify</a>
      <a href="${track.links.bandcamp}" target="_blank" id="music-btn" class="music-btn-m bandcamp">Bandcamp</a>
    `;
    overlayTitle.textContent = `Escucha "${track.title}" en:`;

    const newBtns = document.querySelectorAll(".music-btn");
    newBtns.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        if (audioUnlocked) {
          hoverSound.currentTime = 0;
          hoverSound.play();
        }
      });
    });
    newBtns.forEach((item) => {
      item.addEventListener("click", () => {
        if (audioUnlocked) {
          const audio = new Audio('/sounds/hover-sound.mp3');
          audio.volume = 1; 
          audio.play();
        }
      });
    });
  };

  const updateLyrics = (track) => {
    lyrics.innerHTML = "";
    lyrics.innerHTML = `<p>${track.lyrics}</p>`;
  }

  overlayOpen.addEventListener("click", () => {
    const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
    overlay.classList.add("active");
  });

  lyricsOpen.addEventListener("click", () => {
    const audio = new Audio('/sounds/hover-sound.mp3');
    audio.volume = 1; 
    audio.play();
    if (!lyrics.classList.contains("active")) {
      lyrics.classList.add("active");
    } else {
      lyrics.classList.remove("active");
    }
    
  });


  const loadTrack = (index) => {
    const track = playlist[index];
    audio.src = decodeUrl(track.url);
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    coverEl.src = track.cover;
    updateOverlayLinks(track);
    updateLyrics(track);
    overlay.classList.remove("active");
    progressBar.style.width = "0%";
    currentTimeEl.textContent = "00:00";

    // Enable/disable progress bar dragging based on whether track has links
    if (track.links) {
      progressContainer.style.pointerEvents = "auto";
      progressContainer.style.cursor = "pointer";
    } else {
      progressContainer.style.pointerEvents = "none";
      progressContainer.style.cursor = "default";
    }

    audio.addEventListener("loadedmetadata", () => {
      const durationMin = Math.floor(audio.duration / 60);
      const durationSec = Math.floor(audio.duration % 60);
      lastTimeEl.textContent = `${String(durationMin).padStart(2, "0")}:${String(durationSec).padStart(2, "0")}`;
    });
  };

  const togglePlay = () => {
    const currentTrack = playlist[currentIndex];
    if (!isPlaying) {
      audio.play();
      isPlaying = true;

      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path d="M8 6c-1.104 0-2 0.896-2 2v8c0 1.104 0.896 2 2 2s2-0.896 2-2v-8c0-1.104-0.896-2-2-2z"/>
          <path d="M15 6c-1.104 0-2 0.896-2 2v8c0 1.104 0.896 2 2 2s2-0.896 2-2v-8c0-1.104-0.896-2-2-2z"/>
        </svg>
      `;

      timer = setInterval(updateProgress, 500);
      
      // set timer to stop at 30 seconds and show overlay (only for songs without links)
      if (!currentTrack.links) {
        previewTimer = setTimeout(() => {
          audio.pause();
          audio.currentTime = 0; // reset to beginning for next play
          isPlaying = false;
          playBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
              <path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-0.363-0.349-0.853-0.567-1.396-0.567-1.104 0-2 0.896-2 2v10c0 1.104 0.896 2 2 2 0.543 0 1.033-0.218 1.396-0.567z"/>
            </svg>
          `;
          clearInterval(timer);
          updateProgress(); // update progress bar to show reset
          // show the "Escucha en:" overlay
          overlay.classList.add('active');
        }, previewLength * 1000);
      }

    } else {
      audio.pause();
      isPlaying = false;
      if (previewTimer) {
        clearTimeout(previewTimer);
      }
      // Only reset to beginning for preview songs (no links)
      if (!currentTrack.links) {
        audio.currentTime = 0;
      }
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-0.363-0.349-0.853-0.567-1.396-0.567-1.104 0-2 0.896-2 2v10c0 1.104 0.896 2 2 2 0.543 0 1.033-0.218 1.396-0.567z"/>
        </svg>
      `;
      clearInterval(timer);
      updateProgress(); // update progress bar to show reset
    }
  };

  const updateProgress = () => {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${String(currentMin).padStart(2, "0")}:${String(currentSec).padStart(2, "0")}`;
  };

  const setProgress = (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * audio.duration;
    audio.currentTime = newTime;
    updateProgress();
  };

  const nextTrack = () => {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadTrack(currentIndex);
    if (isPlaying) audio.play();
  };

  const prevTrack = () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentIndex);
    if (isPlaying) audio.play();
  };
  

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
  

  playBtn.addEventListener("click", togglePlay);
  forwardBtn.addEventListener("click", nextTrack);
  backwardBtn.addEventListener("click", prevTrack);
  progressContainer.addEventListener("click", setProgress);

  audio.addEventListener("ended", nextTrack);

  loadTrack(currentIndex);

  
})();




//