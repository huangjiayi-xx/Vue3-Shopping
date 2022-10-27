<template>
  <van-swipe class="my-swipe" indicator-color="#39A9ED">
    <van-swipe-item>
      <van-grid clickable :column-num="4" icon-size="50px">
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" text="甜品饮品" to="/home/TiangPingYingLiao" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg" text="商超便利" to="/home/ShangChaoBianLi" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg" text="美食" to="/home/MeiShi" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg" text="简餐" to="/home/JianCan" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg" text="新店特惠" to="/home/newDianTeiHui" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg" text="准时达" to="/home/ZuanShiDa" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg" text="预定早晨" to="/home/YuDingZaoCan" />
        <van-grid-item @click="db" icon="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg" text="土豪推荐" to="/home/TuHaoTuiJian" />
      </van-grid>
    </van-swipe-item>
    <van-swipe-item>
      <van-grid clickable :column-num="4" icon-size="50px">
        <van-grid-item icon="https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg" text="川湘菜" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg" text="麻辣烫" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg" text="包子粥店" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg" text="鲜花蛋糕" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg" text="日韩料理" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg" text="果蔬生鲜" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg" text="汉堡薯条" to="/" />
        <van-grid-item icon="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg" text="披萨意面" to="/" />
      </van-grid>
    </van-swipe-item>
  </van-swipe>

</template>

<script>
export default {
  name: 'Swipe',
  methods:{
     db(){
      this.$store.commit('saveFuJiShoppingList', this.$store.state.OneFuJiShopping)
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 200px;
  text-align: center;
  margin-bottom: 10px;
}
.van-grid-item-icon {
  size: var(--van-grid-item-icon-size);
}
:root {
  --van-grid-item-icon-size: 50px;
}
</style>w