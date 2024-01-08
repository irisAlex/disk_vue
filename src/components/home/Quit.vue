<template>
    <div>
      <!-- 显示loading组件 -->
      <loading v-if="$loading.visible"></loading>
  
      <!-- 页面内容 -->
      <div>
        ... 正在退出
      </div>
    </div>
  </template>
  
  <script>
  //import Loading from './Loading.vue'
  export default {
    name: "quit",
    data() {
        return {
            
        };
    },
    mounted() {
      // 页面加载完成后隐藏loading组件
      this.$loading.hide()
    },
    created() {
      // 在页面加载前显示loading组件
      this.$loading.show()
  
      // 模拟页面加载过程
      setTimeout(() => {
        // 加载完成后隐藏loading组件
        this.$loading.hide()
      }, 3000)
    },
    components: {
       // Loading
    }
  }
  </script>
  