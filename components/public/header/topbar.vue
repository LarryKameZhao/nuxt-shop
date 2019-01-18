<template>
    <el-row :gutter="0" class="m-header">
      <el-col :span="4" :offset="3">
        <Geo/>
      </el-col>
      <el-col :span="4">
        <User/>
      </el-col>
      <el-col :span="10" :offset="-5">
        <NavBar/>
      </el-col>
    </el-row>
</template>
<script>
import Geo from './geo'
import User from './user'
import NavBar from './nav'
export default {
  components:{
    Geo,
    User,
    NavBar
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/public/layout.scss";
  @import "@/assets/css/public/header/index.scss";
</style>


