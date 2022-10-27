<template>
  <div>
    <form class="box">
      <input type="text" placeholder="请输入商家或美食名称">
      <input class="submit" type="submit" value="提交" @click.prevent="">
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-sizing: border-box;
  input:-ms-input-placeholder {
    color: rgb(52, 58, 57);
    font-weight: bold;
  }
  input[type='text'] {
    flex: 1;
    height: 36px;
    background-color: #f2f2f2;
    color: rgb(52, 58, 57);
    box-sizing: border-box;
    font-weight: bold;
    margin-right: 5px;
    border-radius: 6px;
    padding-left: 5px;
    border: 1px solid #c1bcbc;
  }
  input[type='submit'] {
    width: 60px;
    height: 36px;
    box-sizing: border-box;
    border: none;
    background-color: #3190e8;
    color: #fff;
    font-weight: bold;
    border-radius: 6px;
  }
}
</style>