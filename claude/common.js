// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 返回顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示/隐藏返回顶部按钮
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// 标签页切换
function showTab(tabName) {
    // 隐藏所有标签页内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签页的活动状态
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 显示选中的标签页内容
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // 激活对应的标签页
    event.target.classList.add('active');
}

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// 当DOM加载完成后初始化动画观察器
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}); 