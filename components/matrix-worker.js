document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('Matrix');
  if (!canvas || !canvas.transferControlToOffscreen) return;

  const workerCode = `
    let ctx, width, height, columns, rainDrops, dpr;
    const fontSize = 18;
    const alphabet = 'EMME369/@#$%&*+=-';
    
    // ADJUST SPEED HERE: higher = slower (ms per frame)
    const frameDelay = 35;
    let lastFrame = 0;

    self.onmessage = function(e) {
      if (e.data.type === 'init') {
        const offscreen = e.data.canvas;
        ctx = offscreen.getContext('2d', { alpha: true, desynchronized: true });
        dpr = Math.min(e.data.dpr, 1.5);
        ctx.imageSmoothingEnabled = false;
        updateSize(e.data.width, e.data.height, offscreen);
        self.requestAnimationFrame(tick);
      } else if (e.data.type === 'resize') {
        updateSize(e.data.width, e.data.height);
      }
    };

    function updateSize(w, h, canvas) {
      width = w;
      height = h;
      const targetCanvas = canvas || (ctx && ctx.canvas);
      if (targetCanvas) {
        targetCanvas.width = width * dpr;
        targetCanvas.height = height * dpr;
      }
      columns = Math.floor(width / fontSize);
      rainDrops = Array(columns).fill(0).map(() => Math.random() * -30);
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = fontSize + "px monospace";
      ctx.textBaseline = "top";
    }

    function tick(timestamp) {
      if (!timestamp) timestamp = performance.now();
      if (timestamp - lastFrame >= frameDelay) {
        draw();
        lastFrame = timestamp;
      }
      if (self.requestAnimationFrame) {
        self.requestAnimationFrame(tick);
      } else {
        setTimeout(() => tick(performance.now()), frameDelay);
      }
    }

    function draw() {
      // Fade existing pixels transparently so the background is preserved.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "#0000008c";
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "source-over";
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#279ae7";

      for (let i = 0; i < columns; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = (i * fontSize) | 0;
        const y = (rainDrops[i] * fontSize) | 0;

        ctx.fillText(text, x, y);

        // Reset logic
        if (y > height && Math.random() > 0.98) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    }
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const offscreen = canvas.transferControlToOffscreen();
  let worker;

  function startRain() {
    if (worker) return;
    worker = new Worker(URL.createObjectURL(blob));
    worker.postMessage({
      type: 'init',
      canvas: offscreen,
      dpr: window.devicePixelRatio || 1,
      width: window.innerWidth,
      height: window.innerHeight
    }, [offscreen]);
  }

  const bootButton = document.querySelector('.click-screen__button');
  if (bootButton) {
    bootButton.addEventListener('click', startRain, { once: true });
  } else {
    startRain();
  }

  window.addEventListener('resize', () => {
    if (!worker) return;
    worker.postMessage({
      type: 'resize',
      width: window.innerWidth,
      height: window.innerHeight
    });
  });
});
