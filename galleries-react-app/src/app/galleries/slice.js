import { createSlice } from "@reduxjs/toolkit";

const sagaActions = {
  setAllGalleries: (state, { payload }) => {
    state.galleries = payload;
  },
  setSingleGallery: (state, { payload }) => {
    state.gallery = payload;
  },
};

const galleries = createSlice({
  name: "myGalleries",
  initialState: {
    galleries: [
      {
        id: 0,
        url: [""],
        user: { id: 0 },
      },
    ],
    gallery: {
      id: 0,
      comments: [{ id: 0, user: { id: 0 } }],
      url: [""],
      user: { id: 0 },
    },
  },

  reducers: {
    ...sagaActions,
    getAllGalleries: () => {},
    getSingleGallery: () => {},
  },
});

export const {
  getAllGalleries,
  setAllGalleries,
  getSingleGallery,
  setSingleGallery,
} = galleries.actions;
export default galleries.reducer;
