<template>
    <keep-alive>
      <Swipe></Swipe>
    </keep-alive>
    <FuJiShopping></FuJiShopping>
</template>

<script>
  import Swipe from '@/components/Swipe.vue'
  import FuJiShopping from '@/components/FuJiShopping.vue'
export default {
  name:'MyHomeBody',
  components: {
    Swipe,
    FuJiShopping,
  }
}
</script>

<style>

</style>