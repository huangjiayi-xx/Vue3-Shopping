<template>
  <div class="box">
    <router-link to="/login">
      <div class="one">
        <van-image  round  fit="cover" width="4rem" height="4rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
        <div class="user-info">
          <span style="font-size: 20px;font-weight: bold;">登陆/注册</span>
          <span style=" display: flex;align-items: center; font-size: 15px;"><van-icon name="graphic" size="18"/>暂无绑定手机号</span>
        </div>
        <van-icon name="arrow" size="20"/>
      </div>
    </router-link>


      <div class="two">
        <router-link to="/yuer">
          <div>
            <div class="shulian"><span class="text" style="color: #f90;">0.00</span><span>元</span></div>
            <span>我的余额</span>
          </div>
        </router-link>
        <router-link to="/youhui">
          <div>
            <div class="shulian"><span class="text" style="color:#ff5f3e;">0</span><span>个</span></div>
            <span>我的优惠</span>
          </div>
        </router-link>
        <router-link to="/jifen">
          <div>
            <div class="shulian"><span class="text" style="color:#6ac20b">0</span><span>分</span></div>
            <div>我的积分</div>
          </div>
        </router-link>
      </div>

      <div class="three">
        <div class="three-1">
          <van-icon name="records" size="20"/>
          <div class="three-text">
            <span>我的订单</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="three-1">
          <van-icon name="goods-collect" size="20"/>
          <div class="three-text">
            <span>积分商场</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="three-1">
          <van-icon name="vip-card" size="20"/>
          <div class="three-text">
            <span>饿了么会员卡</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    
      <div class="four">
        <div class="three-1">
          <van-icon name="service-o" size="20"/>
          <div class="three-text">
            <span>服务中心</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="three-1">
          <van-icon name="down" size="20"/>
          <div class="three-text">
            <span>下载饿了么APP</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .one{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 90px;
    background-color: #3190E8;
    box-sizing: border-box;
    .user-info{
      display: flex;
      flex-direction: column;
      color: #fff;
      margin-left: -100px;
    }
  }

  .two{
    display: flex;
    width: 100%;
    height: 85px;
    background-color: #fff;
    color: #000;
    box-sizing: border-box;
    font-size: 14px;
    margin-bottom: 10px;
    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #000;
      .text{
        font-size: 30px;
        font-weight: bold;
      }
    }
    a:nth-child(1),
    a:nth-child(2)
    {
      border-right: 1px solid rgb(218, 218, 224);
    }

    .shulian{
      text-align: center;
      margin-bottom: 8px,
    }
  }

  .three{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-left: 20px;
    margin-bottom: 10px;
    .three-1{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 45px;
      .three-text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-left: 5px;
    }
    }
    .three-1:nth-child(1),
    .three-1:nth-child(2){
      border-bottom: 1px solid rgb(218, 218, 224);
    }
  }

  .four{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-left: 20px;
    margin-bottom: 10px;
    .three-1{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 45px;
      .three-text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-left: 5px;
    }
    }
    .three-1:nth-child(1){
      border-bottom: 1px solid rgb(218, 218, 224);
    }
  }




</style>