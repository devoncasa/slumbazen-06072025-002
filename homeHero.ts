export const homeHero = {
  src: '/assets/editorial/quiet-bedroom.webp',
  srcSet: [400, 640, 840, 1200].map(width =>
    `/assets/editorial/quiet-bedroom${width === 1200 ? '' : '-' + width}.webp ${width}w`
  ).join(', '),
  sizes: '(max-width: 767px) calc(100vw - 26px), (max-width: 1000px) calc((100vw - 38px) * 0.575), (max-width: 1400px) 57.5vw, 805px',
};
