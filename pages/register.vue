<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em class="bold">已有美团账号?</em>
          <a href="/login">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </span>
      </header>
    </div>
    <section>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
          <el-button size="mini" round @click="sendMsg">发送验证码</el-button>
          <div class="status">{{statusMsg}}</div>
        </el-form-item>
        <el-form-item label="验证码" prop="code" max-length="4">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">同意以下协议并注册</el-button>
          <div class="error">{{error}}</div>
        </el-form-item>
        <el-form-item>
          <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      statusMsg: 'statusMsg',
      error: '',
      ruleForm: {
        name: '',
        email: '',
        code: '',
        pwd: '',
        cpwd: ''
      },
      rules: {
        name: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        },],
        email: [{
          required: true,
          type: 'email',
          message: '请输入合法邮箱',
          trigger: 'blur'
        },],
        pwd: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        },
        ],
        cpwd: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        },
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.ruleForm.pwd) {
              console.log(this.ruleForm)
              callback(new Error('两次密码输入不同'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        }
        ]
      }
    };
  },
  methods: {
    sendMsg() {
      console.log('send a msg')
    },
    register() {

    },
  }
}
</script>

<style lang="scss" scoped>
.page-register {
  .header {
    min-width: 980px;
    color: #666;
    border-bottom: 2px solid #2bb8aa;

    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

      .site-logo {
        display: inline-block;
        background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        width: 128px;
        height: 36px;
        text-indent: -9999px;
        background-position: -669px -748px;
      }

      .login {
        float: right;
      }

      .bold {
        font-style: normal;
      }
    }
   
  }
   > section {
      margin: 0 auto 30px;
      padding-top: 30px;
      width: 980px;
      min-height: 300px;
      padding-right: 550px;
      box-sizing: border-box;
      .status {
        font-size: 12px;
        margin-left: 20px;
        color: #e6a23c;
      }
      .error {
        color: red;
      }
    }
}
</style>
