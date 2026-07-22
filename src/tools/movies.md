---
title: 电影推荐
icon: film
breadcrumb: false
---

# 电影推荐

<div class="movie-list">
  <a class="movie-item" href="https://www.imdb.com/title/tt0816692/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="星际穿越" />
    <span>星际穿越</span>
  </a>

  <a class="movie-item" href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" alt="肖申克的救赎" />
    <span>肖申克的救赎</span>
  </a>

  <a class="movie-item" href="https://www.imdb.com/title/tt1375666/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" alt="盗梦空间" />
    <span>盗梦空间</span>
  </a>

  <a class="movie-item" href="https://www.imdb.com/title/tt5311514/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg" alt="你的名字。" />
    <span>你的名字。</span>
  </a>

  <a class="movie-item" href="https://www.imdb.com/title/tt6751668/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" alt="寄生虫" />
    <span>寄生虫</span>
  </a>

  <a class="movie-item" href="https://www.imdb.com/title/tt4633694/" target="_blank" rel="noopener noreferrer">
    <img src="https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" alt="蜘蛛侠：平行宇宙" />
    <span>蜘蛛侠：平行宇宙</span>
  </a>
</div>

<!--
添加新电影时，复制下面这一段，改 href、src、alt 和电影名：

<a class="movie-item" href="电影链接" target="_blank" rel="noopener noreferrer">
  <img src="图片链接" alt="电影名" />
  <span>电影名</span>
</a>
-->

<style>
.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 18px;
  margin: 24px 0 48px;
}

.movie-item {
  display: block;
  color: inherit;
  text-align: center;
  text-decoration: none;
}

.movie-item img {
  display: block;
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  background: #f2f2f2;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.movie-item span {
  display: block;
  margin-top: 10px;
  font-weight: 600;
  line-height: 1.4;
}

.movie-item:hover img {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
}

@media (max-width: 640px) {
  .movie-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}
</style>
