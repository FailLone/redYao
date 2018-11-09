<template>
    <div>
        <mt-search
            v-model="value"
            cancel-text=""
            placeholder="搜索">
        </mt-search>
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
                    name: '年龄',
                    method: () => this.$store.commit('changeGrade', '年龄')
                }, {
                    name: '5-10 岁',
                    method: () => {
                        this.$store.commit('changeGrade', '5-10 岁')
                        this.$store.commit('changeProject', '思维启蒙初级')
                    }
                }, {
                    name: '8-13 岁',
                    method: () => {
                        this.$store.commit('changeGrade', '8-13 岁')
                        this.$store.commit('changeProject', '技能进阶中级')
                    }
                }, {
                    name: '10-15 岁',
                    method: () => {
                        this.$store.commit('changeGrade', '10-15 岁')
                        this.$store.commit('changeProject', '发明探索高级')
                    }
                }],
                project: [{
                    name: '课程',
                    method: () => this.$store.commit('changeProject', '课程')
                }, {
                    name: '思维启蒙初级',
                    method: () => {
                        this.$store.commit('changeGrade', '5-10 岁')
                        this.$store.commit('changeProject', '思维启蒙初级')
                    }
                }, {
                    name: '技能进阶中级',
                    method: () => {
                        this.$store.commit('changeGrade', '8-13 岁')
                        this.$store.commit('changeProject', '技能进阶中级')
                    }
                }, {
                    name: '发明探索高级',
                    method: () => {
                        this.$store.commit('changeGrade', '10-15 岁')
                        this.$store.commit('changeProject', '发明探索高级')
                    }
                }],
                time: [{
                    name: '排序',
                    method: () => this.$store.commit('changeTime', '排序')
                }, {
                    name: '按进阶推荐',
                    method: () => this.$store.commit('changeTime', '按进阶推荐')
                }, {
                    name: '按热门程度',
                    method: () => this.$store.commit('changeTime', '按热门程度')
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
        },
        value() {
            return this.$store.state.search
        }
    }
}
</script>


<style scoped lang="less">
    [flexcontainer] {
        justify-content: center;
        position: fixed;
        top: 76px;
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
<style lang="less">
.mint-search {
        height: auto;
        position: fixed;
        width: 100%;
        z-index: 1;
        top: 0;
        .mint-searchbar {
            background-color: #fff;
            padding: 10px 16px;
        }

        .mint-searchbar-inner {
            border-radius: 8px;
            height: 60px;
            background-color: #eeeaf8;
            input {
                background-color: #eeeaf8;
                width: 80%;
            }
        }
    }
</style>


