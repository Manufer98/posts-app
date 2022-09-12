import { createSlice } from '@reduxjs/toolkit';




export const postsSlice = createSlice({
	name:"posts",
	initialState:{
		posts:[],
		searchPosts:[]
		
	},
	reducers:{
		
		InitalPosts:(state, action)=>{
			state.posts = [...action.payload]},
		InitalSearchPosts:(state, action)=>{
			state.searchPosts = [...action.payload]},




		
		
	}
  })
  
  export const {InitalPosts,InitalSearchPosts} =postsSlice.actions;

  export default postsSlice.reducer;