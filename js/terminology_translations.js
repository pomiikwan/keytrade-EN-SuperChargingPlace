/**
 * Professional Terminology Translation System
 * 专业术语翻译系统
 * 千站液冷超充项目英文版
 * Target: Global Investors and Commercial Partners
 */

// 专业术语翻译对照表
const TERMINOLOGY_TRANSLATIONS = {
    // 项目核心术语
    '千站液冷超充项目': 'Thousand-Station Liquid-Cooled Ultra-Fast Charging Project',
    '超充': 'Ultra-Fast Charging',
    '液冷超充': 'Liquid-Cooled Ultra-Fast Charging',
    '充电桩': 'Charging Pile',
    '充电站': 'Charging Station',
    '快充': 'Fast Charging',
    '超快充': 'Ultra-Fast Charging',

    // 技术术语
    '液冷技术': 'Liquid-Cooling Technology',
    '散热系统': 'Cooling System',
    '功率': 'Power',
    '充电功率': 'Charging Power',
    '转换效率': 'Conversion Efficiency',
    '充电速度': 'Charging Speed',
    '充电容量': 'Charging Capacity',
    '电池技术': 'Battery Technology',
    '智能电网': 'Smart Grid',
    '能源管理': 'Energy Management',

    // 商业术语
    '商业模式': 'Business Model',
    '投资回报': 'Return on Investment (ROI)',
    '投资回收期': 'Payback Period',
    '净现值': 'Net Present Value (NPV)',
    '内部收益率': 'Internal Rate of Return (IRR)',
    '现金流': 'Cash Flow',
    '营业收入': 'Revenue',
    '利润': 'Profit',
    '成本': 'Cost',
    '市场规模': 'Market Size',
    '市场份额': 'Market Share',

    // 项目管理术语
    '项目实施': 'Project Implementation',
    '建设周期': 'Construction Period',
    '运营管理': 'Operations Management',
    '风险控制': 'Risk Management',
    '质量控制': 'Quality Control',
    '供应链': 'Supply Chain',
    '合作伙伴': 'Partners',
    '供应商': 'Suppliers',

    // 地理位置术语
    '高速公路': 'Highway',
    '服务区': 'Service Area',
    '城市核心': 'Urban Core',
    '商业中心': 'Commercial Center',
    '产业园区': 'Industrial Park',
    '物流枢纽': 'Logistics Hub',
    '停车设施': 'Parking Facilities',

    // 技术规格
    '600kW': '600kW',
    '直流快充': 'DC Fast Charging',
    '交流充电': 'AC Charging',
    '充电接口': 'Charging Interface',
    '充电标准': 'Charging Standard',
    '兼容性': 'Compatibility',
    '安全性': 'Safety',
    '可靠性': 'Reliability',

    // 环保术语
    '新能源': 'New Energy',
    '清洁能源': 'Clean Energy',
    '碳中和': 'Carbon Neutrality',
    '节能减排': 'Energy Conservation and Emission Reduction',
    '可持续发展': 'Sustainable Development',
    '绿色出行': 'Green Mobility',

    // 数字化术语
    '智能化': 'Intelligent',
    '数字化': 'Digitalization',
    '物联网': 'Internet of Things (IoT)',
    '大数据': 'Big Data',
    '云计算': 'Cloud Computing',
    '人工智能': 'Artificial Intelligence (AI)',
    '移动支付': 'Mobile Payment',
    'APP': 'Application',

    // 财务术语
    '总投资': 'Total Investment',
    '融资': 'Financing',
    '资金': 'Capital',
    '预算': 'Budget',
    '收益': 'Return',
    '分红': 'Dividend',
    '股权': 'Equity',
    '估值': 'Valuation',

    // 法律合规术语
    '合规': 'Compliance',
    '监管': 'Regulation',
    '标准': 'Standards',
    '认证': 'Certification',
    '专利': 'Patent',
    '知识产权': 'Intellectual Property',

    // 时间相关
    '年': 'Year',
    '月': 'Month',
    '季度': 'Quarter',
    '小时': 'Hour',
    '分钟': 'Minute',
    '秒': 'Second',
    '实时': 'Real-time',
    '24/7': '24/7',

    // 数据单位
    'kW': 'kW',
    'kWh': 'kWh',
    'V': 'V',
    'A': 'A',
    'MHz': 'MHz',
    'GB': 'GB',
    'MB': 'MB',
    'km': 'km',
    'm': 'm',

    // 常用形容词
    '智能': 'Smart',
    '高效': 'Efficient',
    '环保': 'Eco-friendly',
    '创新': 'Innovative',
    '可靠': 'Reliable',
    '安全': 'Safe',
    '便捷': 'Convenient',
    '快速': 'Fast',
    '稳定': 'Stable',
    '优质': 'High-quality',
    '先进': 'Advanced',
    '现代化': 'Modern',
    '国际化': 'International',

    // 业务动作
    '投资': 'Invest',
    '建设': 'Construct',
    '运营': 'Operate',
    '管理': 'Manage',
    '服务': 'Service',
    '支持': 'Support',
    '提供': 'Provide',
    '开发': 'Develop',
    '部署': 'Deploy',
    '维护': 'Maintain',
    '升级': 'Upgrade',

    // 导航和界面
    '首页': 'Home',
    '关于我们': 'About Us',
    '产品服务': 'Products & Services',
    '解决方案': 'Solutions',
    '新闻动态': 'News',
    '联系我们': 'Contact Us',
    '登录': 'Login',
    '注册': 'Register',
    '搜索': 'Search',
    '菜单': 'Menu'
};

// 动态翻译函数
function translateTerminology(text) {
    if (!text) return text;

    let translatedText = text;

    // 按照术语长度从长到短排序，避免短词覆盖长词
    const sortedTerms = Object.keys(TERMINOLOGY_TRANSLATIONS)
        .sort((a, b) => b.length - a.length);

    sortedTerms.forEach(chineseTerm => {
        const englishTerm = TERMINOLOGY_TRANSLATIONS[chineseTerm];
        // 使用正则表达式进行全局替换，支持词语边界
        const regex = new RegExp(chineseTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        translatedText = translatedText.replace(regex, englishTerm);
    });

    return translatedText;
}

// 页面加载完成后应用翻译
document.addEventListener('DOMContentLoaded', function() {
    // 翻译页面标题
    document.title = translateTerminology(document.title);

    // 翻译所有文本内容
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.trim()) {
            const originalText = node.nodeValue;
            const translatedText = translateTerminology(originalText);
            if (translatedText !== originalText) {
                node.nodeValue = translatedText;
            }
        }
    }
});

// 导出翻译函数供其他脚本使用
window.TERMINOLOGY_TRANSLATIONS = TERMINOLOGY_TRANSLATIONS;
window.translateTerminology = translateTerminology;

console.log('🌐 专业术语翻译系统已加载，共加载', Object.keys(TERMINOLOGY_TRANSLATIONS).length, '个术语');