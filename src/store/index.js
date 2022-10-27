import { createStore } from 'vuex'

export default createStore({
  state: {
    OneFuJiShopping:[],
    FuJiShoppingList:[]
  },
  getters: {
  },
  mutations: {
    saveOneFuJiShopping(state,OneFuJiShopping){
      state.OneFuJiShopping = OneFuJiShopping
    },
    saveFuJiShoppingList(state,FuJiShoppingList){
      state.FuJiShoppingList = FuJiShoppingList
    }
  },
  actions: {
  },
  modules: {
  }
})
