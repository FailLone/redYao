<template>
    <div v-on:click="close" class="wrapper" v-bind:class="visibility ? 'down' : 'up'" >
        <div class="mask" flexcontainer v-show="visibility"  />
        <ul v-bind:class="visibility ? 'down' : 'up'">
            <li v-for="item in options" :key="item.name" v-bind:class="item.name === value ? 'active' : ''" v-on:click="item.method" >
                    {{item.name}}
                <i class="iconfont" v-show="item.name === value" >
                    &#xe609;
                </i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "comp-filtercontent",
    props: ['visibility', 'options', 'value', 'close']
}
</script>

<style scoped lang="less">
    .wrapper {
        position: fixed;
        top: 65px;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1000;
        transition: height 0.5s;
        &.down {
            height: 100%;
        }
        &.up {
            height: 0px;
        }
        .mask {
            background-color: rgba(0, 0, 0, .65);
            height: 100vh;
            transition: none;
            position: absolute;
            top: 0px;
            right: 0;
            left: 0;
            bottom: 0;
        }
        ul {
            width: 100%;
            height: fit-content;
            padding: 0px 40px;
            z-index: 1001;
            background-color: #fff;

            &.down {
                animation: slideInDown 0.5s 0s 1 both;
            }

            &.up {
                animation: slideOutUp 0.5s 0s 1 both;
            }

            li {
                font-size: 23px;
                padding: 15px 0;
                border-bottom: solid 1px #eee;
                &.active {
                    color: #1890ff
                }
                & .iconfont {
                    float: right;
                }
                i {
                    font-size: 23px;
                }
            }
        }
    }

    @keyframes slideInDown {
        from {
            transform: translate3d(0, -100%, 0);
            visibility: visible;
        }

        to {
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes slideOutUp {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            visibility: hidden;
            transform: translate3d(0, -100%, 0);
        }
}
</style>
