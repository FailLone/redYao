<template>
    <div>
        <div flexcontainer>
            <div class="item" v-on:click="changeVisible('grade')">
                <span>
                    {{state.grade}}
                </span>
                <i class="iconfont">
                    &#xe6c6;
                </i>
            </div>
            <div class="item"  v-on:click="changeVisible('project')">
                <span>
                    {{state.project}}
                </span>
                <i class="iconfont">
                    &#xe6c6;
                </i>
            </div>
            <div class="item"  v-on:click="changeVisible('time')">
                <span>
                    {{state.time}}
                </span>
                <i class="iconfont">
                    &#xe6c6;
                </i>
            </div>
        </div>
        <comp-filtercontent :options="currentoption" :visibility="sheetVisible" :value="currentvalue" :close="close" />
    </div>
</template>

<script>
import compFiltercontent from './filterContent'

export default {
    name: "comp-filter",
    components: {
        compFiltercontent
    },
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
                    name: '物理',
                    method: () => this.$store.commit('changeProject', '语文')
                }, {
                    name: '数学',
                    method: () => this.$store.commit('changeProject', '数学')
                }, {
                    name: '英语',
                    method: () => this.$store.commit('changeProject', '英语')
                }, {
                    name: '化学',
                    method: () => this.$store.commit('changeProject', '化学')
                }, {
                    name: '生物',
                    method: () => this.$store.commit('changeProject', '生物')
                }, {
                    name: '人工智能',
                    method: () => this.$store.commit('changeProject', '人工智能')
                }, {
                    name: 'Python入门',
                    method: () => this.$store.commit('changeProject', 'Python入门')
                }, {
                    name: '区块链',
                    method: () => this.$store.commit('changeProject', '区块链')
                }, {
                    name: '大数据分析',
                    method: () => this.$store.commit('changeProject', '大数据分析')
                }, {
                    name: '心理辅导',
                    method: () => this.$store.commit('changeProject', '心理辅导')
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
                }]
            },
            currentoption: [],
            currentvalue: '',
            currentfilter: '',
            sheetVisible: false
        }
    },
    methods: {
        changeVisible(v) {
            if (v === this.currentfilter && this.sheetVisible) {
                this.sheetVisible = false
                this.currentfilter = ''
                return
            }
            this.sheetVisible = true
            this.currentfilter = v
            this.currentoption = this.options[v]
            this.currentvalue = this.state[v]
        },
        close() {
            this.sheetVisible = false
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
        width: 100%;
        height: 65px;
        border: 1px solid #cecece;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 25px;
    }
    .item span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 80%;
        text-align: center;
        letter-spacing: 1px;
    }
    .item i {
        width: 20%;
        color: #bebebe;
        font-size: 25px;
    }
</style>

