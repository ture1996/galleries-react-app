export const makeSelectGalleries = (state) => {
  return state.galleriesReducer.galleries;
};

export const makeSelectGallery = (state) => {
  return state.galleriesReducer.gallery
}
