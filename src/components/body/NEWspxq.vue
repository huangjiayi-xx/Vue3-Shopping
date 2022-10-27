<template>
  <div class="fenleiBox">
    <div class="titleTop">
        <span style="display:flex;"><h4 style="margin:0">热销榜&ensp;</h4><span style="color:darkgray;font-size:12px">热销来袭~~</span></span>
        <span>...</span>
      </div>
      <div class="SPbottom">
        <img src="@/assets/logo.png" alt="" style="width:55px;height: 55px;">
        <div style="display: flex;flex-direction: column;justify-content: space-between;width: 100%;">
          <h3 style="margin:0">我是你爹</h3>
          <span style="color:darkgray;font-size:12px">儿子~~</span>
          <span style="font-size:12px">月售265份好评率30%</span>
          <div class="ez" style="font-size: 12px;">打死儿子</div>
          <span class="adds">
          <span>￥20</span>
          <div class="add">+</div>
        </span>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
 
}
</script>

<style lang="less" scoped>
  .fenleiBox{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
      .titleTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        background-color: #F5F5F5;
      }
      .SPbottom{
        display: flex;
        height: 140px;
        background-color: #fff;
        padding: 10px;
        border-bottom: 1px solid darkgray;
         box-sizing: border-box;        
      .ez{
          width: 50px;
          height: 15px;
          border: 1px solid orange;
          border-radius: 7px;
          color: orange;
        }
        .adds{
          display: flex;
          justify-content: space-between;
          .add{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            color: #fff;
            background-color: #3190E8;
            font-weight: bold;
            box-sizing: border-box;            
          }
        }
      }
    }
</style>