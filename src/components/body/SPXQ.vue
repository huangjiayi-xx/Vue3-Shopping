<template>
  <div class="fenleiBox">

    <div class="leftBox">
        <div class="oneLift" v-for="item in FenLeiData" :key="item.id">{{item.text}}</div>
    </div>
    
    <div class="twoRight">
      <div style="display: flex;flex-direction: column;" v-for="item in FenLeiData" :key="item.id">
        <div class="titleTop">
        <span><h4 style="margin:0">热销榜</h4><span style="color:darkgray;font-size:12px">热销来袭~~</span></span>
        <span>...</span>
      </div>
      <div class="SPbottom" v-for="it in item.leftDB" :key="it.id">
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
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      FenLeiData:[
        {id:1,text:'热销榜1',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:2,text:'热销榜2',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:3,text:'热销榜3',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:4,text:'热销榜4',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:5,text:'热销榜5',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:6,text:'热销榜6',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
        {id:7,text:'热销榜7',leftDB:[
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6,},
        {id:7,},
        ]},
      ]
    }
  },
  mounted(){
    this.Onleft()
  },
  methods:{
    Onleft(){
    const a =  document.querySelectorAll('.oneLift')
    a[0].classList.add('oneLift_xuanzhong')
    // console.log(a)
    for(let i = 0;i<a.length;i++){
      a[i].addEventListener('click',()=>{
        for(let j=0; j<a.length;j++){
          a[j].classList.remove('oneLift_xuanzhong')
        }
        a[i].classList.add('oneLift_xuanzhong')
        console.log(i)
      })
    }
    }
  }
}
</script>

<style lang="less" scoped>
 .oneLift_xuanzhong{
      border-left: 4px solid red;
    }
  .fenleiBox{
    display: flex;
    width: 100%;
    height: 500px;
    background-color: pink;
    overflow: hidden;
    .leftBox{
      display: flex;
      flex-direction: column;
      height: 516px;
      line-height: 75px;
      overflow-x: hidden;
      overflow: scroll;
      .oneLift{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 75px;
        border-bottom: 1px solid darkgray;
        background-color: aqua;
        box-sizing: border-box;
      }
    }
    .leftBox::-webkit-scrollbar { width: 0 !important }
    .twoRight{
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 516px;
      background-color: aquamarine;
      overflow-y: scroll;
      .titleTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 60px;
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
  }
</style>