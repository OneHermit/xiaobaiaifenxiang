// 导航栏数据
const navItems = [
    { name: "首页", url: "../index.html" },
    { name: "前端API", url: "./frontend-api.html" },
    { name: "前端教程", url: "./frontend-tutorials.html" },
    { name: "Python教程", url: "./python-tutorials.html" },
    { name: "在线工具", url: "./tools.html" },
    { name: "关于我们", url: "./about.html" }
];

// 网站信息
const websiteInfo = {
    title: "小白爱分享",
    subtitle: "技术分享博客",
    author: "小白爱分享",
    description: "分享前端技术经验，记录学习过程中的心得体会"
};

// 菜单配置数据
const menuConfig = [
    {
        id: 'get-apis',
        name: 'GET API',
        icon: 'fas fa-download',
        items: [
            {
                id: 'get-all-video',
                name: '获取全部视频',
                method: 'GET',
                icon: 'fas fa-list'
            },
            {
                id: 'get-gaoxiao-video',
                name: '获取搞笑视频',
                method: 'GET',
                icon: 'fas fa-play-circle'
            },
            {
                id: 'get-yingshi-video',
                name: '获取影视视频',
                method: 'GET',
                icon: 'fas fa-film'
            },
            {
                id: 'get-meishi-video',
                name: '获取美食视频',
                method: 'GET',
                icon: 'fas fa-utensils'
            },
            {
                id: 'get-junshi-video',
                name: '获取军事视频',
                method: 'GET',
                icon: 'fas fa-shield-alt'
            },
            {
                id: 'get-dongman-video',
                name: '获取动漫视频',
                method: 'GET',
                icon: 'fas fa-gamepad'
            }
        ]
    },
    {
        id: 'post-apis',
        name: 'POST API',
        icon: 'fas fa-upload',
        items: [
            {
                id: 'post-user-login',
                name: '用户登录',
                method: 'POST',
                icon: 'fas fa-sign-in-alt'
            },
            {
                id: 'post-user-register',
                name: '用户注册',
                method: 'POST',
                icon: 'fas fa-user-plus'
            },
            {
                id: 'post-video-upload',
                name: '视频上传',
                method: 'POST',
                icon: 'fas fa-cloud-upload-alt'
            },
            {
                id: 'post-comment-add',
                name: '添加评论',
                method: 'POST',
                icon: 'fas fa-comment'
            },
            {
                id: 'post-video-like',
                name: '点赞视频',
                method: 'POST',
                icon: 'fas fa-heart'
            }
        ]
    },
    {
        id: 'other-apis',
        name: '其他API',
        icon: 'fas fa-cogs',
        items: [
            {
                id: 'put-user-update',
                name: '更新用户信息',
                method: 'PUT',
                icon: 'fas fa-user-edit'
            },
            {
                id: 'delete-user',
                name: '删除用户',
                method: 'DELETE',
                icon: 'fas fa-user-minus'
            },
            {
                id: 'get-statistics',
                name: '获取统计数据',
                method: 'GET',
                icon: 'fas fa-chart-bar'
            }
        ]
    }
];

// 工具栏配置数据
const toolbarConfig = [
    { name: '技术文档', link: 'https://www.w3school.com.cn/html/index.asp' },
    { name: '在线编辑器', link: 'https://codepen.io' },
    { name: 'API测试工具', link: 'https://www.postman.com' },
    { name: 'curl转化', link: 'https://tool.tushuoit.com/curlconverter/index.html' }
];

// API模拟数据
const apiData = {
    'get-all-video': {
        title: '获取全部视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getAllVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码，从1开始', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页数据条数', defaultValue: '10', example: '10' }
        ],
        code: {
            jquery: `// 获取全部视频 - jQuery示例
var settings = {
   "url": "course/getVideo.json?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            fetch: `// 获取全部视频 - Fetch示例
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("course/getVideo.json?page=1&size=10", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`,
            axios: `// 获取全部视频 - Axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: 'course/getVideo.json?page=1&size=10',
   headers: { }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})`,
            python: `# 获取全部视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("")
payload = ''
headers = {}
conn.request("GET", "course/getVideo.json?page=1&size=10", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "这段相声绝了！张鹤伦梗多实力强！",
                "userName": "小小小太阳哦",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            },
            {
                "title": ""监控下的离谱瞬间"我是万万不敢相信啊！",
                "userName": "剧讲日常",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 60,
            "totalPages": 6
        }
    }
}`,
        prevText: '首页',
        nextText: '获取搞笑视频'
    },
    'get-gaoxiao-video': {
        title: '获取搞笑视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getGaoXiaoVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码，从1开始', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页数据条数', defaultValue: '10', example: '10' }
        ],
        code: {
            jquery: `// 获取搞笑视频 - jQuery示例
var settings = {
   "url": "course/getHaokanVideos.json?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            fetch: `// 获取搞笑视频 - Fetch示例
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("course/getHaokanVideos.json?page=1&size=10", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`,
            axios: `// 获取搞笑视频 - Axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: 'course/getHaokanVideos.json?page=1&size=10',
   headers: { }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})`,
            python: `# 获取搞笑视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("")
payload = ''
headers = {}
conn.request("GET", "course/getHaokanVideos.json?page=1&size=10", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "这段相声绝了！张鹤伦梗多实力强！",
                "userName": "小小小太阳哦",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 60,
            "totalPages": 6
        }
    }
}`,
        prevText: '获取全部视频',
        nextText: '获取影视视频'
    },
    'get-yingshi-video': {
        title: '获取影视视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getYingShiVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页条数', defaultValue: '10', example: '10' }
        ],
        code: {
            fetch: `// 获取影视视频 - Fetch示例
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("/getYingShiVideos?page=1&size=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));`,
            jquery: `// 获取影视视频 - jQuery示例
var settings = {
   "url": "/getYingShiVideos?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            axios: `// 获取影视视频 - Axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: '/getYingShiVideos?page=1&size=10',
   headers: { }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });`,
            python: `# 获取影视视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("")
payload = ''
headers = {}
conn.request("GET", "/getYingShiVideos?page=1&size=10", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "《流浪地球2》精彩片段",
                "userName": "电影推荐官",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 45,
            "totalPages": 5
        }
    }
}`,
        prevText: '获取搞笑视频',
        nextText: '获取美食视频'
    },
    'get-meishi-video': {
        title: '获取美食视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getMeiShiVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页条数', defaultValue: '10', example: '10' }
        ],
        code: {
            fetch: `// 获取美食视频 - fetch示例
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("/getMeiShiVideos?page=1&size=10", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`,
            jquery: `// 获取美食视频 - jQuery示例
var settings = {
   "url": "/getMeiShiVideos?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            axios: `// 获取美食视频 - axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: '/getMeiShiVideos?page=1&size=10',
   headers: { }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log(error);
    });`,
            python: `# 获取美食视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("")
payload = ''
headers = {}
conn.request("GET", "/getMeiShiVideos?page=1&size=10", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "正宗川菜制作全过程",
                "userName": "美食达人",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 40,
            "totalPages": 4
        }
    }
}`,
        prevText: '获取影视视频',
        nextText: '获取军事视频'
    },
    'get-junshi-video': {
        title: '获取军事视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getJunShiVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页条数', defaultValue: '10', example: '10' }
        ],
        code: {
            fetch: `// 获取军事视频 - fetch示例
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("/getJunShiVideos?page=1&size=10", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`,
            axios: `// 获取军事视频 - axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: '/getJunShiVideos?page=1&size=10',
   headers: { }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});`,
            jquery: `// 获取军事视频 - jQuery示例
var settings = {
   "url": "/getJunShiVideos?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            python: `# 获取军事视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("")
payload = ''
headers = {}
conn.request("GET", "/getJunShiVideos?page=1&size=10", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "军事演习精彩瞬间",
                "userName": "军迷小张",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 30,
            "totalPages": 3
        }
    }
}`,
        prevText: '获取美食视频',
        nextText: '获取动漫视频'
    },
    'get-dongman-video': {
        title: '获取动漫视频',
        method: 'GET',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/getDongManVideos',
        params: [
            { name: 'page', type: 'Integer', description: '页码', defaultValue: '1', example: '1' },
            { name: 'size', type: 'Integer', description: '每页条数', defaultValue: '10', example: '10' }
        ],
        code: {
            fetch: `// 获取动漫视频 - fetch示例
var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("/getDongManVideos?page=1&size=10", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`,
            axios: `// 获取动漫视频 - axios示例
var axios = require('axios');

var config = {
   method: 'get',
   url: '/getDongManVideos?page=1&size=10',
   headers: { }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});`,
            jquery: `// 获取动漫视频 - jQuery示例
var settings = {
   "url": "/getDongManVideos?page=1&size=10",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});`,
            python: `# 获取动漫视频 - Python示例
import http.client

conn = http.client.HTTPSConnection("");
payload = '';
headers = {}
conn.request("GET", "/getDongManVideos?page=1&size=10", payload, headers);
res = conn.getresponse();
data = res.read();
print(data.decode("utf-8"));`
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "success",
    "data": {
        "videos": [
            {
                "title": "火影忍者最新剧情解读",
                "userName": "动漫爱好者",
                "userPic": "https://avatar.bdstatic.com/it/",
                "playUrl": "https://vd3.bdstatic.com",
                "posterPic": "https://f7.baidu.com/it/u=3357675966,3320378888&fm"
            }
        ],
        "pagination": {
            "currentPage": 1,
            "pageSize": 10,
            "total": 25,
            "totalPages": 3
        }
    }
}`,
        prevText: '获取军事视频',
        nextText: '用户登录'
    },
    'post-user-login': {
        title: '用户登录',
        method: 'POST',
        paramDescription: '接口链接：https://m1.apifoxmock.com/m1/7510026-7245733-default/user/login',
        params: [
            { name: 'username', type: 'String', description: '用户名', defaultValue: '无', example: 'admin、user01、test01' },
            { name: 'password', type: 'String', description: '密码', defaultValue: '无', example: '123456、654321' }
        ],
        code: {
            fetch: `// 用户登录 - Fetch示例
var requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'user123',
        password: 'password123',
        remember: true
    }),
    redirect: 'follow'
};

fetch("/user/login", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));`,
            jquery: `// 用户登录 - jQuery示例
var settings = {
    "url": "/user/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
    "data": JSON.stringify({
        "username": "user123",
        "password": "password123",
        "remember": true
    }),
};

$.ajax(settings).done(function (response) {
    console.log(response);
});`,
            axios: `// 用户登录 - Axios示例
axios.post(
    'https://m1.apifoxmock.com/m1/7510026-7245733-default/user/login',
    {
        "username": "admin",
        "password": "123456"
    }
).then(function (response) {
    console.log(JSON.stringify(response.data));
}).catch(function (error) {
    console.log(error);
});`,
            python: `# 用户登录 - Python示例
import http.client
import json

conn = http.client.HTTPSConnection("")
payload = json.dumps({
    "username": "user123",
    "password": "password123",
    "remember": True
})
headers = {
    'Content-Type': 'application/json'
}
conn.request("POST", "/user/login", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
        },
        responseCode: '200 成功',
        responseType: 'application/json',
        responseJson: `{
    "code": 200,
    "message": "登录成功",
    "data": {
        "userId": "123456",
        "username": "user123",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "expiresIn": 3600
    }
}`,
        prevText: '获取动漫视频',
        nextText: '用户注册'
    }
};

// 默认API数据
const defaultApiData = {
    title: 'API文档',
    method: 'POST',
    paramDescription: '接口链接：待开发',
    params: [],
    code: {
        fetch: '// 请选择一个API查看代码示例',
        jquery: '// 请选择一个API查看代码示例',
        axios: '// 请选择一个API查看代码示例',
        python: '# 请选择一个API查看代码示例'
    },
    responseCode: '200 成功',
    responseType: 'application/json',
    responseJson: '{\n  "message": "请选择一个API查看响应示例"\n}',
    prevText: '首页',
    nextText: '下一个'
};
