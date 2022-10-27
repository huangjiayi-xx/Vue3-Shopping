<template>
  <div class="box-1">
    <img :src="'https://elm.cangdu.org/img/'+imger" style="width:63px">
    <div class="right">
      <span class="one">
        <div style="display:flex;align-items: center;">
          <span style="margin-right:5px"><van-tag color="#ffe1e1" text-color="#ad0000">品牌</van-tag></span>
          <h4 style="margin:0">{{title}}</h4>
        </div>
        <span style="font-size: 12px;">保准票</span>
      </span>

      <span class="one">
        <div>
          <van-rate v-model="value" readonly allow-half  size="12px" gutter="0" style="margin-right:5px"/>
          <span style="color: coral;margin-right:5px" >{{pingFen}}</span> 
          <span style="font-size: 12px;">月销{{mothXiaoLiang}}单</span>
        </div>
        <div>
          <van-tag type="primary" style="margin-right:2px">蜂鸟专送</van-tag>
          <van-tag color="#7232dd" plain>准时达</van-tag>
        </div>
      </span>

      <span class="one">
        <span style="font-size: 12px;">￥ <span>{{float_delivery_fee}}</span> 起送/{{peiSongFei}}</span>
        <span style="font-size: 12px;">{{GongLiShu}}/<span style="color:aqua;font-size: 13px">{{SongDaiTiam}}</span></span>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name:'DianPu',
  props:{
    title:{
      type:String,
      default:''
    },
    pingFen:{
      type: Number,
      default: 4.5
    },
    mothXiaoLiang:{
      type: Number,
      default: 0
    },
    float_delivery_fee:{
      type: Number,
      default: 5
    },
    peiSongFei:{
      type: String,
      default: '配送费约￥5',
    },
    GongLiShu:{
      type: String,
      default: '10公里',
    },
    SongDaiTiam:{
      type: String,
      default: '40分钟',
    },
    imger:{
      type:String,
      default: 'https://elm.cangdu.org/img/164ad0b6a3917599.jpg'
    }
  },
  data(){
    return{
      value : this.pingFen
    }
  }
}
</script>

<style lang="less" scoped>
  .box-1{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    border-bottom: 1px solid rgba(190, 179, 179, 0.4);
    .right{
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 5px;
      .one{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 14px;
      padding: 7px 0;
      h4{
        font-size: 17px;
      }
    }
    }
    
  }
</style>