<template>
    <div>
        <comp-filter />
        <div flexcontainer class="container">
                <comp-item  :data="item" v-for="(item, index) in course" :key="index" />
        </div>
    </div>
</template>

<script>
import compFilter from './components/filter'
import compItem from './components/item'

export default {
    name: 'detail',
    components: {
        compFilter,
        compItem
    },
    computed: {
        course() {
            const {grade, project, time, order, course} = this.$store.state.details

            return course.filter(
                v => (grade === '年龄' || grade === v.grade)
                && (project === '课程' || project === v.project)
            ).sort((a, b) => time === '按热门程度' ? b.weight - a.weight : a.weight - b.weight)
            return course
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 125px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

