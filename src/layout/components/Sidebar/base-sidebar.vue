<script setup>
import { useStore } from 'vuex'
import Logo from './sidebar-logo.vue'
import SidebarItem from './sidebar-item.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import variablesV from '@/styles/variables.scss'

const store = useStore()
const router = useRouter()
const route = useRoute()

const sidebar = computed(() => store.getters.sidebar)
const routes = computed(() => router.options.routes)

const activeMenu = computed(() => {
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
const showLogo = computed(() => store.state.settings.sidebarLogo)
const isCollapse = computed(() => !sidebar.value.opened)
const variables = computed(() => variablesV)
</script>

<template>
  <div :class="{ 'has-logo': showLogo }">
    <Logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="item in routes"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
