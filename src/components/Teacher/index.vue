<template>
    <div class="123123">
        <div class="container" v-for="(item, index) in teacher" :key="index">
            <div class="photowrapper">
                <div class="photo" aspectratio w-190-270>
                    <img :src="item.photo" aspectratio-content> 
                </div>
                <div class="university">
                    {{item.university}}
                </div>
                <div class="university">
                    {{item.department}}
                </div>
            </div>
            <div class="info">
                <span>
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="subject">
                        {{item.subject}}老师
                    </div>
                </span>
                <div class="introduce">
                    {{item.introduction}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'teacher',
    computed: {
        teacher() {
            return this.$store.state.teacher
        }
    }
}
</script>

<style lang="less" scoped>
    .container {
        min-height: 350px;
        margin: 60px 40px;
        border-radius: 20px;
        position: relative;
        background: linear-gradient(to right, #5955ee, #9aa9ff);
        box-shadow: 0 2px 8px rgba(0,0,0,.09);
        border-color: rgba(0,0,0,.09);
        color: #ffffff;
        font-size: 0;
        padding-bottom: 20px;
    }
    .photowrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
        left: 30px;
        top: -30px;
    }
    .photo {
        img {
            border-radius: 25px;
            background-color: #ffffff;
            box-shadow: 0 2px 8px rgba(0,0,0,.09);
            border-color: rgba(0,0,0,.09);
            padding: 25px 20px;
        }
    }
    [w-190-270] {
        width: 210px;
    }
    [w-190-270] {
        aspect-ratio: '190:270'
    }
    .info {
        display: inline-block;
        right: 0;
        vertical-align: top;
        padding: 30px 20px 0px 70px;
        font-size: 24px;
        letter-spacing: 1px;
        width: calc(100% - 210px);
        .name {
            display: inline-block;
            font-size: 33px;
            margin-right: 10px;
        }
        .subject {
            display: inline-block;
        }
        .introduce {
            display: inline-block;
            margin-top: 15px;
            letter-spacing: 3px;
            line-height: 45px;
        }
        
    }
    .university {
        font-size: 24px;
        position: relative;
        top: 24px;
        text-align: center;
        letter-spacing: 2px;
    }
</style>
