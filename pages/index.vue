<template>
  <div class="page-index" >
    <el-row :gutter="0">
      <el-col :span="5" >
        <Emenu/>
      </el-col>
      <el-col :span="19">
        <Life/>
      </el-col>
    </el-row>
    <el-row :span="24">artist</el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
import Life from '@/components/index/life'
export default {
  components: {
    Emenu,
    Life
  }
}
</script>
<style lang="scss">

</style>


