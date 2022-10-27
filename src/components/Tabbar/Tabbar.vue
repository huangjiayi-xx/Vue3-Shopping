<template>
  <div class="box">
<van-tabbar route>
  <van-tabbar-item replace to="/home/myhomebody" icon="wap-home-o" @click="db">首页</van-tabbar-item>
  <van-tabbar-item replace to="/home/classify" icon="filter-o" @click="db">分类</van-tabbar-item>
  <van-tabbar-item replace to="/home/shoppingcart" icon="shopping-cart-o" @click="db">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/home/mine" icon="setting-o" @click="db">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  data(){
    return{
      
    }
  },
  methods:{
    db(){
      this.$store.commit('saveFuJiShoppingList', this.$store.state.saveOneFuJiShopping)
    }
  }
}
</script>

<style lang="less" scoped>
  .box{
    margin-top: 50px ;
  }
</style>