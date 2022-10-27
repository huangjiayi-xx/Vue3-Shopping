<template>
  <van-form @submit="onSubmit" style="position: relative;margin-top: 20px;">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="请填写用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      name="password"
      label="密码"
      placeholder="请填写密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <van-field
      v-model="usercode"
      name="code"
      label="验证码"
      placeholder="请填写验证码"
      :rules="[{ required: true, message: '请填写验证码'}]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>

  <div class="yzm" @click="getCode">
    <img :src="codeImg" alt="#">
    <div style="display: flex;flex-direction: column;margin-left: 5px;">
      <span style="margin-bottom: 3px;">看不清</span>
      <span style="color:deepskyblue">下一张</span>
    </div>
  </div>
</van-form>
<p style="font-size:13px;color:red;margin:0 20px">温馨提示：未注册过的账号，登录时将自动注册
      注册过的用户可凭账号密码登录</p>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      username: '',
      password: '',
      usercode: '',
      codeImg: ''
    }
  },
  created(){
    this.getCode()
  },
  methods:{
    async onSubmit(){
      const {data:res} = await this.$http.post('/v2/login',{
        username: this.username,
        password: this.password,
        captcha_code: this.usercode
      })
      console.log(res)
      console.log(this.usercode)
    },
    async getCode(){
      const {data:res} = await this.$http.post('/v1/captchas')
      this.codeImg = res.code
    }
  },
}
</script>

<style lang="less" scoped>
  .yzm{
    display: flex;
    align-items: center;
    position: absolute;
    right: 20px;
    bottom: 33%;
    width: 120px;
    height: 30px;
    font-size: 13px;
    img{
      width: 60%;
      border: 1px solid rgba(186, 180, 180, 0.4);
    }
  }
</style>