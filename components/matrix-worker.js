document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('Matrix');
  if (!canvas || !canvas.transferControlToOffscreen) return;

  const workerCode = `
    let ctx, width, height, columns, rainDrops, dpr;
    const fontSize = 16;
    const alphabet = ' ░▒▓█';
    
    // ADJUST SPEED HERE: higher = slower (ms per frame)
    const frameDelay = 30; 

    self.onmessage = function(e) {
      if (e.data.type === 'init') {
        const offscreen = e.data.canvas;
        ctx = offscreen.getContext('2d', { alpha: false, desynchronized: true });
        dpr = e.data.dpr;
        updateSize(e.data.width, e.data.height, offscreen);
        tick(); // Start the loop
      } else if (e.data.type === 'resize') {
        updateSize(e.data.width, e.data.height, e.data.canvas);
      }
    };

    function updateSize(w, h, canvas) {
      width = w;
      height = h;
      if (canvas) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
      columns = Math.floor(width / fontSize);
      rainDrops = Array(columns).fill(0).map(() => Math.random() * -30);
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = fontSize + "px monospace";
      ctx.textBaseline = "top";
    }

    function tick() {
      draw();
      // Controlled delay instead of 60fps requestAnimationFrame
      setTimeout(tick, frameDelay);
    }

    function draw() {
      // Darker fade for better contrast
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, width, height);

      // Deep Blue
      ctx.fillStyle = "#008cff"; 

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
  const worker = new Worker(URL.createObjectURL(blob));
  const offscreen = canvas.transferControlToOffscreen();

  worker.postMessage({
    type: 'init',
    canvas: offscreen,
    dpr: window.devicePixelRatio || 1,
    width: window.innerWidth,
    height: window.innerHeight
  }, [offscreen]);

  window.addEventListener('resize', () => {
    worker.postMessage({
      type: 'resize',
      width: window.innerWidth,
      height: window.innerHeight
    });
  });
});
