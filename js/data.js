// 网站基本信息
const websiteInfo = {
    title: "小白爱分享",
    subtitle: "技术分享博客",
    author: "小白爱分享",
    description: "分享前端技术经验，记录学习过程中的心得体会"
};

// 导航栏数据
const navItems = [
    { name: "首页", url: "index.html" },
    { name: "前端API", url: "pages/frontend-api.html" },
    { name: "前端教程", url: "pages/frontend-tutorials.html" },
    { name: "Python教程", url: "pages/python-tutorials.html" },
    { name: "在线工具", url: "pages/tools.html" },
    { name: "关于我们", url: "pages/about.html" }
];

// 文章数据
const articles = [
    {
        id: 1,
        title: "JavaScript ES6 新特性详解",
        excerpt: "ES6是JavaScript语言的一大升级，带来了许多新特性和语法糖，让开发者能够更高效地编写代码。",
        content: "JavaScript ES6引入了许多重要特性，包括箭头函数、模板字符串、解构赋值、Promise等等。这些新特性极大地提升了开发效率和代码可读性。",
        author: "小白爱分享",
        date: "2024-11-15",
        category: "JavaScript",
        tags: ["JavaScript", "ES6", "前端"]
    },
    {
        id: 2,
        title: "CSS Flexbox 布局完全指南",
        excerpt: "Flexbox 是 CSS3 中的一种布局方式，它提供了更加有效的方式来对容器内的项目进行排列、对齐和分配空间。",
        content: "Flexbox 布局是一个一维布局模型，旨在改进容器内项目的对齐和分布。通过设置容器的 display 属性为 flex，可以创建一个灵活的容器。",
        author: "小白爱分享",
        date: "2024-11-10",
        category: "CSS",
        tags: ["CSS", "Flexbox", "布局"]
    },
    {
        id: 3,
        title: "Vue.js 组件通信详解",
        excerpt: "在 Vue.js 开发中，组件间的通信是非常重要的概念，本文将详细介绍各种通信方式。",
        content: "Vue.js 组件间通信包括父子组件通信、兄弟组件通信和跨级组件通信。常用的方法有 props、$emit、Vuex、provide/inject 等。",
        author: "小白爱分享",
        date: "2024-11-05",
        category: "Vue.js",
        tags: ["Vue.js", "组件", "通信"]
    },
    {
        id: 4,
        title: "React Hooks 最佳实践",
        excerpt: "React Hooks 让我们在函数组件中使用状态和其他 React 特性，本文总结了一些实用的最佳实践。",
        content: "React Hooks 的出现改变了我们编写 React 应用的方式。useState、useEffect、useContext 等是常用的内置 Hooks，还有自定义 Hooks 可以封装可复用的状态逻辑。",
        author: "小白爱分享",
        date: "2024-10-28",
        category: "React",
        tags: ["React", "Hooks", "最佳实践"]
    },
    {
        id: 5,
        title: "Python 基础语法入门",
        excerpt: "Python是一种高级编程语言，以其简洁易读的语法而闻名，适合初学者入门编程。",
        content: "Python是一门功能强大且易于学习的编程语言。它具有简洁的语法、丰富的库和广泛的应用领域，包括数据分析、人工智能、网络编程等。",
        author: "小白爱分享",
        date: "2024-10-20",
        category: "Python",
        tags: ["Python", "基础", "编程"]
    },
    {
        id: 6,
        title: "Django Web开发实战",
        excerpt: "Django是基于Python的高级Web框架，它鼓励快速开发和干净实用的设计。",
        content: "Django是一个开源的Web应用框架，采用MTV模式（Model-Template-View）。它提供了ORM、URL路由、模板引擎等功能，大大简化了Web应用的开发过程。",
        author: "小白爱分享",
        date: "2024-10-15",
        category: "Python",
        tags: ["Python", "Django", "Web开发"]
    }
];

// 分类数据
const categories = [
    { name: "JavaScript", count: 15 },
    { name: "CSS", count: 8 },
    { name: "Vue.js", count: 12 },
    { name: "React", count: 10 },
    { name: "Node.js", count: 7 },
    { name: "Python", count: 9 },
    { name: "Django", count: 6 },
    { name: "小程序", count: 5 }
];

// 标签数据
const tags = [
    "JavaScript", "CSS", "Vue.js", "React", "Node.js", 
    "Python", "Django", "小程序", "Webpack", "Git", "前端工程化",
    "性能优化", "浏览器", "算法", "数据结构", "HTTP"
];

// 友情链接数据
const links = [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    { name: "W3C标准", url: "https://www.w3.org/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "掘金", url: "https://juejin.cn/" },
    { name: "Stack Overflow", url: "https://stackoverflow.com/" }
];