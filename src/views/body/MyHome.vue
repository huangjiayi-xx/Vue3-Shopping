<template>
  <van-sticky>
    <Header></Header>
  </van-sticky>
  <router-view></router-view>
  <Tabbar></Tabbar>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Tabbar from '@/components/Tabbar/Tabbar.vue'
export default {
  name: 'MyHome',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    Tabbar
  }
}
</script>

<style>
</style>