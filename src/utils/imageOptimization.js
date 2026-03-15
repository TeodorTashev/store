/**
 * Utility functions for image optimization
 */

/**
 * Gets the appropriate size for responsive images
 * @param {string} imageUrl - The original image URL
 * @param {number} width - The desired width
 * @returns {string} - The responsive image URL
 */
export const getResponsiveImageUrl = (imageUrl, width = 400) => {
  // If using a CDN like Cloudinary, this would transform the URL
  // For now, just return the original URL
  return imageUrl;
};

/**
 * Creates a blurred placeholder for an image
 * A simple implementation of Low-Quality Image Placeholder (LQIP)
 * @param {string} imageUrl - The image URL to generate placeholder for
 * @returns {string} - Data URL for the placeholder
 */
export const generatePlaceholder = (imageUrl) => {
  // In a real implementation, this would generate a tiny blurred version
  // of the image as a data URL. For now, return a grey color
  return 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27 width%3D%27400%27 height%3D%27300%27 viewBox%3D%270 0 400 300%27%3E%3Crect fill%3D%27%23f0f0f0%27 width%3D%27400%27 height%3D%27300%27%2F%3E%3C%2Fsvg%3E';
};

/**
 * Preloads important images
 * @param {Array<string>} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  if (!imageUrls || !Array.isArray(imageUrls)) return;
  
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

/**
 * Adds native lazy loading to all images on the page
 * This can be called once when the application loads
 */
export const setupLazyLoading = () => {
  if (typeof document !== 'undefined') {
    // Target all images that don't have the loading attribute set
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      img.setAttribute('loading', 'lazy');
    });
  }
};

export default {
  getResponsiveImageUrl,
  generatePlaceholder,
  preloadImages,
  setupLazyLoading
}; 