import React, { useEffect  } from 'react';
import PropTypes from 'prop-types';

import { OverlayModal } from './Modal.styled';
import { ModalImg } from './Modal.styled';

export default function Modal ({src, alt, onCloseModal,}) {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    }
  });

  const handleCloseModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      onCloseModal();
    }
  };

    return (
      <OverlayModal onClick={handleCloseModal}>
        <ModalImg>
          <img src={src} alt={alt} />
        </ModalImg>
      </OverlayModal>
    );
  }

  Modal.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onCloseModal: PropTypes.func,
  };