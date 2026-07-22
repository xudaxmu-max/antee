import { defineClientConfig, withBase } from "vuepress/client";

const videoId = "home-bg-video";
const lightVideoSrc = "/assets/videos/bg.mp4";
const darkVideoSrc = "/assets/videos/bg-dk.mp4";

const getHomeVideoSrc = (): string =>
  document.documentElement.dataset.theme === "dark" ? darkVideoSrc : lightVideoSrc;

const updateHomeVideoSrc = (): void => {
  const video = document.getElementById(videoId) as HTMLVideoElement | null;
  const source = video?.querySelector("source");

  if (!video || !source) return;

  const nextSrc = withBase(getHomeVideoSrc());

  if (source.src.endsWith(nextSrc)) return;

  source.src = nextSrc;
  video.load();
  void video.play();
};

const mountHomeVideo = (): void => {
  const oldVideo = document.getElementById(videoId);
  const hero = document.querySelector(".vp-blog-home .vp-blog-hero");

  if (!hero) {
    oldVideo?.remove();
    return;
  }

  if (oldVideo && hero.contains(oldVideo)) {
    updateHomeVideoSrc();
    return;
  }

  oldVideo?.remove();

  const video = document.createElement("video");

  video.id = videoId;
  video.className = "home-bg-video";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("aria-hidden", "true");

  const source = document.createElement("source");

  source.src = withBase(getHomeVideoSrc());
  source.type = "video/mp4";

  video.append(source);
  hero.prepend(video);
  void video.play();
};

export default defineClientConfig({
  enhance({ router }) {
    if (typeof window === "undefined") return;

    router.afterEach(() => {
      window.setTimeout(mountHomeVideo);
    });

    window.setTimeout(mountHomeVideo);

    const observer = new MutationObserver(() => {
      updateHomeVideoSrc();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  },
});
