---
title: 网站推荐
icon: link
breadcrumb: false
---

# 网站推荐

<div class="site-list">
  <a class="site-item" href="https://github.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=github.com&sz=128" alt="GitHub" />
    <span>GitHub</span>
  </a>

  <a class="site-item" href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=128" alt="MDN Web Docs" />
    <span>MDN Web Docs</span>
  </a>

  <a class="site-item" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=vuejs.org&sz=128" alt="Vue" />
    <span>Vue</span>
  </a>

  <a class="site-item" href="https://theme-hope.vuejs.press/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=theme-hope.vuejs.press&sz=128" alt="VuePress Theme Hope" />
    <span>VuePress Theme Hope</span>
  </a>

  <a class="site-item" href="https://www.bilibili.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=bilibili.com&sz=128" alt="哔哩哔哩" />
    <span>哔哩哔哩</span>
  </a>

  <a class="site-item" href="https://www.douban.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=douban.com&sz=128" alt="豆瓣" />
    <span>豆瓣</span>
  </a>
</div>

<!--
添加新网站时，复制下面这一段，改 href、domain、alt 和网站名：

<a class="site-item" href="网站链接" target="_blank" rel="noopener noreferrer">
  <img src="https://www.google.com/s2/favicons?domain=网站域名&sz=128" alt="网站名" />
  <span>网站名</span>
</a>

如果你想用自己的图片，也可以直接把 img 的 src 改成图片链接。
-->

<style>
.site-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 18px;
  margin: 24px 0 48px;
}

.site-item {
  display: block;
  padding: 20px 14px;
  color: inherit;
  text-align: center;
  text-decoration: none;
  border: 1px solid var(--vp-c-border, #e5e7eb);
  border-radius: 8px;
  background: var(--vp-c-bg, #fff);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.site-item img {
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;
}

.site-item span {
  display: block;
  margin-top: 12px;
  font-weight: 600;
  line-height: 1.4;
}

.site-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-accent, #3eaf7c);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .site-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}
</style>
