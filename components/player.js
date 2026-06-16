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
      lyrics: ""
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
      lyrics: [
        {
          text: "No temas más",
          type: "word",
          startTime: "14"
        }, 
        {
          text: "¿Quien te dijo que te iba a lastimar?",
          type: "word",
          startTime: "17.5",
        }, 
        {
          text: "No hay tormenta solo hay calma",
          type: "word",
          startTime: "21"
        }, 
        {
          text: "cuando luz brilla en mi alma",
          type: "word",
          startTime: "24.5"
        }, 
        {
          text: "Se que es dificil de entender",
          type: "word",
          startTime: "28"
        }, 
        { 
          text: "Si no quieres ver",
          type: "word",
          startTime: "31"
        }, 
        {
          text: "El oro nubla tu vision",
          type: "word",
          startTime: "34.5"
        }, 
        {
          text: "Envenenandome",
          type: "word", 
          startTime: "38"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "40.5"
        }, 
        {
          text: "por la madrugada",
          type: "word",
          startTime: "44"
        }, 
        {
          text: "El cielo se abre",
          type: "word",
          startTime: "47.5" 
        }, 
        {
          text: "lágrimas de ángel",
          type: "word",
          startTime: "51"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "54.5"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "54.5"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "58"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "62"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "65.5"
        },
        {
          text: "No temas más",
          type: "word",
          startTime: "83"
        }, 
        {
          text: "Los recuerdos no me dejan descansar",
          type: "word",
          startTime: "86.5"
        }, 
        {
          text: "Un llanto que se transforma",
          type: "word",
          startTime: "90.5"
        }, 
        {
          text: "en el lago de mis memorias",
          type: "word",
          startTime: "94"
        }, 
        {
          text: "Se que es dificil de entender",
          type: "word",
          startTime: "97.5"
        }, 
        {
          text: "Si no quieres ver",
          type: "word",
          startTime: "101"  
        }, 
        {
          text: "De agua se llena mi pulmon",
          type: "word",
          startTime: "104.5"
        }, 
        {
          text: "Ahogandome",
          type: "word",
          startTime: "108"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "111"
        }, 
        {
          text: "caen por la madrugada",
          type: "word",
          startTime: "113"
        }, 
        {
          text: "El cielo se abre",
          type: "word",
          startTime: "117"
        }, 
        {
          text: "lágrimas de ángel",
          type: "word",
          startTime: "120.5"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "124"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "128"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "131"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "135"
        },
        {
          text: "( Llantos ciberneticos )",
          type: "word",
          startTime: "138"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "165.5"
        }, 
        {
          text: "caen por la madrugada",
          type: "word",
          startTime: "169"
        }, 
        {
          text: "El cielo se abre",
          type: "word",
          startTime: "172.3"
        }, 
        {
          text: "(y caen)",
          type: "word",
          startTime: "174"
        }, 
        {
          text: "lágrimas de ángel",
          type: "word",
          startTime: "176.5"
        }, 
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "180"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "181.5"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "183"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "185"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "187"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "188.5"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "190"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "194"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "196"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "197.5"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "199"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "201"
        },
        {
          text: "(y caen)",
          type: "word",
          startTime: "203"
        },
        {
          text: "Lágrimas de ángel",
          type: "word",
          startTime: "204"
        },
      ]
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
  window.playerAudio = audio;

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

  if (lyrics && lyrics.parentElement !== document.body) {
    document.body.appendChild(lyrics);
  }

  // === FUNCTIONS ===
  const updateOverlayLinks = (track) => {
    overlayBtns.innerHTML = "";
    if (!track.links) {
        overlayTitle.textContent = "Próximamente";
        return;
    } else
    overlayBtns.innerHTML = `
      <a href="${track.links.youtube}" target="_blank" id="music-btn" class="music-btn youtube">YOUTUBE</a>
      <a href="${track.links.apple}" target="_blank" id="music-btn" class="music-btn apple">APPLE MUSIC</a>
      <a href="${track.links.spotify}" target="_blank" id="music-btn" class="music-btn spotify">SPOTIFY</a>
      <a href="${track.links.bandcamp}" target="_blank" id="music-btn" class="music-btn bandcamp">BANDCAMP</a>
    `;
    overlayTitle.textContent = `Escucha "${track.title}" en:`;

    
  };

  let currentLyricIndex = -1;
  let currentLyricNode = null;

  const createLyricNode = (text) => {
    const node = document.createElement("div");
    node.className = "lyrics-line";
    node.textContent = text;
    const padding = 8;
    const x = Math.random() * (100 - padding * 2) + padding;
    const y = Math.random() * (100 - padding * 2) + padding;
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    node.style.transform = `translate(-50%, -50%) scale(0.9)`;
    return node;
  };

  const transitionToLyric = (text, track, index) => {
    if (!text) return;
    if (currentLyricNode) {
      currentLyricNode.remove();
    }
    const nextNode = createLyricNode(text);
    currentLyricNode = nextNode;
    lyrics.appendChild(nextNode);
    requestAnimationFrame(() => nextNode.classList.add("active"));

    const fadeDuration = 1000; // 1s
    const nextIndex = index + 1;
    const nextStart = nextIndex < track.lyrics.length ? Number(track.lyrics[nextIndex].startTime) : (audio.duration || 10);
    const currentStart = Number(track.lyrics[index].startTime);
    const fullDuration = (nextStart - currentStart) * 1000;
    const stayDuration = Math.max(0, fullDuration - fadeDuration);

    setTimeout(() => {
      nextNode.classList.remove("active");
      nextNode.classList.add("exiting");
      nextNode.addEventListener("animationend", () => nextNode.remove(), { once: true });
    }, stayDuration);
  };

  const getCurrentLyricIndex = (track, currentTime) => {
    if (!Array.isArray(track.lyrics) || !track.lyrics.length) return -1;
    let index = -1;
    for (let i = 0; i < track.lyrics.length; i++) {
      const start = Number(track.lyrics[i].startTime);
      if (!Number.isFinite(start)) continue;
      if (currentTime >= start) {
        index = i;
      } else {
        break;
      }
    }
    return index;
  };

  const updateLyricsDisplay = () => {
    const track = playlist[currentIndex];
    if (!Array.isArray(track.lyrics) || !track.lyrics.length) return;

    const newIndex = getCurrentLyricIndex(track, audio.currentTime);
    if (newIndex === currentLyricIndex) return;
    currentLyricIndex = newIndex;
    const nextText = newIndex >= 0 ? track.lyrics[newIndex].text : "";
    transitionToLyric(nextText, track, newIndex);
  };

  const updateLyrics = (track) => {
    lyrics.innerHTML = "";
    currentLyricIndex = -1;
    currentLyricNode = null;

    if (Array.isArray(track.lyrics) && track.lyrics.length) {
      return;
    }

    lyrics.innerHTML = `<p>${track.lyrics}</p>`;
  }

  const handleMetadataLoaded = () => {
    updateLyricsDisplay();
  };

  overlayOpen.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  lyricsOpen.addEventListener("click", () => {
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


  const stopTrack = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } 
  };

  const updateProgress = () => {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentMin = Math.floor(audio.currentTime / 60);
    const currentSec = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${String(currentMin).padStart(2, "0")}:${String(currentSec).padStart(2, "0")}`;
    lastTimeEl.textContent = `${String(Math.floor((audio.duration - audio.currentTime) / 60)).padStart(2, "0")}:${String(Math.floor((audio.duration - audio.currentTime) % 60)).padStart(2, "0")}`;  };

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
    if (!isPlaying) audio.play(); else audio.pause();
  };


  const prevTrack = () => {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentIndex);
    if (!isPlaying) audio.play(); else audio.pause();
  };

  

  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
  

  playBtn.addEventListener("click", togglePlay);
  forwardBtn.addEventListener("click", nextTrack);
  backwardBtn.addEventListener("click", prevTrack);
  progressContainer.addEventListener("click", setProgress);

  audio.addEventListener("ended", nextTrack);
  audio.addEventListener("timeupdate", updateLyricsDisplay);
  audio.addEventListener("loadedmetadata", handleMetadataLoaded);

  loadTrack(currentIndex);


  document.addEventListener("DOMContentLoaded", () => {
  
    const app = document.getElementById("app");

  // BACKGROUND IMAGE
    const bg = document.createElement("img");
    bg.src = "assets/main_back_1.png";


  // FORCE VISIBILITY
    bg.style.display = "block";
    bg.style.width = "500px"; // 👈 increase this until it looks correct
    bg.style.height = "auto";
    bg.style.zIndex = "9999";
    bg.style.pointerEvents = "none";

    app.appendChild(bg);

    
    dragElement(app);

    // Play/Pause

    let playing = false;
    const play = document.createElement("div");

    play.style.position = "absolute";
    play.style.left = "90px";
    play.style.top = "312px";
    play.style.width = "43px";
    play.style.height = "40px";

    play.style.backgroundImage = "url(./assets/m_play_no_1.png)";
    play.style.backgroundSize = "cover";
    play.style.zIndex = "9999";

    app.appendChild(play);
    function renderPlayButton(state = "no") {
    const type = playing ? "pause" : "play";
    play.style.backgroundImage = `url(./assets/m_${type}_${state}_1.png)`;
    }

    play.addEventListener("mouseenter", () => {
    renderPlayButton("hov");
    });

    play.addEventListener("mouseleave", () => {
    renderPlayButton("no");
    });

    play.addEventListener("mousedown", () => {
    renderPlayButton("do");
    });

    play.addEventListener("mouseup", () => {
    renderPlayButton("hov");
    });

    play.addEventListener("click", () => {
    playing = !playing;
    renderPlayButton("hov");
    audio.paused ? audio.play() : audio.pause();
    
    });

    // Stop

    const stop = document.createElement("div");

    stop.style.position = "absolute";
    stop.style.left = "144px";
    stop.style.top = "312px";
    stop.style.width = "43px";
    stop.style.height = "40px";

    stop.style.backgroundImage = "url(./assets/m_stop_no_1.png)";
    stop.style.backgroundSize = "cover";
    stop.style.zIndex = "9999";

    app.appendChild(stop);

    function renderStop(state = "no") {
    stop.style.backgroundImage = `url(./assets/m_stop_${state}_1.png)`;
    }

    renderStop();

    stop.addEventListener("mouseenter", () => renderStop("hov"));
    stop.addEventListener("mouseleave", () => renderStop("no"));
    stop.addEventListener("mousedown", () => renderStop("do"));
    stop.addEventListener("mouseup", () => renderStop("hov"));

    stop.addEventListener("click", () => {
      playing = false;
      renderPlayButton("no");
      audio.pause();
      audio.currentTime = 0;
      
    }
    );
        
    //Previous
    
    const prev = document.createElement("div");

    prev.style.position = "absolute";
    prev.style.left = "200px";
    prev.style.top = "312px";
    prev.style.width = "43px";
    prev.style.height = "40px";

    prev.style.backgroundImage = "url(./assets/m_prev_no_1.png)";
    prev.style.backgroundSize = "cover";
    prev.style.zIndex = "9999";

    app.appendChild(prev);

    function renderPrev(state = "no") {
    prev.style.backgroundImage = `url(./assets/m_prev_${state}_1.png)`;
    }

    renderPrev();

    prev.addEventListener("mouseenter", () => renderPrev("hov"));
    prev.addEventListener("mouseleave", () => renderPrev("no"));
    prev.addEventListener("mousedown", () => renderPrev("do"));
    prev.addEventListener("mouseup", () => renderPrev("hov"));

    prev.addEventListener("click", () => {
      if (audio.currentTime > 3) {
        audio.currentTime = 0;
      } else if (!playing && audio.paused){
        playing = true;
        renderPlayButton("no");
        prevTrack();
      } else {
        prevTrack();
      }
      
    });

    
    // Next

    const next = document.createElement("div");

    next.style.position = "absolute";
    next.style.left = "255px";
    next.style.top = "312px";
    next.style.width = "43px";
    next.style.height = "40px";

    next.style.backgroundImage = "url(./assets/m_next_no_1.png)";
    next.style.backgroundSize = "cover";
    next.style.zIndex = "9999";

    app.appendChild(next);

    function renderNext(state = "no") {
    next.style.backgroundImage = `url(./assets/m_next_${state}_1.png)`;
    }

    renderNext();

    next.addEventListener("mouseenter", () => renderNext("hov"));
    next.addEventListener("mouseleave", () => renderNext("no"));
    next.addEventListener("mousedown", () => renderNext("do"));
    next.addEventListener("mouseup", () => renderNext("hov"));

    next.addEventListener("click", () => {
      if (!playing && audio.paused){
        playing = true;
        renderPlayButton("no");
        nextTrack();
      } else {
        nextTrack();
      }
    });

    //Close
    const close = document.createElement("div");

    close.style.position = "absolute";
    close.style.left = "320px";
    close.style.top = "75px";
    close.style.width = "30px";
    close.style.height = "30px";
  

    close.style.backgroundImage = "url(./assets/m_close_no_1.png)";
    close.style.backgroundSize = "cover";
    close.style.zIndex = "9999";

    app.appendChild(close);

    function renderClose(state = "no") {
    close.style.backgroundImage = `url(./assets/m_close_${state}_1.png)`;
    }

    renderClose();

    close.addEventListener("mouseenter", () => renderClose("hov"));
    close.addEventListener("mouseleave", () => renderClose("no"));
    close.addEventListener("mousedown", () => renderClose("do"));
    close.addEventListener("mouseup", () => renderClose("hov"));

    close.addEventListener("click", () => {
    app.style.display = "none";
    });

    createVolumeKnob(app, 21);

    // Seek Slider

    const seekLeft = 83;
    const seekTop = 275;
    const seekWidth = 210;
    const seekHeight = 25;
    const seekThumbWidth = 47;
    const seekThumbMaxProgress = 155;

    const seek = document.createElement("div");

    seek.style.position = "absolute";
    seek.style.left = `${seekLeft}px`;
    seek.style.top = `${seekTop}px`;
    seek.style.width = `${seekWidth}px`;
    seek.style.height = `${seekHeight}px`;

    seek.style.backgroundImage = "url(./assets/seek_slider_1.png)";
    seek.style.backgroundSize = "cover";
    seek.style.zIndex = "9998";
    seek.style.touchAction = "none";

    app.appendChild(seek);

    const seekProgress = document.createElement("div");
    seekProgress.style.position = "absolute";
    seekProgress.style.left = `${seekLeft}px`;
    seekProgress.style.top = `${seekTop}px`;
    seekProgress.style.width = "0px";
    seekProgress.style.height = `${seekHeight}px`;
    seekProgress.style.backgroundColor = "rgba(255,255,255,0.3)";
    seekProgress.style.pointerEvents = "none";
    seekProgress.style.zIndex = "9990";
    app.appendChild(seekProgress);

    // Seek Thumb

    const seekThumb = document.createElement("div");

    seekThumb.style.position = "absolute";
    seekThumb.style.left = `50px`;
    seekThumb.style.top = `${seekTop + 1}px`;
    seekThumb.style.width = "60px";
    seekThumb.style.height = "25px";

    seekThumb.style.backgroundImage = "url(./assets/seek_thumb_no_1.png)";
    seekThumb.style.backgroundSize = "cover";
    seekThumb.style.zIndex = "9999";
    seekThumb.style.cursor = "pointer";
    seekThumb.style.touchAction = "none";

    app.appendChild(seekThumb);

    function renderSeekThumb(state = "no") {
      seekThumb.style.backgroundImage = `url(./assets/seek_thumb_${state}_1.png)`;
    }

    renderSeekThumb();

    

    let isSeeking = false;

    function updateSeekPosition(clientX, updateAudio = true) {
      const rect = seek.getBoundingClientRect();
      const progress = Math.max(0, Math.min(clientX - rect.left, seekThumbMaxProgress));

      seekProgress.style.width = `${seekWidth - seekThumbWidth}px`;
      seekThumb.style.left = `${seekLeft + progress}px`;

      if (updateAudio && audio && audio.duration) {
        audio.currentTime = (progress / (seekThumbMaxProgress)) * audio.duration;
      }

      if (audio.nextTrack){
        seekThumb.style.left = "50px";
      }
    }

    function refreshSeekFromAudio() {
      if (!audio || !audio.duration) return;

      const progress = (audio.currentTime / audio.duration) * seekThumbMaxProgress;
      seekProgress.style.width = `${progress}px`;
      seekThumb.style.left = `${seekLeft + progress}px`;
      seek.style.width = `${progress + 10}px`;
    }

    seek.addEventListener("click", (e) => {
      updateSeekPosition(e.clientX, true);
    });

    seekThumb.addEventListener("mouseenter", () => renderSeekThumb("hov"));
    seekThumb.addEventListener("mouseleave", () => renderSeekThumb("no"));
    seekThumb.addEventListener("mousedown", () => renderSeekThumb("do"));
    seekThumb.addEventListener("mouseup", () => renderSeekThumb("hov"));
    seekThumb.addEventListener("pointerdown", (e) => {
      isSeeking = true;
      seekThumb.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    seekThumb.addEventListener("pointermove", (e) => {
      if (!isSeeking) return;
      e.preventDefault();
      updateSeekPosition(e.clientX, true);
    });

    seekThumb.addEventListener("pointerup", (e) => {
      if (!isSeeking) return;
      isSeeking = false;
      seekThumb.releasePointerCapture(e.pointerId);
      e.preventDefault();
      renderSeekThumb("hov");
    });

    seekThumb.addEventListener("pointercancel", (e) => {
      if (!isSeeking) return;
      isSeeking = false;
      seekThumb.releasePointerCapture(e.pointerId);
      e.preventDefault();
      renderSeekThumb("no");
    });

    function bindSeekAudioEvents(targetAudio) {
      targetAudio.addEventListener("timeupdate", refreshSeekFromAudio);
      targetAudio.addEventListener("loadedmetadata", refreshSeekFromAudio);
      refreshSeekFromAudio();
    }

    if (audio) {
      bindSeekAudioEvents(audio);
    } else {
      const audioCheck = setInterval(() => {
        const laterAudio = audio;
        if (laterAudio) {
          clearInterval(audioCheck);
          bindSeekAudioEvents(laterAudio);
        }
      }, 250);
    }

    audio.addEventListener("ended", nextTrack);

});

function createVolumeKnob(app, stageCount) {
  const knob = document.createElement('div');
  knob.className = 'volume-knob';
  knob.style.position = 'absolute';
  knob.style.left = '301px';
  knob.style.top = '247px';

  const frameWidth = 76;
  const frameHeight = 76;
  const knobSize = 90; // desired visible knob size
  const scale = knobSize / frameWidth;

  knob.style.width = `${knobSize}px`;
  knob.style.height = `${knobSize}px`;
  knob.style.backgroundImage = 'url(./assets/volume_1.png)';
  knob.style.backgroundRepeat = 'no-repeat';
  knob.style.backgroundSize = `${stageCount * frameWidth * scale}px ${frameHeight * scale}px`;
  knob.style.backgroundPosition = '0 0';
  knob.style.cursor = 'pointer';
  knob.style.zIndex = '9999';

  let currentStage = Math.floor((stageCount - 1) / 2);
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragMoved = false;

  function getAudio() {
    return window.playerAudio || window.musicAudio || null;
  }

  function setVolumeStage(stage) {
    currentStage = Math.max(0, Math.min(stage, stageCount - 1));
    knob.style.backgroundPosition = `${-currentStage * knobSize}px 0`;
    const audio = getAudio();
    if (audio) {
      audio.volume = currentStage / (stageCount - 1);
    }
  }

  function handleDragMove(clientX, clientY) {
    const deltaX = clientX - dragStartX;
    const deltaY = clientY - dragStartY;
    const threshold = knobSize / 4;
    let steps = 0;

    if (Math.abs(deltaX) >= threshold || Math.abs(deltaY) >= threshold) {
      if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        steps = -Math.sign(deltaX); // left increases, right decreases
      } else {
        steps = -Math.sign(deltaY); // up increases, down decreases
      }
    }

    if (steps !== 0) {
      setVolumeStage(currentStage + steps);
      dragStartX = clientX;
      dragStartY = clientY;
      dragMoved = true;
    }
  }

  knob.addEventListener('click', e => {
    e.stopPropagation();
    if (dragMoved) {
      dragMoved = false;
      return;
    }
    setVolumeStage((currentStage + 1) % stageCount);
  });

  knob.addEventListener('wheel', e => {
    e.preventDefault();
    e.stopPropagation();
    setVolumeStage(currentStage + (e.deltaY > 0 ? -1 : 1));
  });

  knob.addEventListener('pointerdown', e => {
    e.stopPropagation();
    e.preventDefault();
    isDragging = true;
    dragStartX = e.clientX;
    dragMoved = false;
    knob.setPointerCapture(e.pointerId);
    knob.style.cursor = 'grabbing';
  });

  knob.addEventListener('pointermove', e => {
    if (!isDragging) return;
    e.preventDefault();
    handleDragMove(e.clientX, e.clientY);
  });

  knob.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    knob.releasePointerCapture(e.pointerId);
    knob.style.cursor = 'pointer';
  });

  knob.addEventListener('pointercancel', e => {
    if (!isDragging) return;
    isDragging = false;
    knob.releasePointerCapture(e.pointerId);
    knob.style.cursor = 'pointer';
  });

  app.appendChild(knob);
  setVolumeStage(currentStage);
  return knob;
}

function dragElement(app) {
  if (!app) {
    console.error('Cannot drag: element is null');
    return;
  }

  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = app; // wmplayer is the draggable container itself

  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    app.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    app.style.top = (app.offsetTop - pos2) + 'px';
    app.style.left = (app.offsetLeft - pos1) + 'px';
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



  
})();







//