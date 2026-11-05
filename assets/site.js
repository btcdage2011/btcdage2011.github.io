/* BTCDAGE 全站顶部导航。要添加新的【顶部栏目】，只修改 MAIN_NAV。 */
/* 根据脚本位置定位站点根目录：支持 articles/ 子页面。 */
const SITE_ROOT = new URL('../', document.currentScript.src);
function siteHref(path) { return new URL(path, SITE_ROOT).href; }
const MAIN_NAV = [
  { label: '首页',       href: 'index.html' },
  { label: '文集',       href: 'articles.html' },
  { label: '研究',       href: 'quantum_article.html' },
  { label: '高级脑',     href: 'rbhy.html' },
  { label: '实用工具',   href: 'BrainWalletGenerator.html' },
  { label: '资料导航',   href: 'nav.html' },
];

/* 普通资源只在 nav.html 中增加，无需更改这里。 */
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  if (!document.querySelector('.site-header')) {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `
      <div class="site-head-inner">
        <a class="site-logo" href="${siteHref('index.html')}"><span class="site-mark">₿</span><span>BTCDAGE <span style="color:#9fa7b1;font-weight:400">/ 囤饼指南</span></span></a>
        <button class="mobile-menu" type="button" aria-label="打开导航" aria-expanded="false">菜单 ☰</button>
        <nav class="site-nav" aria-label="网站主导航"></nav>
        <a class="header-cta" href="${siteHref('nav.html')}">探索全部资源 ↗</a>
      </div>`;
    const nav = header.querySelector('.site-nav');
    MAIN_NAV.forEach(item => {
      const link = document.createElement('a');
      link.href = siteHref(item.href);
      link.textContent = item.label;
      if (item.href === currentPage) link.setAttribute('aria-current', 'page');
      nav.appendChild(link);
    });
    document.body.prepend(header);
  }
  const header = document.querySelector('.site-header');
  const toggle = header.querySelector('.mobile-menu');
  if (toggle) toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  if (!document.querySelector('.site-footer')) {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="site-footer-inner">
      <div><strong>BTCDAGE · 囤饼指南</strong><div>我来，我见，我囤。 / I COME, I SEE, I HODL.</div></div>
      <div>独立思考 · 自由探索 · 长期主义<br>© 2026 BTCDAGE</div>
    </div>`;
    document.body.appendChild(footer);
  }
});
