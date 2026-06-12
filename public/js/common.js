/* ================= 公共 JavaScript ================= */

/* 检测是否为主页 */
function isHomePage(){
    return document.getElementById("intro") !== null || document.getElementById("mainPage") !== null;
}

/* 开场动画 - 只有主页显示 */
function initIntroAnimation(){
    if(!isHomePage()) return;
    
    const isReturning = sessionStorage.getItem('isReturningFromOtherPage');
    const intro = document.getElementById("intro");
    const mainPage = document.getElementById("mainPage");
    
    if(isReturning){
        if(intro) intro.style.display = "none";
        if(mainPage){
            mainPage.style.display = "";
            mainPage.style.opacity = "1";
            mainPage.style.animation = "none";
        }
        sessionStorage.removeItem('isReturningFromOtherPage');
    }else{
        if(intro) intro.classList.add("active");
    }
}

document.addEventListener("DOMContentLoaded",function(){
    initIntroAnimation();

    if(isHomePage()){
        window.addEventListener("load",function(){
            const big = document.querySelector(".avatar-big");
            const target = document.getElementById("targetAvatar");
            if(big && target){
                setTimeout(function(){
                    const rect = target.getBoundingClientRect();
                    big.style.width = "88px";
                    big.style.height = "88px";
                    big.style.left = rect.left + rect.width / 2 + "px";
                    big.style.top = rect.top + rect.height / 2 + "px";
                    big.style.transform = "translate(-50%,-50%)";
                },300);
            }
        });
    }
});

/* 语言切换功能 */
function switchLanguage(lang){
    var elements = document.querySelectorAll("[data-cn]");
    elements.forEach(function(el){
        if(lang === "en"){
            if(el.textContent !== undefined){
                el.textContent = el.getAttribute("data-en");
            }else{
                el.innerHTML = el.getAttribute("data-en");
            }
        }else{
            if(el.textContent !== undefined){
                el.textContent = el.getAttribute("data-cn");
            }else{
                el.innerHTML = el.getAttribute("data-cn");
            }
        }
    });

    var langText = document.querySelector(".lang-text");
    if(langText){
        langText.textContent = lang === "en" ? "English" : "简体中文";
    }

    var searchInput = document.getElementById("searchInput");
    if(searchInput){
        searchInput.placeholder = lang === "en" ? "Search..." : "搜索...";
    }
}

/* 页面跳转 */
function navigateTo(url){
    window.location.href = url;
}

/* 返回主页（不显示动画） */
function goBackToHome(){
    sessionStorage.setItem('isReturningFromOtherPage', 'true');
    window.location.href = '/';
}

/* 返回列表页（不显示动画） */
function goBackToList(listUrl){
    sessionStorage.setItem('isReturningFromOtherPage', 'true');
    const page = sessionStorage.getItem('articleListPage');
    if (page) {
        window.location.href = `${listUrl}?page=${page}`;
    } else {
        window.location.href = listUrl;
    }
}

/* 滚动到顶部 */
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* 滚动到底部 */
function scrollToBottom(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

/* 搜索功能（增强版 - 支持正则） */
function initSearch(){
    var searchInput = document.getElementById("searchInput");
    var searchBtn = document.querySelector(".search-btn");
    if(!searchInput || !searchBtn) return;

    /* 获取所有卡片数据 */
    var cards = document.querySelectorAll(".card, .video-card");
    var allData = [];
    
    cards.forEach(function(card){
        var titleEl = card.querySelector("h3, .card-content h3, .video-title, .tool-name");
        if(titleEl){
            allData.push({
                element: card,
                title: titleEl.textContent,
                slug: card.dataset.slug || ""
            });
        }
    });

    /* 搜索函数 */
    function performSearch(){
        var keyword = searchInput.value.trim();
        var foundCount = 0;

        if(keyword === ""){
            /* 清空搜索，显示所有 */
            cards.forEach(function(card){
                card.style.display = "";
            });
            removeNoResult();
            return;
        }

        /* 使用正则表达式匹配 */
        try{
            var regex = new RegExp(keyword, "i"); /* 忽略大小写 */
        }catch(e){
            /* 如果正则不合法，使用普通匹配 */
            regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        }

        cards.forEach(function(card){
            var titleEl = card.querySelector("h3, .card-content h3, .video-title, .tool-name");
            if(titleEl){
                var text = titleEl.textContent;
                if(regex.test(text)){
                    card.style.display = "";
                    foundCount++;
                }else{
                    card.style.display = "none";
                }
            }
        });

        /* 处理无结果情况 */
        if(foundCount === 0){
            showNoResult();
        }else{
            removeNoResult();
        }
    }

    /* 显示无结果提示 */
    function showNoResult(){
        removeNoResult();
        var grid = document.querySelector(".article-grid, .tool-grid, .video-grid");
        if(grid){
            var noResultDiv = document.createElement("div");
            noResultDiv.className = "no-result";
            noResultDiv.innerHTML = '<div class="no-result-content">' +
                '<img src="https://picsum.photos/300/200?search-empty" alt="没有找到">' +
                '<p>没有找到对应的文件~(´・ω・`)</p>' +
                '</div>';
            grid.appendChild(noResultDiv);
        }
    }

    /* 移除无结果提示 */
    function removeNoResult(){
        var existing = document.querySelector(".no-result");
        if(existing) existing.remove();
    }

    /* 绑定事件 */
    searchBtn.addEventListener("click", performSearch);

    searchInput.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            performSearch();
        }
    });

    /* 输入时实时搜索 */
    searchInput.addEventListener("input", performSearch);
}

/* 分页功能 */
function initPagination(){
    var pages = document.querySelectorAll(".page");
    pages.forEach(function(page){
        page.addEventListener("click",function(){
            if(this.textContent === "<" || this.textContent === ">"){
                return;
            }
            pages.forEach(function(p){
                p.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
}

/* 页面加载完成后初始化 */
document.addEventListener("DOMContentLoaded",function(){
    initSearch();
    initPagination();
});
