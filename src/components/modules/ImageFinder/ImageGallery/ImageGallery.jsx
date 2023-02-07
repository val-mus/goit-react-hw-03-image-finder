import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

import s from './image-gallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL }) => (
    <ImageGalleryItem key={id} webformatURL={webformatURL} />
  ));

  return <ul className={s.gallery}>{elements}</ul>;
};
ImageGallery.defaultProps = {
  items: [],
};
export default ImageGallery;


