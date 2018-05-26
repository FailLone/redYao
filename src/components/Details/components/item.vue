<template>
    <div w-650-350 aspectratio class="item-container">
        <div aspectratio-content>
            <img :src="src">
            <div class="course-container" flexcontainer>
                <div flexcontainer class="content">
                    <div class="name">
                        {{name}}
                    </div>
                    <div class="time">
                        <span>
                            {{data.time}}
                        </span>
                        <span>
                            {{data.period}}课时
                        </span>
                    </div>
                </div>
                <div flexcontainer class="price">
                    <span>
                        ¥ {{data.price}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'comp-item',
    props: ['data'],
    computed: {
        src() {
            return require(`../../../assets/${this.data.project}.jpg`)
        },
        name() {
            return this.data.grade + this.data.project + this.data.name
        }
    }
}
</script>

<style scoped>
    .item-container {
        margin: 30px 0;
        border: 1px solid #cecece;
        border-radius: 10px;
    }
    .item-container img {
        width: 100%;
        height: 60%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    [w-650-350] {
        width: 650px;
    }
    [w-650-350] {
        aspect-ratio:'650:350';
    }
    .course-container {
        height: 40%;
        width: 100%;
    }
    .content {
        width: 70%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        font-size: 32px;
        color: #000000
    }
    .name {
        margin-left: 20px;
        font-size: 30px;
        margin-bottom: 10px;
    }
    .time {
        white-space: nowrap;
    }
    .content span {
        font-size: 18px;
        border: 1px solid #cecece;
        border-radius: 10px;
        padding: 2px;
        margin-left: 20px;
    }
    .price {
        color: #FF9900;
        font-size: 32px;
        width: 30%;
        height: 100%;
        align-items: center;
    }
</style>

