/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface MyImageGalleryProps {
  images: {
    original: string;
    thumbnail: string;
    originalHeight: number;
    originalWidth: number;
    thumbnailWidth: number;
    thumbnailHeight: number;
  }[];
  handleSlide: (index: number) => void;
}

function MyImageGallery(props: MyImageGalleryProps) {
  return (
    <ImageGallery
      items={props.images}
      autoPlay
      // showPlayButton={false}
      // showFullscreenButton={false}
      // showNav={false}
      // showBullets={false}
      // showThumbnails={false}
      showIndex
      // showVideo={false}
      // showGalleryFullscreenButton={false}
      // showGalleryPlayButton={false}

      slideDuration={500}
      slideInterval={5000}
      onSlide={props.handleSlide}
    />
  );
}

// Convertir le composant React en composant Qwik
export default qwikify$(MyImageGallery, { eagerness: 'idle' });
