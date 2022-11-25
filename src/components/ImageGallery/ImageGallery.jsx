import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyles } from './ImageGallery.styled';
import { HelperText } from './ImageGallery.styled';

export default function ImageGallery({
  onClick,
  onLoadMore,
  status,
  error,
  images,
}) {
  
  const handleImageClick = (imageURL, imageALT) => {
    onClick(imageURL, imageALT);
  };

    if (status === 'idle') {
      return <HelperText >Enter search query</HelperText>;
    }
    if (status === 'pending') {
      return Loader();
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved' && images.length !== 0) {
      return (
        <>
          <ImageGalleryStyles>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                id={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={handleImageClick}
              />
            ))}
          </ImageGalleryStyles>
          {<Button onLoadMore={onLoadMore} />}
        </>
      );
    } else {
      return <HelperText>We can't find it</HelperText>;
    }
  }


ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    onLoadMore: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    images: PropTypes.array,
  };