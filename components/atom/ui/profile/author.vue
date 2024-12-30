<template>
  <div class="author third-text">
    <div class="author-box">
      <p class="author">prod. by</p>
      <a href="https://t.me/ramedon" class="author">@ramedon</a>
    </div>
    <p class="author">Beta 1.5</p>
  </div>
</template>

<style scoped>
.author-box {
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 2px;
  justify-content: center;
  align-items: center;
}
.author {
  display: flex;
  color: var(--theme-hint-color-green);
  flex-direction: column;
  text-align: center;
  opacity: 0.7;
  margin: 0;
}
</style>