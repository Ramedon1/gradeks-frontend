<template>
  <canvas ref="canvasRef" class="snowfall-canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);

const createSnowfall = () => {
  if (!canvasRef.value) return;

  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resizeCanvas();

  const snowflakes: Array<any> = [];

  class Snowflake {
    x: number;
    y: number;
    radius: number;
    speed: number;
    opacity: number;

    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 4 + 1;
      this.speed = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.y = -this.radius;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(224, 224, 224, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake());
  }

  const animateSnowfall = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    snowflakes.forEach(snowflake => {
      snowflake.update();
      snowflake.draw();
    });

    requestAnimationFrame(animateSnowfall);
  };

  animateSnowfall();

  window.addEventListener('resize', resizeCanvas);
};

onMounted(() => {
  createSnowfall();
});
</script>

<style scoped>
.snowfall-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}
</style>
