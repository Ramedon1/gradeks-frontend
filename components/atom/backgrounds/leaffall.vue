<template>
  <canvas ref="canvasRef" class="leaffall-canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);

const createLeafFall = () => {
  if (!canvasRef.value) return;
  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();

  const colors = [
    'rgba(144, 238, 144, 0.8)',
    'rgba(152, 251, 152, 0.8)',
    'rgba(255, 228, 181, 0.8)',
    'rgba(255, 239, 213, 0.8)',
    'rgba(173, 255, 47, 0.8)',
  ];

  interface Leaf {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radiusX: number;
    radiusY: number;
    angle: number;
    angularSpeed: number;
    color: string;
    update(): void;
    draw(): void;
  }

  class LeafImpl implements Leaf {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radiusX: number;
    radiusY: number;
    angle: number;
    angularSpeed: number;
    color: string;

    constructor() {
      this.reset();
    }

    reset() {
      this.radiusX = Math.random() * 5 + 5;  // 5–10px
      this.radiusY = this.radiusX * (Math.random() * 0.6 + 0.4);
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      // рандомные скорости
      this.vx = (Math.random() - 0.5) * 1.5;     // -0.75…+0.75 px/frame
      this.vy = Math.random() * 1 + 0.5;         // 0.5…1.5 px/frame
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.04; // быстрей вращаются
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.angle += this.angularSpeed;

      // сброс при выходе за пределы
      if (this.y > canvas.height + this.radiusY) {
        this.reset();
        this.y = -this.radiusY;
      }
      if (this.x > canvas.width + this.radiusX) {
        this.x = -this.radiusX;
      } else if (this.x < -this.radiusX) {
        this.x = canvas.width + this.radiusX;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  const leaves: Leaf[] = [];
  for (let i = 0; i < 80; i++) {
    leaves.push(new LeafImpl());
  }

  // Анимация
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    leaves.forEach(leaf => {
      leaf.update();
      leaf.draw();
    });
    requestAnimationFrame(animate);
  };

  animate();
  window.addEventListener('resize', resizeCanvas);
};

onMounted(createLeafFall);
</script>

<style scoped>
.leaffall-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
