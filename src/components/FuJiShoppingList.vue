<template>
  <div class="box">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        offset="0"
        @load="swpList">
        <router-link v-for="item in FuJiShopping" :key="item.id" :to="'/shanpuxianqing/'+ item.id">
          <dian-pu 
          style="color:black"
          :title="item.name"
          :imger="item.image_path"
          :ping-fen="item.rating"
          :mothXiaoLiang="item.recent_order_num"
          :peiSongFei="item.piecewise_agent_fee.tips"
          :SongDaiTiam="item.order_lead_time"
          :GongLiShu="item.distance"
          :float_delivery_fee="item.float_minimum_order_amount"
          ></dian-pu>
        </router-link>
        
      </van-list>
  </div>
</template>

<script>
import DianPu from './body/DianPu.vue'
export default {
  name: 'FuJiShoppingList',
  data() {
    return {
      loading: false,
      finished:false,
      limit: 0,
    }
  },
  methods:{
    async swpList() {
      this.limit += 10
      const { data: res } = await this.$http.get('/shopping/restaurants', {
        params: {
          latitude: '23.021851',
          longitude: '113.121918',
          limit: this.limit
        }
      })
      this.FuJiShoppingList = res
      //  console.log(this.swipeList)
       // 将数据保存在vuex上
       if(this.limit===10){
        this.$store.commit('saveOneFuJiShopping', this.FuJiShoppingList)
       }
       this.$store.commit('saveFuJiShoppingList', this.FuJiShoppingList)
       //保存完毕后
       this.loading = false
       this.finished = false
    },
  },
  computed:{
    FuJiShopping(){
      return this.$store.state.FuJiShoppingList
    }
  },
  components:{
    DianPu
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
}
</style>