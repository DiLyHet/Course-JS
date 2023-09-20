export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  
    const onImageLoaded = () => {
      const { width, height } = imgElem;
      callback(null, { width, height });
    };
  
    imgElem.addEventListener('load', onImageLoaded);
  
    imgElem.addEventListener('error', () => callback('Image load is failed'));
  };
  
  const onImageLoaded = (error, imgDimensions) => {
    if (error) {
      console.log(error);
      return;
    }
  
    const { width, height } = imgDimensions;
    const sizeElem = document.querySelector('.image-size');
  
    sizeElem.textContent = `${width} x ${height}`;
  };