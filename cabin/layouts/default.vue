<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<!-- Styles -->
<style>
@import url("~/assets/css/main.scss");

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
