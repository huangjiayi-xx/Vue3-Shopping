<template>
  <div class="box">
    <header class="header">
      <van-icon name="shop-o" size="20" />
      <span>附近商家</span>
      <fu-ji-shopping-list></fu-ji-shopping-list>
    </header>
  </div>
</template>

<script>
  import FuJiShoppingList from './FuJiShoppingList.vue'
export default {
  name: 'FuJiShopping',
  components:{
    FuJiShoppingList
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  .header {
    padding-bottom: 25px;
  }
}
</style>