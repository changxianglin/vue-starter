<template>
  <div>
    🐝🦋
    <br />
    <span>文字可以显示么</span>
    <button @click="handleAbout">about</button>
    <router-view></router-view>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleAbout = () => {
    console.log('跳转')
    console.log('router', router)
    router.push('/me')
}

</script>

<style lang="scss" scoped>
</style>