import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts:[],
        loading: false,
        error: null
    },

    reducers: {
        fetchPostsRequest:(state) => {
            state.loading = true;
            state.error = null;
        },

        fetchPostsSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },

        fetchPostsFailure: (state, action) => {
            state.loading = false;
            state.error= action.error;
        }
    }
})

export const{
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFailure
} = postSlice.actions;

export default postSlice.reducer;