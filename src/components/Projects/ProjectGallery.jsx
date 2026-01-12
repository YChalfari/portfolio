import { useState } from 'react';
import './ProjectGallery.css';

const ProjectGallery = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="gallery-placeholder">
        <span>No images available</span>
      </div>
    );
  }

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextModalImage = () => {
    setModalIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="project-gallery">
        <div className="gallery-main">
          <img
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            className="gallery-main-image"
            onClick={() => openModal(currentIndex)}
          />
          {images.length > 1 && (
            <>
              <button className="gallery-nav gallery-prev" onClick={prevImage} aria-label="Previous image">
                ‹
              </button>
              <button className="gallery-nav gallery-next" onClick={nextImage} aria-label="Next image">
                ›
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="gallery-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${projectTitle} - Thumbnail ${index + 1}`}
                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal} aria-label="Close gallery">
              ×
            </button>
            <img
              src={images[modalIndex]}
              alt={`${projectTitle} - Image ${modalIndex + 1}`}
              className="gallery-modal-image"
            />
            {images.length > 1 && (
              <>
                <button className="gallery-modal-nav gallery-modal-prev" onClick={prevModalImage} aria-label="Previous image">
                  ‹
                </button>
                <button className="gallery-modal-nav gallery-modal-next" onClick={nextModalImage} aria-label="Next image">
                  ›
                </button>
              </>
            )}
            <div className="gallery-modal-counter">
              {modalIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;

