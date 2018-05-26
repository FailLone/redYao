<template>
    <div>
        <div flexcontainer>
            <div class="item" v-on:click="changeVisible('grade')">
                <span>
                    {{state.grade}}
                </span>
                <i class="iconfont">
                    &#xe64b;
                </i>
            </div>
            <div class="item"  v-on:click="changeVisible('project')">
                <span>
                    {{state.project}}
                </span>
                <i class="iconfont">
                    &#xe64b;
                </i>
            </div>
            <div class="item"  v-on:click="changeVisible('time')">
                <span>
                    {{state.time}}
                </span>
                <i class="iconfont">
                    &#xe64b;
                </i>
            </div>
            <div class="item"  v-on:click="changeVisible('order')">
                <span>
                    {{state.order}}
                </span>
                <i class="iconfont">
                    &#xe64b;
                </i>
            </div>
        </div>
        <mt-actionsheet
            :actions="currentoption"
            v-model="sheetVisible"
        >
        </mt-actionsheet>
    </div>
</template>

<script>
import { Actionsheet } from 'mint-ui'
import Vue from 'vue'

Vue.component(Actionsheet.name, Actionsheet)
export default {
    name: "comp-filter",
    data() {
        return {
            options: {
                grade: [{
                    name: '全部年级',
                    method: () => this.$store.commit('changeGrade', '全部年级')
                }, {
                    name: '初一',
                    method: () => this.$store.commit('changeGrade', '初一')
                }, {
                    name: '初二',
                    method: () => this.$store.commit('changeGrade', '初二')
                }, {
                    name: '初三',
                    method: () => this.$store.commit('changeGrade', '初三')
                }],
                project: [{
                    name: '全部科目',
                    method: () => this.$store.commit('changeProject', '全部科目')
                }, {
                    name: '语文',
                    method: () => this.$store.commit('changeProject', '语文')
                }, {
                    name: '数学',
                    method: () => this.$store.commit('changeProject', '数学')
                }, {
                    name: '英语',
                    method: () => this.$store.commit('changeProject', '英语')
                }],
                time: [{
                    name: '开课时间',
                    method: () => this.$store.commit('changeTime', '开课时间')
                }, {
                    name: '7月开课',
                    method: () => this.$store.commit('changeTime', '7月开课')
                }, {
                    name: '8月开课',
                    method: () => this.$store.commit('changeTime', '8月开课')
                }],
                order: [{
                    name: '排序',
                    method: () => this.$store.commit('changeOrder', '排序')
                }, {
                    name: '按开课时间',
                    method: () => this.$store.commit('changeOrder', '按开课时间')
                }, {
                    name: '按热门程度',
                    method: () => this.$store.commit('changeOrder', '按热门程度')
                }]
            },
            currentoption: [],
            sheetVisible: false
        }
    },
    methods: {
        changeVisible(v) {
            this.sheetVisible = true
            this.currentoption = this.options[v]
        }
    },
    computed: {
        state() {
            return this.$store.state.details
        }
    }
}
</script>


<style scoped>
    [flexcontainer] {
        justify-content: center;
        position: fixed;
        top: 0;
        z-index: 1;
    }
    .item {
        width: 25%;
        height: 65px;
        border: 1px solid #cecece;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 17px;
    }
    .item span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 80%;
        text-align: center;
    }
    .item i {
        width: 20%;
    }
</style>

