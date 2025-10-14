/**
 * Language Switch System
 * 语言切换系统
 */

// 切换到中文版本
function switchToChinese() {
    window.open('../超充项目网站_1013_bak/index.html', '_self');
}

// 切换到英文版本
function switchToEnglish() {
    window.open('./index_en.html', '_self');
}

// 添加语言切换按钮样式
function addLanguageSwitchStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .language-switch {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            background: rgba(26, 35, 71, 0.9);
            border: 1px solid rgba(0, 119, 192, 0.5);
            border-radius: 25px;
            padding: 8px 16px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .language-switch:hover {
            background: linear-gradient(135deg, #1D428A 0%, #0077C0 100%);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 119, 192, 0.4);
        }

        .language-btn {
            background: none;
            border: none;
            color: #B8C5D6;
            padding: 5px 10px;
            margin: 0 2px;
            cursor: pointer;
            border-radius: 15px;
            transition: all 0.3s ease;
            font-size: 12px;
        }

        .language-btn.active {
            background: rgba(255, 199, 44, 0.2);
            color: #FFC72C;
        }

        .language-btn:hover {
            background: rgba(255, 199, 44, 0.3);
            color: #FFFFFF;
        }
    `;
    document.head.appendChild(style);
}

// 添加语言切换按钮到页面
function addLanguageSwitch() {
    addLanguageSwitchStyles();

    const languageSwitch = document.createElement('div');
    languageSwitch.className = 'language-switch';
    languageSwitch.innerHTML = `
        <button class="language-btn active" onclick="switchToEnglish()">EN</button>
        <button class="language-btn" onclick="switchToChinese()">中文</button>
    `;

    document.body.appendChild(languageSwitch);
}

// 页面加载完成后添加语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否需要添加语言切换
    if (window.location.pathname.includes('_en.html')) {
        addLanguageSwitch();
    }
});

// 导出函数
window.switchToChinese = switchToChinese;
window.switchToEnglish = switchToEnglish;
window.addLanguageSwitch = addLanguageSwitch;

console.log('🌐 语言切换系统已加载');