<template>
  <div class="detail-wrapper">
    <div class="banner">
        <img src="../../assets/banner.png">
    </div>
    <div class="header section">
      <div class="course-name">{{course.name}}&nbsp;&nbsp;|&nbsp;&nbsp;{{course.time}}课时</div>
    </div>
    <div class="info section">
      <div class="title">课程信息</div>
      <div class="content">
          <div class="infowrapper">
            <img class="font" src="../../assets/time.png">
            <div class="label time">开课时间</div>
            <div class="value time">{{courseTime[1]}}&nbsp;&nbsp;&nbsp;{{courseTime[0]}}</div>
          </div>
          <div class="infowrapper">
            <img class="font" src="../../assets/location.png">
            <div class="label time">上课地点</div>
            <div class="value time">{{course.location}}</div>
          </div>
          <div>
            <img class="font" src="../../assets/teacher.png">
            <div class="label time">授课老师</div>
            <div class="value time">{{course.teacherLabel}}  {{course.teacher}}</div>
          </div>
      </div>
    </div>
    <div class="desc section">
      <div class="title">课程简介</div>
      <div class="content">{{course.desc}}</div>
    </div>
    <div class="stu-info section">
      <div class="title">适用学员</div>
      <div class="content">{{course.stuInfo}}</div>
    </div>
    <div class="character-item section" v-for="(item,index) in course.character" :key="index">
        <i></i><span>{{item}}</span>
    </div>
    <div class="bottom">
      <span class="price">总计: ¥{{course.price}}</span>
      <a class="tel" :href="'tel:' + course.tel">电话预约</a>
    </div>
    <div v-show="backTopShow" class="backtop iconfont" @click="backTop">&#xe61d;</div>
  </div>
</template>
<script>
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
        location: "龙华区大同路26号万国都会写字楼",
        desc: "这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介这里是课程简介",
        stuInfo: '这里是适用学员——心怀宇宙的初中生心怀宇宙的初中生心怀宇宙的初中生心怀宇宙的初中生心怀宇宙的初中生',
        character: [
          '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色', '这里是课程简这里是课程简特色'
        ],
        price: 3400,
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
    window.onscroll = this._throttle(function () {
      let st = document.documentElement.scrollTop || document.body.scrollTop || Math.abs(document.querySelector('.detail-wrapper').getBoundingClientRect().top)
      if (st > 100) {
        self.backTopShow = true
      } else {
        self.backTopShow = false
      }
    }, 20, {
      leading: true,
      trailing: false
    })
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
        if (document.documentElement.scrollTop) {
          document.documentElement.scrollTop = distance
        } else {
          document.body.scrollTop = distance
        }
        
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

.banner {
  position: relative;
  z-index: -1;
}

.section {
  margin: 30px 40px;
  padding: 20px 30px 30px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,.09);
  border-color: rgba(0,0,0,.09);
  border: 1px solid #e8e8e8;
  &.header {
    padding-top: 30px;
    margin-top: -52px;
    z-index: 1000;
    .course-name {
      font-size: 32px;
      letter-spacing: 2px;
      text-align: center;
      font-weight: 600;
    }
  }
  .title {
    height: 70px;
    line-height: 60px;
    font-size: 28px;
    font-weight: 600;
  }
  .infowrapper {
    margin-bottom: 15px;
  }
  .content {
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 3px;
    color: #666666;
    .font {
      width: 25px;
      vertical-align: sub;
      margin-right: 12px;
    }
    .label {
      margin-right: 12px;
    }
    .value {
      letter-spacing: 0px;
    }
    .time {
      display: inline-block;
    }
    .date {
      margin-left: 177px;
    }
  }
}
  .character-item {
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
    height: 120px;
    padding-top: 30px;
    i {
      width: 60px;
      height: 60px;
      display: inline-block;
      border-radius: 50%;
      border: solid 1px #eee;
      background-size: 40px 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,.09);
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('../../assets/feature.png')
    }
    span {
      position: relative;
      top: -20px;
      left: 30px;
      letter-spacing: 3px;
      color: #666666;
    }
  }

.bottom {
  height: 120px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 750px;
  background: #fff;
  border-top: solid 1px #dddddd;
  .price {
    height: 120px;
    line-height: 120px;
    display: inline-block;
    color: #ff8672;
    font-size: 28px;
    margin-left: 40px;
    letter-spacing: 1px;
  }
  .tel {
    width: 180px;
    height: 76px;
    line-height: 76px;
    text-align: center;
    text-decoration: none;
    border: solid 1px #eee;
    background-color: #0323a9;
    border-radius: 20px;
    color: #ffffff;
    display: inline-block;
    position: absolute;
    top: 22px;
    right: 36px;
    font-size: 26px;
    letter-spacing: 3px;
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



