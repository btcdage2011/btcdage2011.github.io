/* ===========================================================
  BTCDAGE 内容登记簿（只需维护本文件）
  每新增一篇文章：
    1. 将独立 HTML 放入 articles/，复制现有文章作模板；
    2. 在 ARTICLES 数组顶部增加一条：
       { id: 'unique-id', title: '文章标题', date: '2026-11-02', url: 'articles/新文章.html', category: '文集' },
  每新增一份 PDF：
    1. 上传到 pdf/ 文件夹；
    2. 在 PDF_DOCS 数组顶部增加一条：
       { title: '文档标题', file: 'pdf/文件名.pdf', category: '文档' },
  如要保留独立旧阅读页面，可额外填写 page: '页面名.html'。
  注意：不要删除或更改旧 article-0 ... article-35 的 id；
       它们负责兼容过去共享出去的 #article-N 链接。
  整个系统没有 fetch 请求，不需要数据库或打包构建。
  =========================================================== */
window.BTCDAGE_CONTENT = {
  ARTICLES: [
    {"id": "article-38", "title": "正本清源：我为什么反对 Core 30 放开 OP_RETURN 限制", "date": "2026-08-13", "url": "articles/article-40.html", "category": "文集"},
    {"id": "article-39", "title": "高考满分作文", "date": "2026-06-08", "url": "articles/article-39.html", "category": "文集"},
    {"id": "article-38", "title": "主权个人VS子宫和选票", "date": "2025-12-14", "url": "articles/article-38.html", "category": "文集"},
    {"id": "article-37", "title": "井、账本与内裤", "date": "2025-10-16", "url": "articles/article-37.html", "category": "文集"},
    {"id": "article-36", "title": "一厢情愿的“害减”策略", "date": "2025-09-13", "url": "articles/article-36.html", "category": "文集"},
    {"id": "article-0", "title": "月入3000，如何囤币养老？", "date": "2025-07-21", "url": "articles/article-00.html", "category": "文集"},
    {"id": "article-1", "title": "养老，交社保还是囤比特币？", "date": "2025-07-21", "url": "articles/article-01.html", "category": "文集"},
    {"id": "article-2", "title": "认知的分水岭：从以太坊到比特币", "date": "2025-07-17", "url": "articles/article-02.html", "category": "文集"},
    {"id": "article-3", "title": "先想明白，再囤得住", "date": "2025-07-16", "url": "articles/article-03.html", "category": "文集"},
    {"id": "article-4", "title": "反对取消OP_RETURN限制", "date": "2025-05-30", "url": "articles/article-04.html", "category": "文集"},
    {"id": "article-5", "title": "比特币社区派别划分", "date": "2025-05-30", "url": "articles/article-05.html", "category": "文集"},
    {"id": "article-6", "title": "波段还是HODL", "date": "2025-04-20", "url": "articles/article-06.html", "category": "文集"},
    {"id": "article-7", "title": "AI算力需求对比特币的跨界影响", "date": "2024-12-29", "url": "articles/article-07.html", "category": "文集"},
    {"id": "article-8", "title": "对“名人”和“权威”怯魅", "date": "2024-12-16", "url": "articles/article-08.html", "category": "文集"},
    {"id": "article-9", "title": "真正的突破，是思维的觉醒。", "date": "2024-12-16", "url": "articles/article-09.html", "category": "文集"},
    {"id": "article-10", "title": "突破新高就会万人爆仓？", "date": "2024-12-13", "url": "articles/article-10.html", "category": "文集"},
    {"id": "article-11", "title": "《为什么囤比特币是个愚蠢的选择》", "date": "2024-12-12", "url": "articles/article-11.html", "category": "文集"},
    {"id": "article-12", "title": "冲击10万美元", "date": "2024-11-28", "url": "articles/article-12.html", "category": "文集"},
    {"id": "article-14", "title": "放弃高考焦虑，囤比特币迎接未来", "date": "2024-06-13", "url": "articles/article-14.html", "category": "文集"},
    {"id": "article-15", "title": "机遇", "date": "2024-04-03", "url": "articles/article-15.html", "category": "文集"},
    {"id": "article-16", "title": "量子计算会摧毁比特币吗", "date": "2024-03-28", "url": "articles/article-16.html", "category": "文集"},
    {"id": "article-17", "title": "私钥安全启示录高级脑安全性探究", "date": "2024-03-17", "url": "articles/article-17.html", "category": "文集"},
    {"id": "article-18", "title": "高级脑疑问的相关思考", "date": "2024-03-15", "url": "articles/article-18.html", "category": "文集"},
    {"id": "article-19", "title": "定投收益", "date": "2024-03-06", "url": "articles/article-19.html", "category": "文集"},
    {"id": "article-20", "title": "XMR的问题", "date": "2023-02-10", "url": "articles/article-20.html", "category": "文集"},
    {"id": "article-21", "title": "饼本位", "date": "2022-01-24", "url": "articles/article-21.html", "category": "文集"},
    {"id": "article-22", "title": "主观价值", "date": "2022-01-14", "url": "articles/article-22.html", "category": "文集"},
    {"id": "article-23", "title": "知道者悖论", "date": "2022-01-09", "url": "articles/article-23.html", "category": "文集"},
    {"id": "article-24", "title": "韭菜三宝", "date": "2021-12-25", "url": "articles/article-24.html", "category": "文集"},
    {"id": "article-25", "title": "不被通胀收割", "date": "2021-12-10", "url": "articles/article-25.html", "category": "文集"},
    {"id": "article-26", "title": "以小博大", "date": "2021-12-06", "url": "articles/article-26.html", "category": "文集"},
    {"id": "article-27", "title": "如何安全囤饼", "date": "2021-11-20", "url": "articles/article-27.html", "category": "文集"},
    {"id": "article-28", "title": "历史选择了比特币", "date": "2021-11-10", "url": "articles/article-28.html", "category": "文集"},
    {"id": "article-29", "title": "比特币风险太大了", "date": "2021-11-09", "url": "articles/article-29.html", "category": "文集"},
    {"id": "article-30", "title": "比特币什么时候卖", "date": "2021-11-04", "url": "articles/article-30.html", "category": "文集"},
    {"id": "article-31", "title": "比特币和黄金", "date": "2021-10-27", "url": "articles/article-31.html", "category": "文集"},
    {"id": "article-32", "title": "比特币的定投策略", "date": "2021-10-22", "url": "articles/article-32.html", "category": "文集"},
    {"id": "article-33", "title": "比特币的抗量子计算特性", "date": "2021-10-12", "url": "articles/article-33.html", "category": "文集"},
    {"id": "article-34", "title": "脑钱包的安全性", "date": "2021-10-06", "url": "articles/article-34.html", "category": "文集"},
    {"id": "article-35", "title": "高抛低吸", "date": "2021-10-03", "url": "articles/article-35.html", "category": "文集"},
  ],
  PDF_DOCS: [
    {"title":"One With Bitcoin · English Edition","file":"pdf/OneWithBitcoin.pdf","page":"rbhy_en.html","category":"English"},
    {"title":"比特币冷热分离：离线签名实验教程","file":"pdf/BrainWalletSignerV0.1.0.pdf","page":"BrainWalletSignerV0.1.0.html","category":"技术教程"},
    {"title":"比特币时间胶囊：时间锁 CLTV 教程","file":"pdf/BrainWalletSignerV0.2.0.pdf","page":"BrainWalletSignerV0.2.0.html","category":"技术教程"},
    {"title": "人饼合一：高级脑完全手册", "file": "pdf/rbhy.pdf", "page": "rbhy.html", "category": "文档"},
    {"title": "囤饼之道：达哥微博精选", "file": "pdf/HodlWisdom_Dage_Weibo_2024.12.10.v1.pdf", "page": "tbzd.html", "category": "文档"},
    {"title": "囤饼人生：时代剪影", "file": "pdf/tbrs.pdf", "page": "tbrs.html", "category": "文档"},
    {"title": "NSMP 协议白皮书", "file": "pdf/NSMP.pdf", "page": "nsmp.html", "category": "文档"},
    {"title": "高级脑实战演示教程", "file": "pdf/gjnszjc.pdf", "page": "gjnszjc.html", "category": "文档"},
  ]
};
