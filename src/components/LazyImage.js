import React, { useState, useEffect, useRef } from 'react';

// Enhanced LazyImage component with SEO improvements
function LazyImage({ 
  src, 
  alt, 
  className, 
  style, 
  width, 
  height, 
  title,
  loading = "lazy",
  decoding = "async",
  fetchpriority = "auto",
  sizes
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  // Generate an enhanced alt text if not provided or too short
  const enhancedAlt = alt && alt.length > 5 ? alt : 
    (title ? `${title} - Ethnobrodery` : "Традиционен български мотив - Ethnobrodery");

  useEffect(() => {
    // Skip if image is already loaded or if IntersectionObserver is not supported
    if (isLoaded || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver((entries) => {
      // When image comes into view
      if (entries[0].isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '100px', // Load images when they are 100px from entering the viewport
      threshold: 0.01,
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.disconnect();
      }
    };
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Combine provided styles with transition for smooth appearance
  const combinedStyle = {
    ...style,
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1.0 : 0,
  };

  // Extract image name from src for use in structured data
  const imageName = typeof src === 'string' ? 
    src.split('/').pop().split('.')[0].replace(/-/g, ' ') : '';

  return (
    <>
      {/* Placeholder while image loads */}
      {!isLoaded && (
        <div 
          style={{
            width: width || '100%',
            height: height || 'auto',
            background: '#f0f0f0',
            borderRadius: '4px',
          }}
          aria-hidden="true"
        />
      )}

      {/* Image - using both native lazy loading and our Intersection Observer */}
      <img
        ref={imgRef}
        src={isInView || !window.IntersectionObserver ? src : ''}
        alt={enhancedAlt}
        title={title || imageName}
        className={className}
        style={combinedStyle}
        onLoad={handleLoad}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchpriority}
        sizes={sizes}
        width={width}
        height={height}
        itemProp="image"
      />
    </>
  );
}

export default LazyImage; 