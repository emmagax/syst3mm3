(() => {
  const playlist = [
    {
      id: 1,
      url: "./sounds/REBORNMASTER.wav",
      title: "REBORN",
      artist: "EMME",
      cover: "./src/img/Reborn-cover.JPG",
      links: {
        soundcloud: "https://on.soundcloud.com/2LWldDbB0bfYMTvijb",
        apple: "https://music.apple.com/song/reborn/1822419923",
        youtube: "https://music.youtube.com/watch?v=px6D8QK8lX0&si=gUoAJucfnWlyLYoX",
        bandcamp: "https://systemme.bandcamp.com/track/reborn"
      },
      lyrics: "We gather here today.<br> To celebrate the life of someone who no longer exists.<br> He exists just in your memory and in mine.<br> Welcome to my funeral.<br><br> Crying for a memory, but those are fleeting and often get it wrong. <br><br> Hoping for a dream i had.<br> Wake me up and tell me its all a lie.<br><br> Bribing my way into hell.<br>Cause God's plan is expensive and I cannot pay the rent.<br><br> Walking through deadly pastures.<br> Its quieter inside the fiery flame.<br><br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br><br> Praying for a miracle.<br> To be unbinded from my flesh and bones.<br><br> Scorching my own heart ablaze.<br> The Queen of Rot has laid me down in bed.<br><br> Fighting just to die and come back to life again.<br><br> Walking through deadly pastures.<br> Its quieter inside the fiery flame.<br><br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood.<br> I'm reborn in my own blood, in my own blood."
    },
    {
      id: 2,
      url: "./sounds/lagrimas-de-angel-demo6.wav",
      title: "lágrimas de ángel",
      artist: "EMME",
      cover: "./src/img/Reborn-cover.JPG",
      links: null,
      lyrics: "No temas más.<br> ¿Quien te dijo que te iba a lastimar?<br> No hay tormenta solo hay calma cuando luz brilla en mi alma.<br><br> Se que es dificil de entender.<br> Si no quieres ver.<br> El oro nubla tu vision.<br> Envenenandome.<br><br> Lagrimas de angel caen por la madrugada.<br> El cielo se abre y caen lagrimas de angel.<br><br> Lagrimas de angel x4. No temas más.<br> Los recuerdos no me dejan descansar.<br> Un llanto que se transforma en el lago de mis memorias.<br><br> Se que es dificil de entender.<br> Si no quieres ver.<br> De agua se llena mi pulmon.<br> Ahogandome.<br><br> Lagrimas de angel caen por la madrugada.<br> El cielo se abre y caen lagrimas de angel.<br><br> Lagrimas de angel x4"
    }
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let timer = null;
  let previewTimer = null;
  const previewLength = 30;
  const audio = new Audio(playlist[currentIndex].url);

  // === DOM ELEMENTS ===
  const currentTimeEl = document.querySelector(".music-time__current");
  const lastTimeEl = document.querySelector(".music-time__last");
  const progressBar = document.getElementById("length");
  const progressContainer = document.getElementById("progress");
  const playBtn = document.getElementById("play");
  const forwardBtn = document.getElementById("forward");
  const backwardBtn = document.getElementById("backward");
  const titleEl = document.querySelector(".music-player__title");
  const artistEl = document.querySelector(".music-player__author");
  const coverEl = document.querySelector(".music-img img");
  const overlay = document.getElementById("music-overlay");
  const overlayBtns = document.querySelector(".music-overlay__buttons");
  const overlayTitle = document.getElementById("overlay-title");
  const overlayOpen = document.querySelector('.music-control__stream')
  const lyricsOpen = document.querySelector('.music-control__lyrics')
  const lyrics = document.querySelector('.lyrics')

  // === FUNCTIONS ===
  const updateOverlayLinks = (track) => {
    overlayBtns.innerHTML = "";
    if (!track.links) {
        overlayTitle.textContent = "Próximamente";
        return;
    } else
    overlayBtns.innerHTML = `
      <a href="${track.links.soundcloud}" target="_blank" id="music-btn" class="music-btn spotify">Soundcloud</a>
      <a href="${track.links.apple}" target="_blank" id="music-btn" class="music-btn apple">Apple Music</a>
      <a href="${track.links.youtube}" target="_blank" id="music-btn" class="music-btn youtube">YouTube</a>
      <a href="${track.links.bandcamp}" target="_blank" id="music-btn" class="music-btn bandcamp">Bandcamp</a>
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
    audio.src = track.url;
    titleEl.textContent = track.title;
    artistEl.textContent = track.artist;
    coverEl.src = track.cover;
    updateOverlayLinks(track);
    updateLyrics(track);
    overlay.classList.remove("active");
    progressBar.style.width = "0%";
    currentTimeEl.textContent = "00:00";

    audio.addEventListener("loadedmetadata", () => {
      const durationMin = Math.floor(audio.duration / 60);
      const durationSec = Math.floor(audio.duration % 60);
      lastTimeEl.textContent = `${String(durationMin).padStart(2, "0")}:${String(durationSec).padStart(2, "0")}`;
    });
  };

  const togglePlay = () => {
    if (!isPlaying) {
      audio.currentTime = 0;
      audio.play();
      isPlaying = true;

      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path d="M8 6c-1.104 0-2 0.896-2 2v8c0 1.104 0.896 2 2 2s2-0.896 2-2v-8c0-1.104-0.896-2-2-2z"/>
          <path d="M15 6c-1.104 0-2 0.896-2 2v8c0 1.104 0.896 2 2 2s2-0.896 2-2v-8c0-1.104-0.896-2-2-2z"/>
        </svg>
      `;

      timer = setInterval(updateProgress, 500);

      previewTimer = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
        clearInterval(timer);
        clearTimeout(previewTimer);
        playBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
            <path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-0.363-0.349-0.853-0.567-1.396-0.567-1.104 0-2 0.896-2 2v10c0 1.104 0.896 2 2 2 0.543 0 1.033-0.218 1.396-0.567z"/>
          </svg>
        `;
        overlay.classList.add("active");
      }, previewLength * 1000);

    } else {
      audio.pause();
      isPlaying = false;
      clearInterval(timer);
      clearTimeout(previewTimer);
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
          <path d="M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-0.363-0.349-0.853-0.567-1.396-0.567-1.104 0-2 0.896-2 2v10c0 1.104 0.896 2 2 2 0.543 0 1.033-0.218 1.396-0.567z"/>
        </svg>
      `;
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