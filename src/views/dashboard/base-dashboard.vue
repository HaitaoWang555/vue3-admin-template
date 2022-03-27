<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const userName = computed(() => store.getters.name)
</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ userName }}</div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
