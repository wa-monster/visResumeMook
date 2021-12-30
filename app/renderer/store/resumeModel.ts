const userResume = {
  base: {
    avatar: '',
    username: '杨大爷',
    area: '四川·成都',
    school: '成都瞎说大学',
    major: '软件工程',
    degree: '本科',
    hometown: '汉族',
    onSchoolTime: {
      beginTime: '2015.09',
      endTime: '2019.06',
    },
  },
  contact: {
    phone: '176****2612',
    email: '2037485086@qq.com',
    github: 'https://github.com/wa-monster',
    juejin: 'https://juejin.cn/user/4327312155485671',
  },
  work: {
    job: '前端工程师',
    city: '北京｜上海｜成都',
    cityList: ['北京', '上海', '成都'],
  },
  hobby: '篮球、爬山、健身、吉他、街舞',
  skill: '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  skillList: [
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
    '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
    '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
    '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
    '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
    '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
    '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
    '了解 MYSQL，了解数据库优化常用方法',
    '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  ],
  evaluation: '投身开源，rc-redux-model 库作者，SugarTurboS Club 开源组织负责人| 掘金 lv1 博主，掘金文章 0w+ 阅读量，github blog 1+ star | 具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  evaluationList: [
    '投身开源，rc-redux-model 库作者，SugarTurboS Club 开源组织负责人',
    '掘金 lv1 博主，掘金文章 0w+ 阅读量，github blog 1+ star',
    '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
    '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  ],
  certificate: '成都第一届耙耳朵比赛参与奖',
  certificateList: ['成都第一届耙耳朵比赛参与奖'],
  schoolExperience: [
    {
      beginTime: '2016.09',
      endTime: '2017.09',
      post: '四叶草成员',
      department: '四叶草',
      content: '修电脑｜修网线',
      parseContent: [
        '修电脑',
        '修网线',
      ],
    },
  ],
  workExperience: [
    {
      beginTime: 1504195200000,
      endTime: 1559318400000,
      post: '前端工程师',
      department: '成都瞎说大学网络中心',
      content: '担任《假的》工作室前端工程师，与成都瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
      parseContent: [
        '担任《假的》工作室前端工程师，与成都瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用',
        '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
      ],
    },
  ],
  projectExperience: [
    {
      beginTime: '2021.03',
      endTime: '2021.05',
      projectName: 'visResumeMook 可视化简历平台',
      post: '前端工程师',
      content:
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      parseContent: [
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
        '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
        '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      ],
      date: 1621145137865,
    },
  ],
};

const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace:'resumeModel',
  openSeamlessImmutable:true,
  state:userResume
}

export default resumeModel