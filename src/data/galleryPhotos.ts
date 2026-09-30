export interface GalleryPhoto {
  id: string;
  src: string;
  webpSrc: string;
  title: string;
  location: string;
  alt: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    src: '/gallery/photo-1-valley.jpg',
    webpSrc: '/gallery/photo-1-valley.webp',
    title: 'High Altitude Valley',
    location: 'Himalayan Ridge',
    alt: 'Mountain valley with winding river and clouds',
  },
  {
    id: 'photo-2',
    src: '/gallery/photo-2-lake.jpg',
    webpSrc: '/gallery/photo-2-lake.webp',
    title: 'Glacial Waters',
    location: 'Alpine Pass',
    alt: 'Misty mountain pass with glacial lake',
  },
  {
    id: 'photo-3',
    src: '/gallery/photo-3-shinkula.jpg',
    webpSrc: '/gallery/photo-3-shinkula.webp',
    title: 'Shinku La Pass',
    location: '16,580 FT MSL',
    alt: 'Shinku La mountain pass with Tibetan prayer flags',
  },
  {
    id: 'photo-4',
    src: '/gallery/photo-4-river.jpg',
    webpSrc: '/gallery/photo-4-river.webp',
    title: 'Emerald Gorge',
    location: 'River Basin',
    alt: 'Lush green mountain gorge with river',
  },
  {
    id: 'photo-5',
    src: '/gallery/photo-5-pines.jpg',
    webpSrc: '/gallery/photo-5-pines.webp',
    title: 'Pine Valley Vista',
    location: 'Glacial Valley',
    alt: 'Turquoise river winding through pine forests towards snow peaks',
  },
];
