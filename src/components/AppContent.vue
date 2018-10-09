<template>
  <main>
    <transition name="fade2">
      <router-view/>
    </transition>
  </main>
</template>

<script>
export default {
  name: "AppContent",
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 30px;
  background: #fff;
  color: #000;
}

.fade2-enter-active,
.fade2-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
  will-change: opacity;
}

.fade2-enter-active {
  transition-delay: 0.25s;
  will-change: opacity;
}

.fade2-enter,
.fade2-leave-active {
  opacity: 0;
}
</style>
