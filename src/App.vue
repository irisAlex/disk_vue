<template>
  <div id="app">
    <cn-header v-if="a_show"></cn-header>
    <ad-header v-if="b_show"></ad-header>
    <router-view name='main'></router-view>
    <bottom v-if="f_show"></bottom>
  </div>
</template>

<script>
import cnHeader from './components/home/Header'
import adHeader from './components/admin/DiskHeader.vue'
import Bottom from './components/home/Bottom.vue'
export default {
  name: 'app',
  data() {
    return {
      f_show : true
    }
  },
  created() {
    const routerName = this.$route.name
    if (routerName === 'dashboard' || routerName == 'manager' || routerName == 'upload') {
      this.a_show = false
      this.b_show = true
      this.f_show = false
    }else {
      this.a_show = true
      this.b_show = false
    }
  },
  components: {
    cnHeader,
    adHeader,
    Bottom
  },
  beforeMount() {
    // console.log(this.$route)
    // const routerName = this.$route.name
    // if (routerName === 'dashboard' || routerName == 'manager' || routerName == 'upload') {
    //   this.a_show = false
    //   this.b_show = true
    // }
  },
  watch: {
    $route() {
      const routerName = this.$route.name
      if (routerName === 'dashboard' || routerName == 'manager' || routerName == 'upload') {
        this.a_show = false
        this.b_show = true
        this.f_show = false
      }else {
        this.a_show = true
        this.b_show = false
        this.f_show = true
      }
    }
  }
}
</script>