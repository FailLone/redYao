<template>
    <div>
        <comp-filter />
        <div flexcontainer class="container">
            <comp-item  v-for="(item, index) in course" :key="index" :data="item"/>
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
                v => (grade === '全部年级' || grade === v.grade)
                && (project === '全部科目' || project === v.project)
                && (time === '开课时间' || time === v.month)
            ).sort(
                (a, b) => order === '排序' || order === '按热门程度' || a.order - b.order
            )
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 65px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

