<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <template v-if="icon">
    <el-icon v-if="icon.includes('el-icon')" class="sub-el-icon">
      <component :is="icon.replace('el-icon-', '')"></component>
    </el-icon>
    <svg-icon v-else :icon-class="icon"></svg-icon>
  </template>
  <span v-if="title">{{ title }}</span>
</template>
