<template>
  <div class="m-user">
    <template v-if="user">
      欢饮您, <span class="username">{{ user }}</span>
      <nuxt-link to="/exit">退出</nuxt-link>
    </template>
    <template v-if="user === ''">
        <nuxt-link to="/login" class="login">立即登录</nuxt-link>
        <nuxt-link to="/register" class="register">注册</nuxt-link>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: ''
    }
  }
}
</script>

