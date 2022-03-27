<template>
  <el-config-provider
    :locale="locale"
    :button="config"
    size="small"
    :zIndex="3000"
  >
    <router-view />
  </el-config-provider>
</template>

<script>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    const locale = ref(zhCn)
    const config = reactive({
      autoInsertSpace: true,
    })
    return {
      locale,
      config,
    }
  },
}
</script>
