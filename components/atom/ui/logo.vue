<template>
  <div class="badge">
    <AtomIconsLogo/>
    <p class="logo-text">Gradeks</p>
  </div>
</template>

<style scoped>
.badge {
  display: flex;
  width: 150px;
  height: 40px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 103px;
  background-color: var(--theme-secondary-bg-color-white);
}

.logo-text {
  color: var(--theme-text-color-black);
  font-family: "PFEncoreSansPro-Regular", serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 990;
  margin: 0;
}

</style>