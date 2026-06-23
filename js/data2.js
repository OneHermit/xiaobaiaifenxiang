const websiteInfo = {
                                                            "title": "小白爱分享",
                                                            "subtitle": "技术分享博客",
                                                            "author": "小白爱分享",
                                                            "description": "分享前端技术经验，记录学习过程中的心得体会",
                                                            "email": "xiaobaiaifenxiang@126.com"
                                                          };
const navItems = [
                                                            {
                                                              "name": "首页",
                                                              "url": "index.html",
                                                              "order": 0
                                                            },
                                                            {
                                                              "name": "前端API",
                                                              "url": "pages/frontend-api.html",
                                                              "order": 1
                                                            },
                                                            {
                                                              "name": "前端教程",
                                                              "url": "pages/frontend-tutorials.html",
                                                              "order": 2
                                                            },
                                                            {
                                                              "name": "Python教程",
                                                              "url": "pages/python-tutorials.html",
                                                              "order": 3
                                                            },
                                                            {
                                                              "name": "在线工具",
                                                              "url": "pages/tools.html",
                                                              "order": 4
                                                            },
                                                            {
                                                              "name": "关于我们",
                                                              "url": "pages/about.html",
                                                              "order": 5
                                                            },
                                                            {
                                                              "name": "Python教程2",
                                                              "url": "pages/tutorials.html?id=python",
                                                              "order": 6
                                                            }
                                                          ];
const articles = [{"id": 1, "title": "JavaScript ES6 新特性-变量和箭头函数", "content": "# JavaScript ES6 新特性-变量和箭头函数\n## 摘要\n在前端开发的迭代历程中，JavaScript ES6（ECMAScript 2015）绝对是里程碑式的版本——它不仅修复了ES5的诸多痛点，更引入了一系列革命性的新特性，让JavaScript代码更简洁、更易维护、更具可读性，彻底改变了前端开发者的编码方式。\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「实用特性」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。\n\n## 一、ES6 核心定位与意义\n在ES6出现之前，JavaScript的语法相对繁琐，缺乏面向对象的完整特性，代码冗余度高，且不同浏览器兼容性差异较大。ES6的推出，旨在统一JavaScript语法标准，弥补语言缺陷，同时借鉴其他编程语言（如Python、Java）的优秀特性，让开发者能用更少的代码实现更多功能。\n如今，所有现代浏览器（Chrome、Firefox、Edge等）均已全面支持ES6特性，Node.js也早已兼容，无需额外配置即可直接使用，ES6已成为前端开发的「标配」。\n\n## 二、ES6 高频新特性详解\n### 1. 变量声明：let & const（替代var）\nES5中，变量声明只有var关键字，存在「变量提升」「全局污染」「重复声明允许」等痛点，ES6新增let和const，彻底解决了这些问题，让变量声明更规范、更安全。\n#### 核心区别对比\n- var：函数级作用域，允许重复声明，存在变量提升，可修改声明后的变量；\n- let：块级作用域（{}内有效），不允许重复声明，无变量提升，可修改变量值；\n- const：块级作用域，不允许重复声明，无变量提升，声明时必须赋值，且不可修改（注意：引用类型变量，可修改内部属性，不可修改引用地址）。\n\n#### 代码示例\n```javascript\n// var 的痛点\nvar a = 10;\nvar a = 20; // 允许重复声明，无报错\nconsole.log(a); // 20\n\nif (true) {\n  var b = 30; // 函数级作用域，全局可访问\n}\nconsole.log(b); // 30（不合理，块内声明却全局可用）\n\n// let 的正确用法\nlet c = 10;\n// let c = 20; // 重复声明，报错：Identifier 'c' has already been declared\n\nif (true) {\n  let d = 30; // 块级作用域，仅块内可用\n}\n// console.log(d); // 报错：d is not defined\n\n// const 的正确用法\nconst e = 10;\n// e = 20; // 报错：Assignment to constant variable.\n\nconst obj = { name: 'ES6' };\nobj.name = 'JavaScript'; // 允许修改引用类型内部属性\n// obj = {}; // 报错：不可修改引用地址\n```\n「最佳实践」：优先使用const，只有当变量需要被修改时，再使用let；彻底抛弃var，避免出现作用域混乱问题。\n\n### 2. 箭头函数（Arrow Functions）：简化函数声明，解决this指向痛点\nES6推出的箭头函数，是最常用的新特性之一，它不仅简化了函数的语法书写，更解决了ES5中this指向混乱的核心痛点，尤其适合回调函数、匿名函数场景。\n\n#### 核心特性\n- 语法简洁：省略function关键字，用「=>」连接参数与函数体；\n- this绑定：箭头函数没有自己的this，它的this指向「定义时的父级作用域this」，而非运行时的调用者；\n- 无arguments对象：无法使用arguments获取参数列表，可使用剩余参数（...rest）替代；\n- 不能作为构造函数：无法使用new关键字实例化，否则会报错。\n\n#### 代码示例（对比ES5与ES6）\n```javascript\n// ES5 匿名函数写法\nconst arr = [1, 2, 3];\nconst newArr = arr.map(function(item) {\n  return item * 2;\n});\nconsole.log(newArr); // [2, 4, 6]\n\n// ES6 箭头函数简化（单参数可省略括号，单条return可省略大括号和return）\nconst newArr2 = arr.map(item => item * 2);\nconsole.log(newArr2); // [2, 4, 6]\n\n// 多参数、多语句箭头函数\nconst sum = (a, b) => {\n  const total = a + b;\n  return total;\n};\nconsole.log(sum(10, 20)); // 30\n\n// 解决this指向痛点（ES5 vs ES6）\n// ES5 中this指向混乱\nconst obj = {\n  name: 'ES6',\n  sayHi: function() {\n    setTimeout(function() {\n      console.log(this.name); // undefined（this指向window）\n    }, 1000);\n  }\n};\nobj.sayHi();\n\n// ES6 箭头函数解决this问题\nconst obj2 = {\n  name: 'ES6',\n  sayHi: function() {\n    setTimeout(() => {\n      console.log(this.name); // ES6（this指向obj2，定义时的父级作用域）\n    }, 1000);\n  }\n};\nobj2.sayHi();\n\n```\n「最佳实践」：回调函数（如map、setTimeout、forEach）优先使用箭头函数，简化代码并避免this指向问题；构造函数、需要绑定this的函数（如事件回调），不使用箭头函数。\n", "excerpt": "【变量和箭头函数】\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「变量和箭头函数」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。", "author": "小白爱分享", "date": "2025-03-07", "category": "JavaScript", "tags": ["JavaScript"]}, {"id": 2, "title": "JavaScript ES6 新特性--模板字符串和解构赋值", "content": "const userName = user.name;\nconst userAge = user.age;\nconst userCity = user.address.city;\n\n// ES6 解构赋值简化（变量名与对象属性名一致）\nconst { name, age, address: { city } } = user;\nconsole.log(name); // 李四\nconsole.log(age); // 30\nconsole.log(city); // 深圳（嵌套解构）\n\n// 解构时重命名变量（避免变量名冲突）\nconst { name: userName2 } = user;\nconsole.log(userName2); // 李四\n\n// 解构时设置默认值（当属性不存在时，使用默认值）\nconst { gender = '男' } = user;\nconsole.log(gender); // 男（user中无gender属性，使用默认值）\n\n// 2. 数组解构\nconst arr = [10, 20, 30, 40];\n\n// ES5 提取数据\nconst a = arr[0];\nconst b = arr[1];\n\n// ES6 数组解构\nconst [x, y, z] = arr;\nconsole.log(x); // 10\nconsole.log(y); // 20\nconsole.log(z); // 30（多余元素忽略）\n\n// 跳过不需要的元素（用逗号占位）\nconst [, , , w] = arr;\nconsole.log(w); // 40\n\n// 数组解构设置默认值\nconst [m, n, o = 0] = [5, 6];\nconsole.log(o); // 0（第三个元素不存在，使用默认值）\n\n// 3. 函数参数解构（简化函数参数传递）\nconst printUser = ({ name, age }) => {\n  console.log(`姓名：${name}，年龄：${age}`);\n};\nprintUser(user); // 姓名：李四，年龄：30（直接传递对象，自动解构）\n\n```\n\n「最佳实践」：提取对象、数组中的数据时，优先使用解构赋值；处理接口返回的复杂数据（嵌套对象/数组）时，使用嵌套解构，简化代码；函数参数较多时，用对象解构传递参数，提升可维护性。", "excerpt": "【模板字符串和解构赋值】\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「模板字符串和解构赋值」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。", "author": "小白爱分享", "date": "2025-03-08", "category": "JavaScript", "tags": ["JavaScript"]}, {"id": 3, "title": "JavaScript ES6 新特性-拓展运算符和Rest参数", "content": "# JavaScript ES6 新特性-拓展运算符和Rest参数\n在前端开发的迭代历程中，JavaScript ES6（ECMAScript 2015）绝对是里程碑式的版本——它不仅修复了ES5的诸多痛点，更引入了一系列革命性的新特性，让JavaScript代码更简洁、更易维护、更具可读性，彻底改变了前端开发者的编码方式。\n\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「实用特性」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。\n\n### 1. 扩展运算符（Spread Operator）：... 解锁灵活操作\n扩展运算符用「...」表示，是ES6中非常灵活的特性，可用于数组、对象、函数参数，核心作用是「展开」元素（数组）或属性（对象），实现数组拼接、对象合并、函数参数传递等功能，替代ES5中的apply、concat等方法。\n\n#### 核心用法（3大场景）\n\n```javascript\n\n// 1. 数组场景：展开数组、拼接数组、复制数组\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\n// 拼接数组（ES5：arr1.concat(arr2)）\nconst arr3 = [...arr1, ...arr2];\nconsole.log(arr3); // [1, 2, 3, 4, 5, 6]\n\n// 复制数组（浅拷贝，避免引用类型修改影响原数组）\nconst arr4 = [...arr1];\narr4.push(4);\nconsole.log(arr1); // [1, 2, 3]（原数组不变）\nconsole.log(arr4); // [1, 2, 3, 4]\n\n// 2. 对象场景：合并对象、复制对象、覆盖属性\nconst obj1 = { name: 'ES6', age: 8 };\nconst obj2 = { address: '前端', age: 10 };\n\n// 合并对象（ES5：Object.assign({}, obj1, obj2)）\nconst obj3 = { ...obj1, ...obj2 };\nconsole.log(obj3); // { name: 'ES6', age: 10, address: '前端' }（后面对象覆盖前面对象的同名属性）\n\n// 复制对象（浅拷贝）\nconst obj4 = { ...obj1 };\nobj4.name = 'JavaScript';\nconsole.log(obj1); // { name: 'ES6', age: 8 }（原对象不变）\n\n// 3. 函数参数场景：传递可变参数（替代apply）\nconst sum = (a, b, c) => a + b + c;\nconst nums = [10, 20, 30];\n\n// ES5 传递数组作为参数（apply）\nconsole.log(sum.apply(null, nums)); // 60\n\n// ES6 扩展运算符传递参数\nconsole.log(sum(...nums)); // 60（更简洁，可读性更高）\n\n// 可变参数（结合剩余参数）\nconst total = (...args) => args.reduce((a, b) => a + b, 0);\nconsole.log(total(1, 2, 3, 4)); // 10（接收任意数量的参数）\n\n```\n\n「注意点」：扩展运算符实现的是「浅拷贝」，如果数组/对象中包含嵌套的引用类型（如对象、数组），修改嵌套内容会影响原数据；若需深拷贝，需结合其他方法（如JSON.parse(JSON.stringify())）。\n\n### 2. Rest参数（Rest Parameters）：... 接收可变参数\n剩余参数与扩展运算符语法相同（均为...），但作用相反：扩展运算符是「展开」元素，剩余参数是「收集」多余的参数，将其转化为数组，解决了ES5中arguments对象使用繁琐的问题。\n\n#### 核心区别：扩展运算符 vs 剩余参数\n- 扩展运算符（...）：用于「展开」数组/对象，放在赋值号右侧、函数调用时；\n- 剩余参数（...）：用于「收集」多余参数，放在函数参数列表的最后，只能出现一次。\n\n#### 代码示例\n\n```javascript\n\n// 1. 接收函数多余参数\nconst getSum = (a, b, ...rest) => {\n  console.log(a); // 10（第一个参数）\n  console.log(b); // 20（第二个参数）\n  console.log(rest); // [30, 40, 50]（剩余所有参数，转化为数组）\n  return a + b + rest.reduce((total, item) => total + item, 0);\n};\nconsole.log(getSum(10, 20, 30, 40, 50)); // 150\n\n// 2. 剩余参数与解构结合\nconst [first, ...others] = [1, 2, 3, 4, 5];\nconsole.log(first); // 1\nconsole.log(others); // [2, 3, 4, 5]（剩余元素组成数组）\n\nconst { name, ...otherInfo } = { name: '张三', age: 25, gender: '男' };\nconsole.log(name); // 张三\nconsole.log(otherInfo); // { age: 25, gender: '男' }（剩余属性组成对象）\n\n// 3. 替代arguments对象（ES5 vs ES6）\n// ES5：arguments是类数组，需转化为数组才能使用forEach、reduce等方法\nfunction sumES5() {\n  const args = Array.prototype.slice.call(arguments);\n  return args.reduce((a, b) => a + b, 0);\n}\n\n// ES6：剩余参数直接是数组，可直接使用数组方法\nconst sumES6 = (...args) => args.reduce((a, b) => a + b, 0);\n\n```", "excerpt": "【拓展运算符和Rest参数】\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「拓展运算符和Rest参数」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。", "author": "小白爱分享", "date": "2025-03-09", "category": "JavaScript", "tags": ["JavaScript"]}, {"title": "JavaScript ES6 新特性-类和模块化", "content": "# JavaScript ES6 新特性-类和模块化\n在前端开发的迭代历程中，JavaScript ES6（ECMAScript 2015）绝对是里程碑式的版本——它不仅修复了ES5的诸多痛点，更引入了一系列革命性的新特性，让JavaScript代码更简洁、更易维护、更具可读性，彻底改变了前端开发者的编码方式。\n\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「实用特性」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。\n\n### 1. 类（Class）：正式引入面向对象编程\nES5中，实现面向对象编程需要通过构造函数+原型链，语法繁琐、可读性差，且容易混淆原型与实例的关系。ES6引入了Class类的概念，语法更简洁、更规范，本质上是原型链的语法糖，但让面向对象编程更易上手。\n\n#### 核心特性\n\n- 用class关键字声明类，constructor作为构造函数（初始化实例属性）；\n\n- 类内直接定义方法（无需绑定到原型）；\n\n- 支持继承（extends关键字）、super关键字（调用父类构造函数/方法）；\n\n- 支持静态方法（static关键字，只能通过类调用，不能通过实例调用）。\n\n#### 代码示例\n\n```javascript\n\n// ES6 类的声明与实例化\nclass Person {\n  // 构造函数：初始化实例属性\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  // 类的方法（原型方法，实例可调用）\n  sayHi() {\n    console.log(`大家好，我是${this.name}，今年${this.age}岁。`);\n  }\n\n  // 静态方法（static关键字，只能通过类调用）\n  static getClassName() {\n    return 'Person';\n  }\n}\n\n// 实例化类\nconst person1 = new Person('王五', 28);\nperson1.sayHi(); // 大家好，我是王五，今年28岁。\nconsole.log(Person.getClassName()); // Person（静态方法调用）\n// console.log(person1.getClassName()); // 报错：实例无法调用静态方法\n\n// 类的继承（extends）\nclass Student extends Person {\n  // 子类构造函数，必须先调用super()（调用父类构造函数）\n  constructor(name, age, studentId) {\n    super(name, age); // 继承父类的name和age属性\n    this.studentId = studentId; // 子类自身的属性\n  }\n\n  // 子类重写父类方法\n  sayHi() {\n    console.log(`大家好，我是学生${this.name}，学号${this.studentId}。`);\n  }\n\n  // 子类新增方法\n  study() {\n    console.log(`${this.name}正在学习ES6新特性。`);\n  }\n}\n\n// 实例化子类\nconst student1 = new Student('赵六', 20, '2024001');\nstudent1.sayHi(); // 大家好，我是学生赵六，学号2024001。（重写后的方法）\nstudent1.study(); // 赵六正在学习ES6新特性。（子类新增方法）\nconsole.log(student1.age); // 20（继承父类的属性）\n\n```\n\n「最佳实践」：实现面向对象编程时，优先使用Class类语法，替代ES5的构造函数+原型链；子类继承时，务必在constructor中调用super()，否则会报错；静态方法用于定义与实例无关的工具方法。\n\n### 2. 模块化（Module）：import & export，实现代码拆分与复用\n在ES6之前，JavaScript没有原生的模块化机制，代码只能通过全局变量、函数封装实现复用，容易造成全局污染、依赖混乱。ES6引入了模块化规范（import & export），允许将代码拆分为多个文件，每个文件作为一个模块，通过export导出，import导入，实现代码的拆分、复用与管理，为大型项目开发提供了可能。\n\n#### 核心用法（2种导出/导入方式）\n1. **命名导出（export）+ 命名导入（import { ... }）**：适合导出多个变量、函数、类；\n2. **默认导出（export default）+ 默认导入（import 名称 from ...）**：适合导出单个核心变量、函数、类，导入时可自定义名称。\n\n#### 代码示例（模块化拆分）\n「第一步：创建模块文件（utils.js），导出内容」\n\n```javascript\n\n// utils.js（模块文件）\n// 1. 命名导出：导出多个函数\nexport const sum = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n\n// 2. 默认导出：导出单个核心函数\nexport default function getRandomNum(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n```\n\n「第二步：在主文件（main.js）中，导入模块内容」\n\n```javascript\n\n// main.js（主文件）\n// 1. 导入默认导出的内容（可自定义名称，此处用getRandom）\nimport getRandom from './utils.js';\n\n// 2. 导入命名导出的内容（名称必须与导出时一致，可重命名）\nimport { sum, multiply as mul } from './utils.js';\n\n// 使用导入的内容\nconsole.log(getRandom(1, 10)); // 随机生成1-10之间的整数\nconsole.log(sum(10, 20)); // 30\nconsole.log(mul(10, 20)); // 200（重命名后使用）\n\n// 3. 导入所有命名导出的内容（用* as 别名）\nimport * as utils from './utils.js';\nconsole.log(utils.sum(5, 5)); // 10\nconsole.log(utils.multiply(5, 5)); // 25\n\n```\n\n#### 「注意点」\n- 模块化文件必须在HTML中通过「<script type=\"module\" src=\"main.js\"></script>」引入，type=\"module\"不可省略；\n- 默认导出只能有一个，命名导出可以有多个；\n- 导入路径必须是相对路径（如./utils.js），不可省略文件后缀（部分打包工具可配置省略）。", "excerpt": "【类和模块化】\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「类和模块化」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。", "author": "小白爱分享", "date": "2025-03-10", "category": "JavaScript", "tags": ["JavaScript"], "id": 4}, {"id": 5, "title": "JavaScript ES6 新特性-Promise和其他常用特性", "content": "# JavaScript ES6 新特性-Promise和其他常用特性\n在前端开发的迭代历程中，JavaScript ES6（ECMAScript 2015）绝对是里程碑式的版本——它不仅修复了ES5的诸多痛点，更引入了一系列革命性的新特性，让JavaScript代码更简洁、更易维护、更具可读性，彻底改变了前端开发者的编码方式。\n\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「实用特性」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。\n\n### 其他常用新特性（简洁梳理）\n除了上述高频特性，ES6还有几个常用特性，简洁梳理如下，满足日常开发需求：\n\n#### （1）Promise：解决异步回调地狱\nES6引入Promise，用于处理异步操作（如接口请求、定时器），替代ES5中的嵌套回调，让异步代码更简洁、更易维护，是后续async/await的基础。\n\n```javascript\n\n// 简单示例：模拟接口请求\nconst fetchData = () => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const success = true;\n      if (success) {\n        resolve('接口请求成功，返回数据'); // 成功时调用resolve\n      } else {\n        reject('接口请求失败'); // 失败时调用reject\n      }\n    }, 1000);\n  });\n};\n\n// 使用Promise\nfetchData()\n  .then(data => console.log(data)) // 成功回调\n  .catch(err => console.error(err)) // 失败回调\n  .finally(() => console.log('请求结束，无论成功失败都会执行'));\n\n```\n\n#### （2）Set & Map：新增数据结构\n- **Set**：无序、不重复的集合，适合去重、判断元素是否存在；\n- **Map**：键值对集合，键可以是任意类型（ES5对象的键只能是字符串/ Symbol），适合存储复杂键值对数据。\n\n#### （3）Symbol：新增基本数据类型\nSymbol是ES6新增的第7种基本数据类型，用于表示唯一的值，解决对象属性名冲突的问题，常用来定义对象的私有属性。\n\n## ES6 总结与实战建议\n\nES6的新特性众多，但核心高频特性只有上述9个，掌握这些特性，就能应对90%以上的日常开发场景。学习ES6的关键，不是死记硬背语法，而是理解每个特性的「痛点解决场景」，结合实际代码练习，才能真正学以致用。\n\n### 1. 学习优先级\n高频特性（优先掌握）：let/const > 箭头函数 > 模板字符串 > 解构赋值 > 扩展运算符 > 模块化；\n进阶特性（按需掌握）：Class类 > Promise > Set/Map > Symbol。\n\n### 2. 实战建议\n- 日常开发中，强制自己使用ES6语法，替代ES5的繁琐写法（如用let/const替代var，用箭头函数替代匿名回调）；\n- 结合框架学习：在React、Vue项目中，主动使用ES6特性（如组件中用箭头函数、解构赋值接收props、模块化拆分组件）；\n- 注重细节：比如let/const的作用域、箭头函数的this指向、扩展运算符的浅拷贝问题，这些细节往往是面试和开发中的坑；\n- 多练习、多复盘：把ES6特性融入到自己的项目中，遇到问题及时复盘，加深理解。\n\n### 3. 兼容性说明\n如今，现代浏览器（Chrome 58+、Firefox 54+、Edge 14+）、Node.js 6.0+ 均已全面支持ES6特性，无需额外配置；若需兼容旧浏览器（如IE），可使用Babel工具将ES6代码转译为ES5代码。\n", "excerpt": "【Promise和其他常用特性】\n如今，ES6已成为前端开发的必备基础，无论是React、Vue等主流框架，还是日常业务开发，都离不开ES6的核心语法。本文将避开复杂的底层原理，聚焦「Promise和其他常用特性」，结合具体代码示例，带你快速掌握ES6高频新特性，真正做到学以致用。", "author": "小白爱分享", "date": "2025-03-11", "category": "JavaScript", "tags": ["JavaScript"]}];
const categories = [
                                                            {
                                                              "name": "JavaScript",
                                                              "count": 5
                                                            },
                                                            {
                                                              "name": "CSS",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "Vue.js",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "React",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "Node.js",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "Python",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "Django",
                                                              "count": 0
                                                            },
                                                            {
                                                              "name": "小程序",
                                                              "count": 0
                                                            }
                                                          ];
const tags = [
                                                            "JavaScript",
                                                            "CSS",
                                                            "Vue.js",
                                                            "React",
                                                            "Node.js",
                                                            "Python",
                                                            "Django",
                                                            "小程序",
                                                            "Webpack",
                                                            "Git",
                                                            "前端工程化",
                                                            "性能优化",
                                                            "浏览器",
                                                            "算法",
                                                            "数据结构",
                                                            "HTTP"
                                                          ];
const links = [
                                                            {
                                                              "name": "MDN Web Docs",
                                                              "url": "https://developer.mozilla.org/"
                                                            },
                                                            {
                                                              "name": "W3C标准",
                                                              "url": "https://www.w3.org/"
                                                            },
                                                            {
                                                              "name": "GitHub",
                                                              "url": "https://github.com/"
                                                            },
                                                            {
                                                              "name": "掘金",
                                                              "url": "https://juejin.cn/"
                                                            },
                                                            {
                                                              "name": "Stack Overflow",
                                                              "url": "https://stackoverflow.com/"
                                                            }
                                                          ];
const tools = [
                                                            {
                                                              "id": "json-format",
                                                              "name": "JSON格式化",
                                                              "icon": "🔧"
                                                            },
                                                            {
                                                              "id": "js-minify",
                                                              "name": "JS压缩",
                                                              "icon": "📦"
                                                            },
                                                            {
                                                              "id": "css-minify",
                                                              "name": "CSS压缩",
                                                              "icon": "🎨"
                                                            },
                                                            {
                                                              "id": "base64-codec",
                                                              "name": "Base64编解码",
                                                              "icon": "🔐"
                                                            }
                                                          ];
const toolbarConfig = [
                                                            {
                                                              "name": "技术文档",
                                                              "link": "https://www.w3school.com.cn/html/index.asp"
                                                            },
                                                            {
                                                              "name": "在线编辑器",
                                                              "link": "https://codepen.io"
                                                            },
                                                            {
                                                              "name": "API测试工具",
                                                              "link": "https://www.postman.com"
                                                            },
                                                            {
                                                              "name": "curl转化",
                                                              "link": "https://tool.tushuoit.com/curlconverter/index.html"
                                                            }
                                                          ];
const about = {
                                                            "title": "关于我们",
                                                            "author": "小白爱分享",
                                                            "email": "xiaobaiaifenxiang@126.com",
                                                            "content": "# 关于本站\n本站由博主【小白爱分享】创建，致力于分享 IT 技术知识和实践经验。\n\n# 我们的使命\n帮助更多开发者掌握IT技术，解决开发中的难题，共同成长进步。\n\n# 主要内容\n+ 前端技术教程\n+ python技术教程\n+ 实用开发工具\n+ 开源项目分享\n+ 技术问答交流\n\n# 联系方式\n+ 邮箱: xiaobaiaifenxiang@126.com\n+ 公众号: 知未AI \n\n# 发展历程\n+ 2025年3月: 网站正式上线，发布第一篇技术文章"
                                                          };
