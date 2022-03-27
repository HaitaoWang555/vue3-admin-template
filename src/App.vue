<script setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
const config = {
  autoInsertSpace: true,
}
</script>

<template>
  <el-config-provider
    :locale="locale"
    :button="config"
    size="small"
    :z-index="3000"
  >
    <router-view />
  </el-config-provider>
</template>
