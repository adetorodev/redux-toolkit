import { createSlice } from "@reduxjs/toolkit";
// import { sub } from 'date-fns';

const initialState = [
  { id: 1, title: "React Redux", content: "React Reduc learning time" },
  { id: 2, title: "React table", content: "React table learning time" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state,action){
        state.push(action.payload)
    },
  },
});

export const selectAllPost = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
