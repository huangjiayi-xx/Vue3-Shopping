<template>
  <div class="header">
    <div class="headerbox">
      <van-icon class="gobackLESS" name="arrow-left" @click="gobock" size="25" color="#fff" />
      <div class="header_top">
        <img class="img" :src="'https://elm.cangdu.org/img/'+dianpuData.image_path" alt="" style="width:80px">
        <div class="right">
          <h3 style="margin:0">{{dianpuData.name}}</h3>
          <span style="font-size:12px">商家配送 / 分钟送达 / {{dianpuData.piecewise_agent_fee.tips}}</span>
          <span style="font-size:12px">公告:{{dianpuData.promotion_info}}</span>
        </div>
        <van-icon name="arrow" size="20"/>
      </div>
      <div class="header_bottom">
        <span><van-tag type="warning" style="margin-right:5px;">减</van-tag>满30减5，满60减8 (APP专享)</span>
        <span>1个活动<van-icon name="arrow" size="15"/></span>
      </div>
    </div>
    <img :src="'https://elm.cangdu.org/img/'+dianpuData.image_path" alt="" class="beijingIMG">
  </div>
  <div class="body">
    <van-tabs v-model:active="active1">
      <van-tab title="商品">
        <div class="ShangPing">
          <div class="left">
            <van-sidebar v-model="active2" @change="onChange">
              <van-sidebar-item v-for="item in indexList" :key="item" :title="'标签名称'+item" />
            </van-sidebar>
          </div>

          <div class="right" style="width:100%">
            <van-index-bar :index-list="indexList" ref="checkbox" @change="scrollTo" :sticky="false">
              <div v-for="item in indexList" :key="item">
                <van-index-anchor :index="item">标题{{item}}</van-index-anchor>
                <van-cell style="padding:0">
                  <NEWspxq></NEWspxq>
                </van-cell>
              </div>
            </van-index-bar>
          </div>

        </div>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
    </van-tabs>
  </div>

</template>

<script>
import NEWspxq from '@/components/body/NEWspxq.vue'
export default {
  name: 'ShanPuXianQing',
  props: ['id'],
  data() {
    return {
      active1: 0,
      active2: 0,
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      dianpuData: {
        image_path:'',
        piecewise_agent_fee:''
      },
      imgURL: ''
    }
  },
  components: {
    NEWspxq
  },
  created() {
    this.getDianpuData()
  },
  methods: {
    async getDianpuData() {
      const api = '/shopping/restaurant/' + this.id
      const { data: res } = await this.$http.get(api)
      this.dianpuData = res
      console.log(res)
    },
    gobock() {
      this.$router.go(-1)
    },
    onChange(index) {
      // console.log(index+1)

      this.$refs.checkbox.scrollTo(index + 1)
    },
    scrollTo(val) {
      // console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .beijingIMG {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .gobackLESS {
        position: absolute;
        top: 2px;
        left: 0;
        z-index: 3;
        font-weight: bold;
      }
  .headerbox {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    padding-bottom: 0;
    backdrop-filter: blur(30px);
    color: #fff;
    .header_top {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin-left: 10px;
      }
    }
    .header_bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      font-size: 12px;
    }
  }
}
.body {
  .ShangPing {
    display: flex;
    width: 100%;
    height: 450px;
    overflow: hidden;
    .left {
      height: 466px;
      overflow: scroll;
    }
    .right {
      flex: 1;
      height: 466px;
      overflow: scroll;
    }
    .left::-webkit-scrollbar {
      width: 0 !important;
    }
    .right::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
</style>