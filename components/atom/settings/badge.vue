<script lang="ts" setup>
const props = defineProps({
  text: String
});
</script>

<template>
  <div class="badge">
    <slot />
    <span class="text">{{ props.text }}</span>
  </div>
</template>

<style scoped>
.badge {
  display: flex;
  flex-direction: row;
  gap: 8px; /* Расстояние между текстом и иконками */
  align-items: center;
  justify-content: center; /* Центровка содержимого */
  background-color: var(--theme-accent-text-color-blue);
  border-radius: 200px;
  color: var(--theme-text-color-green);
  padding: 8px 20px; /* Внутренние отступы */
  font-size: 13px;
  font-family: "PFEncoreSansPro-Regular", serif;
  max-width: 100%; /* Ограничиваем ширину контейнера */
  box-sizing: border-box; /* Учитываем отступы */
  overflow: hidden; /* Лишнее содержимое скрывается */
}

.text {
  font-size: inherit; /* Наследуем размер шрифта */
  white-space: nowrap; /* Текст остаётся в одной строке */
  overflow: hidden; /* Скрываем лишний текст, если он слишком длинный */
  text-overflow: ellipsis; /* Добавляем многоточие, если текст обрезается */
}

.badge ::v-deep(svg),
.badge ::v-deep(img),
.badge ::v-deep(i) {
  width: 20px; /* Базовый размер иконок */
  height: 20px;
  flex-shrink: 0; /* Иконки не уменьшаются больше заданного размера */
}

@media (max-width: 594px) {
  .badge {
    padding: 6px 15px; /* Уменьшаем отступы */
    font-size: 10px; /* Пропорционально уменьшаем размер шрифта */
    gap: 5px; /* Уменьшаем промежуток между текстом и иконками */
  }

  .text {
    font-size: inherit; /* Текст адаптируется под общий размер */
  }

  .badge ::v-deep(svg),
  .badge ::v-deep(img),
  .badge ::v-deep(i) {
    width: 16px; /* Уменьшаем размер иконок */
    height: 16px;
  }
}
@media (max-width: 470px) {
  .badge {
    width: 100%;
  }
}

</style>
