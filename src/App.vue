<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
@import './assets/iconfont.css';
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;;
}
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #eeeaf8;
  overflow: auto;
}
* {
  box-sizing: inherit;

  &:before,
  &:after {
    box-sizing: inherit;
  }
}
img {
  width: 100%;
  height: auto;
  vertical-align: top;
  content: normal !important;
}
  [aspectratio] {
	  position: relative;
  }
  [aspectratio]::before {
	  content: '';
	  display: block;
	  width: 1px;
	  margin-left: -1px;
	  height: 0;
  }

  [aspectratio-content] {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  width: 100%;
	  height: 100%;
  }
  [flexContainer] {
    display: flex;
    width: 750px;
  }
  .block {
    margin-top: 15px;
  }
  ul,li {
    list-style: none outside none;
    margin: 0;
    padding: 0;
  }
  figure {
    display: block;
    margin: 0;
  }
</style>
