<template>
  <div id="app">
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6"><i class="el-icon-school">   西北师范大学</i></el-col>
    <el-col :span="18">
    <el-menu mode="horizontal">
         <el-menu-item index="1"><router-link to="/home">主页</router-link></el-menu-item>
         <el-menu-item index="2"><router-link to="/about">关于Soul</router-link></el-menu-item>
         <el-menu-item index="3"><router-link to="/culture">丧葬文化</router-link></el-menu-item>
         <el-menu-item index="4"><router-link to="/mourn">人物悼念</router-link></el-menu-item>
       </el-menu>
    </el-col>
  </el-row>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
