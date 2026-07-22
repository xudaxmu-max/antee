---
title: 工具推荐
icon: toolbox
breadcrumb: false
---

# 工具推荐

<div class="tool-list">
  <a class="tool-item" href="https://uutool.cn/photo-collage/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=uutool.cn&sz=128" alt="在线多图合并拼图工具" />
    <span>在线多图合并拼图工具</span>
  </a>

  <a class="tool-item" href="https://uutool.cn/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.google.com/s2/favicons?domain=uutool.cn&sz=128" alt="UU在线工具" />
    <span>UU在线工具</span>
  </a>
</div>

<!--
添加新工具时，复制下面这一段，改 href、domain、alt 和工具名：

<a class="tool-item" href="工具链接" target="_blank" rel="noopener noreferrer">
  <img src="https://www.google.com/s2/favicons?domain=工具域名&sz=128" alt="工具名" />
  <span>工具名</span>
</a>

如果你想用自己的图片，也可以直接把 img 的 src 改成图片链接。
-->

<style>
.tool-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 18px;
  margin: 24px 0 48px;
}

.tool-item {
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

.tool-item img {
  display: block;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  object-fit: contain;
  border-radius: 8px;
}

.tool-item span {
  display: block;
  margin-top: 12px;
  font-weight: 600;
  line-height: 1.4;
}

.tool-item:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-accent, #3eaf7c);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .tool-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}
</style>
