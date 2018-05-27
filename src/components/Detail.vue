<template>
  <div class="detail-wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="//gw.alicdn.com/mt/TB1eQR.SpXXXXbcaFXXXXXXXXXX-369-369.png" alt="" > </mt-swipe-item>
      <mt-swipe-item><img src="//gw.alicdn.com/mt/TB1eQR.SpXXXXbcaFXXXXXXXXXX-369-369.png" alt="" > </mt-swipe-item>
      <mt-swipe-item><img src="//gw.alicdn.com/mt/TB1eQR.SpXXXXbcaFXXXXXXXXXX-369-369.png" alt="" > </mt-swipe-item>
    </mt-swipe>
    <div class="header">
      <div class="course-name">{{course.name}} | {{course.time}}学时</div>
      <div class="course-info">
        <div class="time info-item"><i class="iconfont">&#xe63e;</i><span class="label">开课时间</span>{{courseTime[0]}}   {{courseTime[1]}}</div>
        <div class="location info-item"><i class="iconfont">&#xe607;</i><span class="label">授课地点</span>{{course.location}}</div>
        <div class="teacher info-item"><i class="iconfont">&#xe69d;</i><span class="label">授课老师</span>{{course.teacherLabel}}  {{course.teacher}}</div>
        <div class="course-info-title">课程信息</div>
      </div>
    </div>
    <div class="desc section">
      <div class="title">课程简介</div>
      <div class="content">{{course.desc}}</div>
    </div>
    <div class="tech-info section">
      <div class="title">授课师资</div>
      <img :src="course.techInfo.img" />
      <div class="content">{{course.techInfo.info}}</div>
    </div>
    <div class="stu-info section">
      <div class="title">适用学员</div>
      <div class="content">{{course.stuInfo}}</div>
    </div>
    <div class="character section">
      <div class="title">课程特色</div>
      <div class="character-item" v-for="(item,index) in course.character" :key="index">
        <i></i><span>{{item}}</span>
      </div>
    </div>
    <div class="bottom">
      <span class="price">总计 ¥ {{course.price}}</span>
      <a class="tel" :href="'tel:' + course.tel">电话预约</a>
    </div>
    <div v-show="backTopShow" class="backtop iconfont" @click="backTop">&#xe61d;</div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: "detail",
  data: () => {
    return {
      course: {
        name: "初一物理暑期强化A班",
        time: "15",
        startTime: 1529028000,
        endTime: 1530416700,
        teacher: "江小白",
        teacherLabel: "清华硕士",
        location: "万国都会写字楼",
        desc: "这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介",
        techInfo: {
          info: '这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这里是教师介绍这',
          img: '//gw.alicdn.com/mt/TB1eQR.SpXXXXbcaFXXXXXXXXXX-369-369.png'
        },

        stuInfo: '这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介',
        character: [
          '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色'
        ],
        price: 2323,
        tel: 12312412
      },
      backTopShow: false
    }
  },
  computed: {
    courseTime() {
      let s = new Date(this.course.startTime * 1000)
      let e = new Date(this.course.endTime * 1000)
      let lessonTime = '' + s.getHours() + ':' + e.getMinutes() + '-' + e.getHours() + ':' +  e.getMinutes()
      let duration = '' + [s.getFullYear(), s.getMonth(), s.getDate()].join('.') + ' - ' + [e.getFullYear(), e.getMonth(), e.getDate()].join('.')
      return [lessonTime, duration]
    }
  },
  mounted() {
    this._initRAF()
    let supportEventPassive = this._isSupportPassive() ? { passive: true } : false;
    let self = this
    document.body.addEventListener('scroll', this._throttle(function () {
      let st = document.documentElement.scrollTop || document.body.scrollTop || Math.abs(document.querySelector('.detail-wrapper').getBoundingClientRect().top)
      if (st > 100) {
        self.backTopShow = true
      } else {
        self.backTopShow = false
      }
    }, 20, {
      leading: true,
      trailing: false
    }), supportEventPassive)
  },
  methods: {
    backTop: () => {
      var distance = document.body.scrollTop
      var step = distance / 20
      function stepFn() {
        if (distance < 0) {
          distance = 0
        }
        distance = distance - step
        document.body.scrollTop = distance
        if (distance > 0) {
          window.requestAnimationFrame(stepFn);
        }
      }

      window.requestAnimationFrame(stepFn);
    },
    _isSupportPassive: () => {
      var supportsPassiveOption = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function() {
            supportsPassiveOption = true;
          }
        });
        window.addEventListener('test', null, opts);
      } catch (e) {}
      return supportsPassiveOption
    },
    _initRAF: () => {
      var lastTime = 0;
      window.requestAnimationFrame = window.requestAnimationFrame || window['webkitRequestAnimationFrame'];
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
          var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    },
    _throttle: (func, wait, options) => {
      var timeout, context, args, result;
      var previous = 0;
      if (!options) options = {};
  
      var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
  
      var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
  
      throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
      };
  
      return throttled;
    }
  }
}
</script>

<style scoped lang="less">
.detail-wrapper {
  font-size: 24px;
  padding-bottom: 120px;
  color: #333;
}
.mint-swipe {
  height: 340px;
  .mint-swipe-item {
    img {
      height: 100%;
    }
  }
}

.header {
  padding: 40px 40px;
  background: #fff;
  margin-bottom: 30px;
  .course-name {
    font-size: 32px;
    margin-bottom: 30px;
  }
  .course-info {
    border: solid 1px #eee;
    padding: 40px;
    border-radius: 20px;
    position: relative;
    .info-item {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0px;
      }
      .label {
        margin-right: 20px;
      }
      i {
        font-style: normal;
        margin-right: 10px;
      }
    }
    .course-info-title {
      position: absolute;
      top: -12px;
      left: 34px;
      padding: 0 6px;
      height: 24px;
      line-height: 24px;
      background: #fff
    }
  }
}

.section {
  margin-bottom: 30px;
  padding: 30px 40px;
  background: #fff;
  .title {
    width: 230px;
    height: 50px;
    line-height: 50px;
    margin: 0px auto 40px auto;
    border: solid 1px #eee;
    border-radius: 20px;
    text-align: center;
    font-size: 28px;
    position: relative;
    &:after {
      content:'';
      width: 60px;
      background: #eee;
      height: 1px;
      display: block;
      position: absolute;
      top: 50%;
      right: -60px;
    }
    &:before {
      content:'';
      width: 60px;
      background: #eee;
      height: 1px;
      display: block;
      position: absolute;
      top: 50%;
      left: -60px;
    }
  }
  .content {
    font-size: 24px;
    padding: 0 20px;
  }
}

.tech-info {
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
  }
  .content {
    display: inline-block;
    height: 160px;
    width: 500px;
  }
}
.character {
  overflow: hidden;
  .character-item {
    width: 500px;
    height: 120px;
    border: solid 1px #eee;
    margin-bottom: 60px;
    i {
      width: 80px;
      height: 80px;
      display: inline-block;
      border-radius: 50%;
      border: solid 1px #eee;
      margin: 20px;
      padding: 10px;
      background-size: 50px 50px;
      background-repeat: no-repeat;
      background-position: center;
    }
    span {
      display: inline-block;
      height: 120px;
      line-height: 120px;
    }
  }
  .character-item:nth-child(odd) {
    float: left;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    text-align: right;
    i {
      float: right;
    }
  }
  .character-item:nth-child(even) {
    float: right;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    text-align: left;
    i {
      float: left;
    }
  }
  .character-item:nth-child(2) {
    i {
      background-image: url('../assets/u246.png')
    }
  }
  .character-item:nth-child(3) {
    i {
      background-image: url('../assets/u242.png')
    }
  }
  .character-item:nth-child(4) {
    i {
      background-image: url('../assets/u244.png')
    }
  }
  .character-item:nth-child(5) {
    i {
      background-image: url('../assets/u264.png')
    }
  }
}

.bottom {
  height: 120px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  background: #fff;
  .price {
    height: 120px;
    line-height: 120px;
    display: inline-block;
    color: #FF9900;
    font-size: 32px;
    margin-left: 80px;
  }
  .tel {
    width: 140px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    text-decoration: none;
    border: solid 1px #eee;
    border-radius: 10px;
    color: #333;
    display: inline-block;
    margin-left: 260px;
  }
}

.backtop {
  position: fixed;
  bottom: 200px;
  right: 40px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background: #777777;
  text-align: center;
  line-height: 50px;
}

</style>



