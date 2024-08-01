import { useRef, useEffect } from "react";

export const useCursorTrail = (color?: string) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element is not available.");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas 2D context is not available.");
      return;
    }

    const accentColor = "#b4ff3920";

    let AnimationFeature = {
      friction: 0.5,
      trails: 20,
      size: 40,
      dampening: 0.2,
      tension: 0.98,
    };

    let cursorPosition = {
      x: 0,
      y: 0,
    };

    let running = true;

    class NewNode {
      x: number;
      y: number;
      vy: number;
      vx: number;
      constructor() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
      }
    }

    type LineProps = {
      spring: number;
      friction?: number;
      size?: number;
      cursorPosition?: { x: number; y: number };
    };

    class Line {
      spring: number;
      friction: number;
      nodes: NewNode[];

      constructor(e: LineProps) {
        this.spring = e.spring + 0.1 * Math.random() - 0.05;
        this.friction = AnimationFeature.friction + 0.01 * Math.random() - 0.005;
        const cursorPosition = e.cursorPosition ?? { x: 0, y: 0 };
        this.nodes = Array.from({ length: AnimationFeature.size }, () => {
          const t = new NewNode();
          t.x = cursorPosition.x;
          t.y = cursorPosition.y;
          return t;
        });
      }

      update(): void {
        let e = this.spring;
        let t = this.nodes[0];
        t.vx += (cursorPosition.x - t.x) * e;
        t.vy += (cursorPosition.y - t.y) * e;
        for (let i = 0, a = this.nodes.length; i < a; i++) {
          t = this.nodes[i];
          if (i > 0) {
            const n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * AnimationFeature.dampening;
            t.vy += n.vy * AnimationFeature.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= AnimationFeature.tension;
        }
      }

      draw(ctx: CanvasRenderingContext2D): void {
        if (this.nodes.length === 0) return;

        let n = this.nodes[0].x;
        let i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
          const e = this.nodes[a];
          const t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        const e = this.nodes[this.nodes.length - 2];
        const t = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
      }
    }

    let newLines: Line[] = [];

    function renderAnimation() {
      if (running) {
        if (!ctx) return;

        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = color || accentColor;
        ctx.lineWidth = 1;
        newLines.forEach(line => {
          line.update();
          line.draw(ctx);
        });
        window.requestAnimationFrame(renderAnimation);
      }
    }

    function move(event: MouseEvent | TouchEvent) {
      if (event instanceof MouseEvent) {
        cursorPosition.x = event.clientX;
        cursorPosition.y = event.clientY;
      } else {
        cursorPosition.x = event.touches[0].pageX;
        cursorPosition.y = event.touches[0].pageY;
      }
      event.preventDefault();
    }

    function createLine(event: TouchEvent) {
      if (event.touches.length === 1) {
        cursorPosition.x = event.touches[0].pageX;
        cursorPosition.y = event.touches[0].pageY;
      }
    }

    function onMouseMove(e: MouseEvent | TouchEvent) {
      function populateLines() {
        newLines = Array.from({ length: AnimationFeature.trails }, (_, i) =>
          new Line({ spring: 0.45 + (i / AnimationFeature.trails) * 0.025 })
        );
      }

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchstart", onMouseMove);
      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", createLine);
      document.addEventListener("touchstart", createLine);
      move(e);
      populateLines();
      renderAnimation();
    }

    function resizeCanvas() {
      if (ctx) {
        ctx.canvas.width = window.innerWidth ;
        ctx.canvas.height = window.innerHeight;
      }
    }

    function stopAnimation() {
      running = false;
    }

    function startAnimation() {
      if (!running) {
        running = true;
        renderAnimation();
      }
    }

    function cleanUp() {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("touchmove", createLine);
      document.removeEventListener("touchstart", createLine);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchstart", onMouseMove);
      window.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", startAnimation);
      window.removeEventListener("blur", stopAnimation);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onMouseMove);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);
    resizeCanvas();

    return () => {
      cleanUp();
    };
  }, [color]);

  return canvasRef;
};
