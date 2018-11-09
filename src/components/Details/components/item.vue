<template>
    <router-link :to="{ path: 'detail', query: {data: data} }">
        <div class="item-container">
            <div class="top">
                <div class="background">
                    
                </div>
                <div class="text">
                    <span>{{data.grade}}</span>
                </div>
            </div>
            <img :src="backgroundSrc">
            <div class="bottom">
                <img src="../../../assets/bottom.png">
            </div>
                <img :src="searchSrc" class="search">
            <img :src="src" class="project">
            <div class="title">
                {{data.name}}
            </div>
            <div class="price title">
                {{data.price}}
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
            return require(`../../../assets/${this.data.name}.png`)
        },
        backgroundSrc() {
            return require(`../../../assets/${this.data.style}-back.png`)
        },
        searchSrc() {
            return require(`../../../assets/${this.data.style}-search.png`)
        }
    }
}
</script>

<style scoped lang="less">
    .item-container {
        margin: 25px 30px 0px 30px;
        text-align: center;
        position: relative;
        .top {
            position: absolute;
            left: 26px;
            top: 7px;
            font-size: 12px;
            color: #666666;
            .background {
                    position: absolute;
                    left: 0px;
                    top: -13px;
                    width: 162px;
                    height: 45px;
                    background: inherit;
                    background-color: rgba(255, 255, 255, 1);
                    border: none;
                    border-radius: 15px;
                    box-shadow: none;
                    font-size: 12px;
                    color: #666666;
            }
            .text {
                position: relative;
                left: 30px;
                top: -4px;
                width: 98px;
                word-wrap: break-word;
                font-size: 20px;
            }
        }
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
            left: 60px;
            color: #ffffff;
            font-size: 28px;
            letter-spacing: 3px;
            &.price {
                font-size: 20px;
                top: 120px;
                left: 70px;
                letter-spacing: 1px;
                max-width: 415px;
                text-align: left;
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

