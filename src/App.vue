<template>
  <div class="min-h-screen flex flex-col bg-[#0c0d11]">
    <BlogNav />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" class="flex-1" />
      </transition>
    </router-view>
    <BlogFooter />
  </div>
</template>

<script setup lang="ts">
import BlogNav    from './components/BlogNav.vue'
import BlogFooter from './components/BlogFooter.vue'
</script>