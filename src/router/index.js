import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/body/MyHome.vue'
import MyCassify from '../views/body/MycCassify.vue'
import MyShoppingCart from '../views/body/MyShoppingCart.vue'
import MyMine from '../views/body/MyMine.vue'
import MyLogin from '../views/Login/Login.vue'
import MyHomeBody from '../views/body/home/MyHomeBody.vue'

import myYuEr from '../views/body/home/clear/myYuEr.vue'
import myYouHui from '../views/body/home/clear/myYouHui.vue'
import myJiFen from '../views/body/home/clear/myJiFen.vue'

import ShanPuXianQing from '../views/body/ShanPuXianQing.vue'


//首页的swiper栏
import TiangPingYingLiao from '@/components/swipers/TiangPingYingLiao.vue'
import ShangChaoBianLi from '@/components/swipers/ShangChaoBianLi.vue'
import MeiShi from '@/components/swipers/MeiShi.vue'
import JianCan from '@/components/swipers/JianCan.vue'
import newDianTeiHui from '@/components/swipers/newDianTeiHui.vue'
import ZuanShiDa from '@/components/swipers/ZuanShiDa.vue'
import YuDingZaoCan from '@/components/swipers/YuDingZaoCan.vue'
import TuHaoTuiJian from '@/components/swipers/TuHaoTuiJian.vue'


const routes = [
  {path: '/' , redirect: '/home'},
  {path: '/home',  component: MyHome, meta:{title:'首页'},redirect: '/home/myhomebody',children:[
    {path: 'myhomebody', component: MyHomeBody, meta:{title:'首页'}},
    {path: 'classify', component: MyCassify, meta:{title:'分类'}},
    {path: 'shoppingcart', component: MyShoppingCart, meta:{title:'购物车'}},
    {path: 'mine', component: MyMine, meta:{title:'我的'}},
    {path: '/login', component: MyLogin, meta:{title:'登陆'}},
    {path: '/yuer', component: myYuEr, meta:{title: '我的余额'}},
    {path: '/youhui', component: myYouHui, meta:{title: '我的优惠'}},
    {path: '/jifen', component: myJiFen, meta:{title: '我的积分'}},
    //首页的swiper栏
    {path: 'TiangPingYingLiao',component:TiangPingYingLiao,meta:{title:'甜品饮品',id:9}},
    {path: 'ShangChaoBianLi',component:ShangChaoBianLi,meta:{title:'商超便利',id:6}},
    {path: 'MeiShi',component:MeiShi,meta:{title:'美食',id:1}},
    {path: 'JianCan',component:JianCan,meta:{title:'简餐',id:1}},
    {path: 'newDianTeiHui',component:newDianTeiHui,meta:{title:'新店特惠',id:1}},
    {path: 'ZuanShiDa',component:ZuanShiDa,meta:{title:'准时达',id:1}},
    {path: 'YuDingZaoCan',component:YuDingZaoCan,meta:{title:'预订早餐',id:1}},
    {path: 'TuHaoTuiJian',component:TuHaoTuiJian,meta:{title:'土豪推荐',id:1}},
  ]},
  {path: '/shanpuxianqing/:id', component: ShanPuXianQing,name:'spxq',props:true}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router