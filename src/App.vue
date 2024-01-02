<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view name='main'></router-view>
    <router-view name='login'></router-view>
    <router-view name='list'></router-view>
  </div>


</template>

<script>
import cnHeader from './components/Header'

export default {
  name: 'app',
  components:{
  	cnHeader,
  },
}
</script>