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
    window.location.href = listUrl;
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

/* 搜索功能（通用） */
function initSearch(){
    var searchInput = document.getElementById("searchInput");
    var searchBtn = document.querySelector(".search-btn");
    if(searchInput && searchBtn){
        searchBtn.addEventListener("click",function(){
            var keyword = searchInput.value.trim();
            var cards = document.querySelectorAll(".card");
            cards.forEach(function(card){
                var title = card.querySelector("h3, .card-content h3, .video-title, .tool-name");
                if(title){
                    var text = title.textContent.toLowerCase();
                    if(keyword === "" || text.indexOf(keyword.toLowerCase()) !== -1){
                        card.style.display = "";
                    }else{
                        card.style.display = "none";
                    }
                }
            });
        });

        searchInput.addEventListener("keydown",function(e){
            if(e.key === "Enter"){
                searchBtn.click();
            }
        });
    }
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
