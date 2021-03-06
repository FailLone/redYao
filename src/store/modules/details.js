const state = {
    grade: '年龄',
    project: '课程',
    time: '排序',
    search: '',
    course: [{
        name: '《神奇自然》启蒙初级课程',
        grade: '5-10 岁',
        project: '思维启蒙初级',
        time: '2018.11.15-2019.03.01',
        weight: '1',
        period: 32,
        price: '基础结构搭建、空间方位训练、乐高积木拼装',
        style: 'purple',
        desc: '无需使用电脑或文字，学习指令块控制机器人的运动，采用可组装的标准化乐高积木，提高动手能力，通过实物编程与动手锻炼思维启蒙。',
        desc1: '在老师引导下，走进丰富多彩的自然世界去认识神奇的动植物们，激发、探索大自然的好奇心；启蒙学习测量、估算、比较、分类、排序、面积等基础数学逻辑知识，提升空间感',
        stuInfo: '8-13岁， 小学3-7年级',
        stuInfo1: '图形化编程进阶，复合工具使用，培养理科思维',
        character: ['实物化编程锻炼、逻辑性思维培养', '标准化结构搭建、空间方位训练、乐高拼装', '了解生命科学、物质科学、地球科学基本常识'],
        money: [180, 156, 62]
    }, {
        name: '《智能科技》启蒙初级课程',
        grade: '5-10 岁',
        project: '思维启蒙初级',
        time: '2018.11.15-2019.03.01',
        weight: '1',
        period: 32,
        price: '多元结构搭建、逻辑思维培养、实物化编程',
        style: 'blue',
        desc: '用指令块控制机器人的运动，实物编程，锻炼任务规划、步骤分解、判断决策等基础编程思维。可组装多样化材料的科技小制作，进一步提升动手能力，并学习其中的科学原理、锻炼科学的探究方法。',
        desc1: '走近伟大神奇的科技世界去认识人类的伟大发明，学习桥梁、楼房、火车、磁悬浮列车、轮船、飞机、火箭、机器人等的相关知识，激发孩子们改造大自然的创造力。',
        stuInfo: '5-10岁， 小学1-5年级',
        stuInfo1: '启蒙逻辑思维，锻炼动手能力，培养理科爱好',
        character: ['实物化编程锻炼、逻辑性思维培养', '多元化结构搭建、简易工具使用、发明小制作', '了解交通工程、建筑工程、宇航工程基本常识'],
        money: [156, 125, 62]
    }, {
        name: '《智趣生活》技能进阶课程',
        grade: '8-13 岁',
        project: '技能进阶中级',
        time: '2018.11.15-2019.03.01',
        weight: '2',
        period: 32,
        price: '驱动原件应用、传感器认知、基础物理测量',
        style: 'red',
        desc: '开始学习传感器的编程应用，开发出智能的人机交互程序：点亮星空、时间管家、一起摇摆、熊猫生日会等；',
        desc1: '学习LED七彩灯、声音检测、红外避障、振动检测、按键检测、超声波检测、温度检测、光敏电阻、电位器、直流电机、舵机、无源蜂鸣器等电子模块的编程应用知识。',
        stuInfo: '8-13岁， 小学3-7年级',
        stuInfo1: '图形化编程进阶，复合工具使用，培养理科思维',
        money: [195, 156, 78],
        character: ['图形化编程进阶、传感器基础编程、创造性思维训练 (Scratch)', '驱动元件的应用、传感器结构认知、物理测量的掌握', '了解音乐、饮食、运动、竞技、交通、建筑等知识，开阔视野']
    }, {
        name: '《机器时代》发明探索课程',
        grade: '10-15 岁',
        project: '发明探索高级',
        time: '2018.07.20-2018.08.05',
        weight: '3',
        period: 32,
        price: '模块机器人组装、工程型思维、单片机初探',
        style: 'red',
        desc: '了解机器人的定义、分类、起源、组成结构等知识。学会组装e-Bot金属机器人，包括机体、Arduino主控板、遥控器，能够组装足球机器人和搬运机器人等形态，并学会科学的组装方法，最终能熟练操控。',
        desc1: '通过Visualino图形化编程和C语言编程进行系列机器人实验，包括：奇光异彩-LED灯控制、闲庭信步－电机驱动、夸父逐日－光源跟踪等实验。',
        stuInfo: '10-15岁， 小学5-9年级',
        stuInfo1: '图形化编程强化，工程性思维塑造，驱动元件应用',
        money: [234, 187, 109],
        character: ['图形化编程强化、单片机应用初探、工程性思维训练', '模块机器人组装、传动结构应用、传感器布局安装', '机器人历史及伦理、机器人基本原理、智能工具历史']
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
    },
    changeSearch(state, search) {
        state.search = search
    }
}

export default {
    state,
    mutations
}
