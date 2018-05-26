<template>
    <div class="container">
        <div w-750-1334 aspectratio aspect-ratio="750/1334" flexcontainer >
            <div class="item" w-420-430 aspectratio aspect-ratio="420/430">
                <div aspectratio-content>
                    <mt-radio
                        title="请选择您所在的年级"
                        :options="['初一', '初二', '初三']"
                        v-bind:value="grade"
                        v-on:change="change"
                    >
                    </mt-radio>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Radio } from 'mint-ui'
import Vue from 'vue'
import { mapState } from 'vuex'

Vue.component(Radio.name, Radio)
export default {
    name: "homapage",
    computed: {
        grade() {
            return this.$store.state.details.grade
        }
    },
    methods: {
        change(e) {
            this.$store.commit('changeGrade', e)
            this.$router.push('details')
        }
    }
}
</script>
>
<style scoped>
   .container {
       background: url('../../assets/background.jpg') no-repeat center center fixed;
       background-size: cover;
   }
   [flexcontainer] {
       align-items: center;
       justify-content: center;
   }
   [w-750-1334] {
       width: 750px
   }
   [w-750-1334] {
       aspect-ratio: '750:1334'
   }
   [w-420-430] {
       width: 420px;
       z-index: 100;
       border-radius: 10px;
       background: white;
   }
   [w-420-430] {
       aspect-ratio: '420:430'
   }
   [w-420-430] .mint-radiolist-title {
        font-size: '15px';
        color: '#2da9e6'
    }
</style>
