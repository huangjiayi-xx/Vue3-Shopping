<template>
  <van-sticky>
    <van-dropdown-menu>
      <van-dropdown-item :title="name1" ref="checkbox">
        <van-tree-select
          v-model:main-active-index="activeIndex"
          :items="option1"
          height="435"
          @click-nav="left"
          >
          <template #content>
            <div  v-for="item in option1[activeIndex].sub_categories"  :key="item" @click="right"> 
              <div class="rightHover one">
                <span>{{item.name}}</span>
                <span>{{item.count}}</span>
              </div>
            </div>
          </template>
        </van-tree-select>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2"></van-dropdown-item>
      <van-dropdown-item v-model="value3" :options="option3"></van-dropdown-item>
    </van-dropdown-menu>
  </van-sticky>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: this.$route.meta.id-1,
      name1:this.$route.meta.title,
      value2: 0,
      value3: 0,
      option1:[], 
      option2:[
        { text: '默认排序', value: 0 },
        { text: '好评排序', value: 1 },
        { text: '销量排序', value: 2 },
      ],
      option3:[
        { text: '默认排序', value: 0 },
        { text: '好评排序', value: 1 },
        { text: '销量排序', value: 2 },
      ]
    }
  },
  created(){
    this.getFenleiDB()
  },
  methods:{
    async getFenleiDB(){
      const {data:res} = await this.$http.get('/shopping/v2/restaurant/category',{
        params:{
          latitude: '23.021851',
          longitude: '113.121918',
        }
      })
      this.option1 = res.map( (item,index)=>{
        return { 
          name:item.name,
          text:item.name+' ('+item.count+')',
          value: index,
          sub_categories:item.sub_categories
        }
      })
      console.log(this.option1)
    },
    left(val){
      // console.log(val)
      this.name1 = this.option1[val].name 
    },
    right(e){
      let a = document.querySelectorAll('.rightHover')
      for(let i=0;i<a.length;i++){
        a[i].addEventListener('click',()=>{
          for(let j=0; j<a.length;j++){
            a[j].classList.remove('two')
          }
        })
      }
      e.target.classList.add('two')
      this.$refs.checkbox.toggle(false)
    }
  }
}
</script>

<style lang="less" scoped>
  .one{
    background-color: #F7F8FA;
  }
  .rightHover{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgba(139, 130, 130, 0.532);
    font-size: 13px;
  }
  .two{
    color: blue;
    background-color: #fff;
  }
  
</style>