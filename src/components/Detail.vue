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
        <div class="time info-item"><span class="label">开课时间</span></div>
        <div class="location info-item"><span class="label">授课地点</span>{{course.location}}</div>
        <div class="teacher info-item"><span class="label">授课老师</span>{{course.teacher}}</div>
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
      <span>{{character.price}}</span>
      <a>{{character.tel}}</a>
    </div>
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
        startTime: '10',
        endTime: '11.45',
        teacher: "江小白",
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
      }
    }
  },
  mounted: () => {

  }
}
</script>

<style scoped lang="less">
.detail-wrapper {
  height: 340px;
  font-size: 24px;
}

.mint-swipe-item {
  img {
    height: 100%;
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
}

</style>



