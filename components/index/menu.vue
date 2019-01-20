<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menu" :key="index+index" @mouseenter="enter">
        <i :class="item.type"/>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
        <template v-for="(item,idx) in curdetail.child">
          <h4 :key="idx">{{ item.title }}</h4>
          <span v-for="v in item.child" :key="v">{{ v }}</span>
        </template>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    curdetail() {
      let arr = this.menu.filter((item) => item.type === this.kind)[0] ||[]
      console.log('computed-----')
      console.log(arr)
      return arr
    }
  },
  data() {
    return {
      kind: '',
      menu: [{
        type: 'food',
        title: '美食',
        child: [{
          title: '美食',
          child: ['代金券', '甜点', '饮品', '火锅', '小吃快餐']
        }]
      },
      {
        type: 'takeout',
        title: '外卖',
        child: [{
          title: '外卖',
          child: ['美团外卖']
        }]
      },
      {
        type: 'hotel',
        title: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济', '舒适', '国五']
        }]
      }]
    }
  },
  methods: {
    mouseleave() {
      
      this._timer=setTimeout(()=>{
        self.kind=''
      },350)
    },
    enter(e) {
      this.kind = e.target.querySelector('i').className
      console.log(this.kind)
    },
    sover () {
      clearTimeout(this._timer)
    },
    sout () {
      this.kind = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.m-menu {
  width: 230px;
  height: 475px;
  box-sizing: border-box;
  margin-top: -50px;
  margin-left: 20px;
  z-index: 66666;
  color: #fff;
  position: relative;
  background: linear-gradient(
    -180deg,
    rgba(2, 181, 157, 0.85) 2%,
    rgba(22, 146, 183, 0.85) 100%
  );
  dt {
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    margin-left: 15px;
  }
  dd {
    position: relative;
    box-sizing: border-box;
    padding: 2px 12px;
    height: 26px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      & > i {
        opacity: 1;
      }
    }
  }
  .nav {
    dd > i {
      font-family: 'meituan';
      font-size: 14px;
      font-style: normal;
      opacity: 0.3;
      margin-right: 11px;
      &:before {
        width: 14px;
        height: 14px;
        display: inline-block;
      }
    }
    .food {
      &:before {
        content: '\e622';
      }
    }

    .takeout {
      &:before {
        content: '\e630';
      }
    }

    .hotel {
      &:before {
        content: '\e62a';
      }
    }

    .homestay {
      &:before {
        content: '\e631';
      }
    }

    .movie {
      &:before {
        content: '\e62c';
        position: relative;
        left: -2px;
      }
    }

    .airport {
      &:before {
        content: '\e632';
      }
    }

    .ktv {
      &:before {
        content: '\e627';
      }
    }

    .life {
      &:before {
        content: '\e633';
      }
    }

    .hair {
      &:before {
        content: '\e626';
        transform: scale(0.7);
      }
    }

    .marry {
      &:before {
        content: '\e629';
      }
    }

    .offspring {
      &:before {
        content: '\e623';
      }
    }

    .sport {
      &:before {
        content: '\e62b';
      }
    }

    .furniture {
      &:before {
        content: '\e625';
      }
    }

    .study {
      &:before {
        content: '\e624';
      }
    }

    .health {
      &:before {
        content: '\e628';
      }
    }

    .bar {
      &:before {
        content: '\e621';
      }
    }
    .arrow {
      width: 4px;
      height: 4px;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
      transform: rotate(-45deg);
      display: block;
      position: absolute;
      right: 13px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .detail {
    /* border: 1px solid red; */
    padding: 0 30px;
    position: absolute;
    left: 230px;
    bottom: 0;
    width: 400px;
    height: 416px;
    background: #fff;
    z-index: 9999;
    h4 {
      margin-top: 24px;
      height: 22px;
      line-height: 22px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
    }
    span {
      color: #999;
      font-size: 12px;
      line-height: 15px;
      display: inline-block;
      margin-right: 16px;
      margin-top: 10px;
      cursor: pointer;
      &:hover {
        color: #31BBAC;
      }
    }
  }
}
</style>

