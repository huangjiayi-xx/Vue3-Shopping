<template>
  <van-nav-bar :title="$route.meta.title" left-arrow>
    <template #left>
      <span v-show="flag" class="left" @click="goBack">
        <van-icon name="arrow-left" size="20" />{{goBacktext}}
      </span>
      <span v-show="shouSuo" class="left" @click="goBack">
        <van-icon name="search" size="20" @click.stop="goShouSuo" />
      </span>
    </template>
    <template #right>
      <router-link to="/home/mine" v-show="mine">
        <van-icon name="contact" size="20" />
      </router-link>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      flag: false,
      shouSuo: true,
      mine: true,
      goBacktext: '返回'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    goShouSuo() {
      console.log('搜索店铺')
    }
  },
  watch: {
    '$route.path': function (newVal) {
      if (newVal === '/home/myhomebody') {
        this.flag = false //不显示返回按钮
        this.shouSuo = true
        this.goBacktext = ''
      } else {
        this.flag = true //显示返回按钮
        this.shouSuo = false
        this.goBacktext = '返回'
      }

      if (newVal === '/home/mine' || newVal === '/home/login') {
        this.mine = false
      } else {
        this.mine = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>