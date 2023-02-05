import { createSlice } from "@reduxjs/toolkit";

const sagaActions = {
  setUserGalleries: (state, { payload }) => {
    state.userGalleries = payload;
  },
};

const author = createSlice({
  name: "myAuthor",
  initialState: {
    userGalleries: [
      {
        id: 0,
        url: [""],
      },
    ],
  },

  reducers: {
    ...sagaActions,
    getUserGalleries: () => {},
  },
});

export const { setUserGalleries, getUserGalleries } = author.actions;
export default author.reducer;
