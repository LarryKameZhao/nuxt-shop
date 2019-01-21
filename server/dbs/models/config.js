export default {
  dbs: 'mongodb://mapp:Lk1994??@47.104.222.153:27017/mapp',
  redis: {
    get host () {
      return '47.104.222.153'
    },
    get port () {
      return 6379
    },
    getPassword() {
      return 'lk1994??'
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '1658977155@qq.com'
    },
    get pass () {
      return 'lk1994228??'
    }
  }
}