function setupVideo(video) {
  function parseMediaURL(media) {
    const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    const url = media.src;
    const match = url.match(regexp);
    return match[1];
  }
  function generateURL(id) {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
  }
  function createIframe(id) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
  }

  const link = video.querySelector('.video__link');
  const media = video.querySelector('.video__media');
  const button = video.querySelector('.video__button');
  const id = parseMediaURL(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}
function findVideos() {
  const videos = document.querySelectorAll('.video__wrapper');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

findVideos();
