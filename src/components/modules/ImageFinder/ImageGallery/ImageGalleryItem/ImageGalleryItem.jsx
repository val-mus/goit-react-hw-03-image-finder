import s from './image-gallery-item.module.css';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className={s.ImageGalleryItem} id={id}>
      <img className={s.ImageGalleryItem_image} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
