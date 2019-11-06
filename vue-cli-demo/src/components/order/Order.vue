<!-- -->
<template>
  <div id="order">
        {{msg}}
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
        msg: '订单管理模块'
    };
  },
  components: {},
  methods: {},
  created:function(){
      console.log("Order Model init!!!")
  }
};
</script>

<style>

</style>