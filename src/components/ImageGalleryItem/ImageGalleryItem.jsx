import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItemStyles } from './ImageGalleryItem.styled';
import { ImgStyle } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  onClick,
}) {

  const handleImageClick = () => {
    onClick(largeImageURL, tags);
  };

    return (
      <ImageGalleryItemStyles key={id}>
        <ImgStyle
          src={webformatURL}
          alt={tags}
          onClick={handleImageClick}
        />
      </ImageGalleryItemStyles>
    );
  }


  ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };