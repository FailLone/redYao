<template>
    <router-link to='/detail'>
        <div class="item-container">
            <img :src="backgroundSrc">
            <div class="bottom">
                <img src="../../../assets/bottom.png">
            </div>
                <img :src="searchSrc" class="search">
            <img :src="src" class="project">
            <div class="title">
                {{name}}
            </div>
            <div class="price title">
                ¥{{data.price}}
            </div>
            <div class="information">
                {{data.time}}
            </div>
            <div class="information period">
                {{data.period}}课时
            </div>
        </div>
    </router-link>
</template>


<script>
export default {
    name: 'comp-item',
    props: ['data'],
    computed: {
        src() {
            return require(`../../../assets/${this.data.project}.png`)
        },
        backgroundSrc() {
            return require(`../../../assets/${this.data.style}-back.png`)
        },
        searchSrc() {
            return require(`../../../assets/${this.data.style}-search.png`)
        },
        name() {
            return this.data.grade + this.data.project + this.data.name
        }
    }
}
</script>

<style scoped lang="less">
    .item-container {
        margin: 25px 30px 0px 30px;
        text-align: center;
        position: relative;
        .bottom {
            width: 85%;
            top: -16px;
            display: inline-block;
            position: relative;
        }
        .search {
            position: absolute;
            width: 13%;
            bottom: 40px;
            right: 3.5%;
        }
        .project {
            position: absolute;
            width: 26%;
            right: 4%;
            top: -25px;
        }
        .title {
            position: absolute;
            top: 68px;
            left: 90px;
            color: #ffffff;
            font-size: 28px;
            letter-spacing: 3px;
            &.price {
                top: 120px;
                letter-spacing: 1px;
                left: 190px;
            }
        }
        .information {
            position: absolute;
            bottom: 35px;
            left: 115px;
            color: #666666;
            font-size: 25px;
            &.period {
                left: 460px;
            }
        }
    }
    .item-container:first-child {
        margin-top: 50px;
    }
</style>

