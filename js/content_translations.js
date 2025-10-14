/**
 * Content Translation System
 * 内容翻译系统
 * 面向全球投资者和商用合作伙伴的专业英文翻译
 */

// 商用级内容翻译
const CONTENT_TRANSLATIONS = {
    // 首页和导航内容
    '千站液冷超充项目 - 智能导航中心': 'Thousand-Station Liquid-Cooled Ultra-Fast Charging Project - Intelligent Navigation Center',
    '项目概述': 'Project Overview',
    '技术优势': 'Technical Advantages',
    '市场前景': 'Market Prospects',
    '投资价值': 'Investment Value',
    '联系我们': 'Contact Us',
    '立即咨询': 'Consult Now',
    '了解更多': 'Learn More',

    // 项目介绍
    '项目简介': 'Project Introduction',
    '核心优势': 'Core Advantages',
    '技术实力': 'Technical Strength',
    '商业模式': 'Business Model',
    '投资回报': 'Return on Investment',

    // 技术相关
    '液冷超充技术': 'Liquid-Cooled Ultra-Fast Charging Technology',
    '600kW超级快充': '600kW Ultra-Fast Charging',
    '充电速度提升300%': '300% Faster Charging Speed',
    '转换效率高达96%': 'Up to 96% Conversion Efficiency',
    '智能温控系统': 'Intelligent Temperature Control System',
    '多重安全保护': 'Multiple Safety Protections',

    // 市场分析
    '新能源汽车市场': 'New Energy Vehicle Market',
    '充电基础设施建设': 'Charging Infrastructure Construction',
    '市场需求分析': 'Market Demand Analysis',
    '竞争优势': 'Competitive Advantages',
    '发展前景': 'Development Prospects',

    // 财务数据
    '投资规模': 'Investment Scale',
    '预期收益': 'Expected Returns',
    '投资回收期': 'Payback Period',
    '内部收益率': 'Internal Rate of Return',
    '净现值': 'Net Present Value',
    '现金流分析': 'Cash Flow Analysis',

    // 项目实施
    '实施计划': 'Implementation Plan',
    '建设周期': 'Construction Period',
    '运营模式': 'Operating Model',
    '管理团队': 'Management Team',
    '风险控制': 'Risk Management',

    // 联系信息
    '商务合作': 'Business Cooperation',
    '技术支持': 'Technical Support',
    '媒体联系': 'Media Contact',
    '投资者关系': 'Investor Relations',

    // 按钮和行动号召
    '立即投资': 'Invest Now',
    '下载白皮书': 'Download White Paper',
    '预约演示': 'Schedule Demo',
    '获取报价': 'Get Quote',
    '联系我们': 'Contact Us',
    '了解更多': 'Learn More',
    '返回首页': 'Back to Home',

    // 页面标题
    '项目摘要': 'Project Executive Summary',
    '技术方案': 'Technical Solution',
    '市场分析': 'Market Analysis',
    '财务分析': 'Financial Analysis',
    '实施计划': 'Implementation Plan',
    '商业计划书': 'Business Plan',
    '投资者版本': 'Investor Version',

    // 状态信息
    '加载中': 'Loading',
    '请稍候': 'Please Wait',
    '操作成功': 'Operation Successful',
    '操作失败': 'Operation Failed',
    '网络错误': 'Network Error',
    '服务器错误': 'Server Error',

    // 表单字段
    '姓名': 'Name',
    '公司': 'Company',
    '职位': 'Position',
    '邮箱': 'Email',
    '电话': 'Phone',
    '留言': 'Message',
    '提交': 'Submit',
    '重置': 'Reset',

    // 时间相关
    '今天': 'Today',
    '昨天': 'Yesterday',
    '本周': 'This Week',
    '本月': 'This Month',
    '本年': 'This Year',
    '近期': 'Recently',
    '即将推出': 'Coming Soon',

    // 评价和反馈
    '客户评价': 'Customer Reviews',
    '成功案例': 'Success Stories',
    '合作伙伴': 'Partners',
    '行业认可': 'Industry Recognition',
    '荣誉证书': 'Certificates',

    // 技术规格
    '充电功率': 'Charging Power',
    '充电时间': 'Charging Time',
    '充电效率': 'Charging Efficiency',
    '设备规格': 'Equipment Specifications',
    '技术参数': 'Technical Parameters',
    '性能指标': 'Performance Indicators',

    // 服务承诺
    '服务质量': 'Service Quality',
    '售后支持': 'After-Sales Support',
    '技术培训': 'Technical Training',
    '维护保养': 'Maintenance Service',
    '紧急响应': 'Emergency Response',
    '24小时服务': '24-Hour Service',

    // 安全保障
    '安全标准': 'Safety Standards',
    '质量认证': 'Quality Certification',
    '环保认证': 'Environmental Certification',
    '安全防护': 'Safety Protection',
    '数据安全': 'Data Security',
    '隐私保护': 'Privacy Protection'
};

// 专业级内容翻译函数 - 考虑语境和商用英语习惯
function translateContent(text, context = '') {
    if (!text) return text;

    // 首先进行术语翻译
    let translatedText = translateTerminology ? translateTerminology(text) : text;

    // 然后进行内容翻译
    Object.keys(CONTENT_TRANSLATIONS).forEach(chineseText => {
        const englishText = CONTENT_TRANSLATIONS[chineseText];
        // 精确匹配翻译
        if (translatedText === chineseText) {
            translatedText = englishText;
        } else {
            // 部分匹配翻译
            const regex = new RegExp(chineseText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            translatedText = translatedText.replace(regex, englishText);
        }
    });

    return translatedText;
}

// 智能段落翻译 - 针对长段落内容
function translateParagraph(paragraph) {
    if (!paragraph || typeof paragraph !== 'string') return paragraph;

    // 商用英语翻译规则
    const commercialRules = {
        // 将中文的被动语态转换为英文的主动语态
        '被设计为': 'designed to',
        '被用于': 'used for',
        '被称为': 'known as',

        // 商业术语标准化
        '打造': 'develop',
        '构建': 'build',
        '打造行业领先': 'establish industry leadership',
        '致力于': 'committed to',
        '专注于': 'focus on',

        // 数据表达标准化
        '超过': 'over',
        '高达': 'up to',
        '将近': 'nearly',
        '大约': 'approximately',
        '预计': 'projected',

        // 时间表达
        '近年来': 'in recent years',
        '未来几年': 'in the coming years',
        '目前': 'currently',
        '现在': 'now',

        // 连接词
        '并且': 'and',
        '而且': 'furthermore',
        '因此': 'therefore',
        '所以': 'so',
        '但是': 'however',
        '同时': 'meanwhile'
    };

    let translatedParagraph = paragraph;

    // 应用商业翻译规则
    Object.keys(commercialRules).forEach(chineseRule => {
        const englishRule = commercialRules[chineseRule];
        const regex = new RegExp(chineseRule, 'g');
        translatedParagraph = translatedParagraph.replace(regex, englishRule);
    });

    // 应用术语和内容翻译
    translatedParagraph = translateContent(translatedParagraph);

    return translatedParagraph;
}

// 翻译页面中的所有内容
function translatePage() {
    console.log('🌐 开始翻译页面内容...');

    // 翻译页面标题
    if (document.title) {
        document.title = translateContent(document.title);
    }

    // 翻译meta标签
    document.querySelectorAll('meta[name="description"], meta[name="keywords"]').forEach(meta => {
        if (meta.content) {
            meta.content = translateContent(meta.content);
        }
    });

    // 翻译所有文本节点
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // 跳过script和style标签内的内容
                const parent = node.parentElement;
                if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        },
        false
    );

    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim()) {
            textNodes.push(node);
        }
    }

    // 翻译每个文本节点
    textNodes.forEach(textNode => {
        const originalText = textNode.nodeValue.trim();
        if (originalText) {
            const translatedText = translateParagraph(originalText);
            if (translatedText !== originalText) {
                textNode.nodeValue = translatedText;
            }
        }
    });

    // 翻译placeholder属性
    document.querySelectorAll('[placeholder]').forEach(element => {
        if (element.placeholder) {
            element.placeholder = translateContent(element.placeholder);
        }
    });

    // 翻译alt属性
    document.querySelectorAll('[alt]').forEach(element => {
        if (element.alt) {
            element.alt = translateContent(element.alt);
        }
    });

    console.log('✅ 页面内容翻译完成');
}

// 导出翻译函数
window.CONTENT_TRANSLATIONS = CONTENT_TRANSLATIONS;
window.translateContent = translateContent;
window.translateParagraph = translateParagraph;
window.translatePage = translatePage;

console.log('📚 内容翻译系统已加载，共加载', Object.keys(CONTENT_TRANSLATIONS).length, '个内容条目');