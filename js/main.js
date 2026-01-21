// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function () {
    // 生成导航栏
    generateNavigation();

    // 生成侧边栏
    generateSidebar();

    // 生成文章列表（默认显示最近发布的6篇文章）
    generateArticlesList(6);

    // 生成页脚
    generateFooter();
});

// 生成导航栏
function generateNavigation() {
    const navElement = document.getElementById('mainNav');

    // 判断当前页面是否在pages目录下
    const isInPagesDir = window.location.pathname.includes('/pages/') ||
        window.location.pathname.toLowerCase().indexOf('pages') !== -1;

    let navHTML = `
        <div class="nav-container">
            <a href="${isInPagesDir ? '../index.html' : 'index.html'}" class="logo">
                <img src="${isInPagesDir ? '../image/logo.png' : 'image/logo.png'}" alt="Logo" class="logo-img">
                <span class="logo-text">${websiteInfo.title}</span>
            </a>
            <ul class="nav-links">
    `;

    navItems.forEach(item => {
        // 根据当前页面位置动态调整链接路径
        let finalUrl = item.url;

        // 如果当前在pages目录下，需要给所有链接加上../前缀
        if (isInPagesDir) {
            if (item.url.startsWith('pages/')) {
                finalUrl = '../' + item.url;
            } else if (item.url === 'index.html') {
                finalUrl = '../index.html';
            }
        }

        navHTML += `<li><a href="${finalUrl}">${item.name}</a></li>`;
    });

    navHTML += `
            </ul>
        </div>
    `;

    navElement.innerHTML = navHTML;
}

// 生成侧边栏
function generateSidebar() {
    const sidebarElement = document.getElementById('sidebar');

    // 搜索框
    let sidebarHTML = `
        <div class="search-box">
            <input type="text" id="searchInput" placeholder="搜索文章...">
        </div>
    `;

    // 文章分类
    sidebarHTML += `
        <div class="sidebar-section">
            <h3>文章分类</h3>
            <ul class="sidebar-list">
    `;

    categories.forEach(category => {
        sidebarHTML += `
            <li>
                <a href="#" onclick="filterByCategory('${category.name}')">${category.name} <span class="badge">(${category.count})</span></a>
            </li>
        `;
    });

    sidebarHTML += `
            </ul>
        </div>
    `;

    // 标签云
    sidebarHTML += `
        <div class="sidebar-section">
            <h3>热门标签</h3>
            <div class="tags-cloud">
    `;

    tags.slice(0, 12).forEach(tag => {
        sidebarHTML += `<a href="#" class="tag" onclick="filterByTag('${tag}')">${tag}</a> `;
    });

    sidebarHTML += `
            </div>
        </div>
    `;

    // 友情链接
    sidebarHTML += `
        <div class="sidebar-section">
            <h3>友情链接</h3>
            <ul class="sidebar-list">
    `;

    links.forEach(link => {
        sidebarHTML += `
            <li>
                <a href="${link.url}" target="_blank">${link.name}</a>
            </li>
        `;
    });

    sidebarHTML += `
            </ul>
        </div>
    `;

    sidebarElement.innerHTML = sidebarHTML;

    // 绑定搜索功能
    bindSearchEvent();
}

// 绑定搜索事件
function bindSearchEvent() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        filterArticles(searchTerm);
    });
}

// 按分类过滤文章
function filterByCategory(category) {
    const filteredArticles = articles.filter(article => article.category === category);
    displayArticles(filteredArticles);
}

// 按标签过滤文章
function filterByTag(tag) {
    const filteredArticles = articles.filter(article => article.tags.includes(tag));
    displayArticles(filteredArticles);
}

// 过滤文章
function filterArticles(searchTerm) {
    let filteredArticles = articles;
    if (searchTerm) {
        filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    displayArticles(filteredArticles);
}

// 生成文章列表
function generateArticlesList(limit) {
    let sortedArticles = [...articles]; // 复制数组

    // 按日期排序，最新的在前面
    sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 如果有limit参数，则只取前limit篇文章
    if (limit && limit > 0) {
        sortedArticles = sortedArticles.slice(0, limit);
    }

    displayArticles(sortedArticles);
}

// 显示文章列表
function displayArticles(articlesToShow) {
    const articlesListElement = document.getElementById('articlesList');

    if (articlesToShow.length === 0) {
        articlesListElement.innerHTML = '<p>没有找到相关的文章</p>';
        return;
    }

    let articlesHTML = '';

    articlesToShow.forEach(article => {
        // 判断当前页面是否在pages目录下，以决定文章详情链接的路径
        const isInPagesDir = window.location.pathname.includes('/pages/');
        const articleDetailLink = isInPagesDir ?
            'article-detail.html?id=' + article.id :
            'pages/article-detail.html?id=' + article.id;

        articlesHTML += `
            <article class="article-card">
                <h2 class="article-title">
                    <a href="${articleDetailLink}">${article.title}</a>
                </h2>
                <div class="article-meta">
                    <span class="article-author">作者: ${article.author}</span>
                    <span class="article-date">日期: ${article.date}</span>
                    <span class="article-category">分类: ${article.category}</span>
                </div>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-tags">
        `;

        article.tags.forEach(tag => {
            articlesHTML += `<span class="tag">${tag}</span>`;
        });

        articlesHTML += `
                </div>
            </article>
        `;
    });

    articlesListElement.innerHTML = articlesHTML;
}

// 显示文章详情
function showArticleDetail(articleId) {
    const article = articles.find(a => a.id === articleId);

    if (!article) {
        document.getElementById('articleDetail').innerHTML = '<p>文章不存在</p>';
        return;
    }

    // 更新页面标题
    document.getElementById('pageTitle').textContent = `${article.title} - 小白爱分享`;

    // 构建文章详情HTML
    let detailHTML = `
        <h1 class="article-title">${article.title}</h1>
        <div class="article-meta">
            <span class="article-author">作者: ${article.author}</span>
            <span class="article-date">日期: ${article.date}</span>
            <span class="article-category">分类: ${article.category}</span>
        </div>
        <div class="article-content">
            <p>${article.content}</p>
        </div>
        <div class="article-tags">
    `;

    article.tags.forEach(tag => {
        detailHTML += `<span class="tag">${tag}</span>`;
    });

    detailHTML += `
        </div>
    `;

    document.getElementById('articleDetail').innerHTML = detailHTML;
}

// 生成页脚
function generateFooter() {
    const footerElement = document.getElementById('mainFooter');
    const currentYear = new Date().getFullYear();

    footerElement.innerHTML = `
        <p>&copy; ${currentYear} ${websiteInfo.title} - ${websiteInfo.subtitle}. 由 ${websiteInfo.author} 创建</p>
    `;
}

// 模拟其他页面的生成函数（这些页面将单独创建）
function generatePageContent(pageName) {
    // 根据页面名称生成不同的内容
    switch (pageName) {
        case 'frontend-api':
            generateFrontendApiPage();
            break;
        case 'categories':
            generateCategoriesPage();
            break;
        case 'tools':
            generateToolsPage();
            break;
        case 'about':
            generateAboutPage();
            break;
        default:
            console.log('Unknown page: ' + pageName);
    }
}

// 生成前端API页面内容
function generateFrontendApiPage() {
    document.body.innerHTML = `
        <nav id="mainNav"></nav>
        <div class="container">
            <main>
                <h1>前端API专题</h1>
                <p>这里整理了常用的前端API文档和示例</p>
                
                <h2>DOM操作API</h2>
                <p>DOM（文档对象模型）API允许我们以编程方式访问和操作HTML文档的内容和结构。</p>
                
                <h2>Canvas API</h2>
                <p>Canvas API提供了动态绘制图形、图像和动画的功能。</p>
                
                <h2>Web Storage API</h2>
                <p>Web Storage API提供了localStorage和sessionStorage，用于在客户端存储数据。</p>
                
                <h2>Fetch API</h2>
                <p>Fetch API提供了一个接口来获取资源（包括跨域），并返回Promise。</p>
            </main>
            <aside id="sidebar"></aside>
        </div>
        <footer id="mainFooter"></footer>
        
        <script src="../js/data.js"><\/script>
        <script src="../js/main.js"><\/script>
    `;
    generateNavigation();
    generateSidebar();
    generateFooter();
}

// 生成技术分类页面内容
function generateCategoriesPage() {
    document.body.innerHTML = `
        <nav id="mainNav"></nav>
        <div class="container">
            <main>
                <h1>技术分类</h1>
                <p>按技术领域分类的文章列表</p>
                
                <div class="categories-grid">
    `;

    categories.forEach(category => {
        document.querySelector('main').innerHTML += `
            <div class="category-item">
                <h3>${category.name}</h3>
                <p>文章数量: ${category.count}</p>
            </div>
        `;
    });

    document.querySelector('main').innerHTML += `
                </div>
            </main>
            <aside id="sidebar"></aside>
        </div>
        <footer id="mainFooter"></footer>
        
        <script src="../js/data.js"><\/script>
        <script src="../js/main.js"><\/script>
    `;
    generateNavigation();
    generateSidebar();
    generateFooter();
}

// 生成在线工具页面内容
function generateToolsPage() {
    document.body.innerHTML = `
        <nav id="mainNav"></nav>
        <div class="container">
            <main>
                <h1>在线工具</h1>
                <p>为开发者准备的实用工具集合</p>
                
                <h2>JSON格式化工具</h2>
                <textarea placeholder="请输入JSON数据..."></textarea>
                <button>格式化</button>
                
                <h2>CSS压缩工具</h2>
                <textarea placeholder="请输入CSS代码..."></textarea>
                <button>压缩</button>
                
                <h2>Base64编码/解码工具</h2>
                <textarea placeholder="请输入待处理的文本..."></textarea>
                <button>编码</button>
                <button>解码</button>
            </main>
            <aside id="sidebar"></aside>
        </div>
        <footer id="mainFooter"></footer>
        
        <script src="../js/data.js"><\/script>
        <script src="../js/main.js"><\/script>
    `;
    generateNavigation();
    generateSidebar();
    generateFooter();
}

// 生成关于我们页面内容
function generateAboutPage() {
    document.body.innerHTML = `
        <nav id="mainNav"></nav>
        <div class="container">
            <main>
                <h1>关于我们</h1>
                <p>欢迎来到 ${websiteInfo.title}！</p>
                <p>本站由博主 "${websiteInfo.author}" 创建，致力于分享前端技术知识和实践经验。</p>
                
                <h2>我们的使命</h2>
                <p>帮助更多开发者掌握前端技术，解决开发中的难题，共同成长进步。</p>
                
                <h2>联系方式</h2>
                <p>邮箱: admin@example.com</p>
                <p>微信: xiaobai_aifenxiang</p>
            </main>
            <aside id="sidebar"></aside>
        </div>
        <footer id="mainFooter"></footer>
        
        <script src="../js/data.js"><\/script>
        <script src="../js/main.js"><\/script>
    `;
    generateNavigation();
    generateSidebar();
    generateFooter();
}