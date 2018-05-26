const state = {
    grade: '全部年级',
    project: '全部科目',
    time: '开课时间',
    order: '排序',
    course: [{
        name: '暑假强化A班',
        grade: '初一',
        project: '数学',
        time: '2018.07.02-2018.07.18',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 1
    }, {
        name: '暑假强化B班',
        grade: '初一',
        project: '数学',
        time: '2018.07.20-2018.08.05',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 2
    }, {
        name: '暑假强化A班',
        grade: '初一',
        project: '英语',
        time: '2018.07.02-2018.07.18',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 1
    }, {
        name: '暑假强化B班',
        grade: '初一',
        project: '英语',
        time: '2018.07.20-2018.08.05',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 2
    }, {
        name: '暑假强化班',
        grade: '初二',
        project: '物理',
        time: '2018.07.02-2018.07.18',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 1
    }, {
        name: '暑假强化班',
        grade: '初二',
        project: '英语',
        time: '2018.07.02-2018.07.18',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 1
    }, {
        name: '暑假强化A班',
        grade: '初二',
        project: '数学',
        time: '2018.07.02-2018.07.18',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 1
    }, {
        name: '暑假强化B班',
        grade: '初二',
        project: '数学',
        time: '2018.07.20-2018.08.05',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 2
    }, {
        name: '暑假强化A班',
        grade: '初三',
        project: '数学',
        time: '2018.07.20-2018.08.05',
        month: '7月开课',
        period: 15,
        price: 2399,
        order: 2
    }, {
        name: '暑假强化B班',
        grade: '初三',
        project: '数学',
        time: '2018.08.07-2018.08.23',
        month: '8月开课',
        period: 15,
        price: 2399,
        order: 3
    }, {
        name: '暑假强化班',
        grade: '初三',
        project: '英语',
        time: '2018.08.07-2018.08.23',
        month: '8月开课',
        period: 15,
        price: 2399,
        order: 3
    }]
}

const mutations = {
    changeGrade(state, grade) {
        state.grade = grade
    },
    changeProject(state, project) {
        state.project = project
    },
    changeTime(state, time) {
        state.time = time
    },
    changeOrder(state, order) {
        state.order = order
    }
}

export default {
    state,
    mutations
}