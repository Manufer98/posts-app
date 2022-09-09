import { createSlice } from '@reduxjs/toolkit';

const AddPostsAction=  ({posts},payload)=>{
	posts.push(payload);
}

const DeletePostsAction=({posts},payload)=>{
	const index=posts.findIndex((post)=>post.id === payload);
	posts.splice(index,1);
}
const EditPostsAction=({posts},payload)=>{
	const {idPost,description}=payload;
	const index=posts.findIndex((post)=>post.id === idPost);
	posts[index].description=description;

	
}



export const mypostsSlice = createSlice({
	name:"myposts",
	initialState:{
		posts:[],
		picture:""
	},
	reducers:{
		InitalMyPicture: (state,action) =>{
			state.picture = action.payload;
		},
		InitalMyPosts:(state, action)=>{
			state.posts = [...action.payload]},


		AddPostRedux:(state, action)=>{
			AddPostsAction(state, action.payload)},
		DeletePostsRedux:(state, action)=>{
			DeletePostsAction(state, action.payload)},
		EditPostsRedux:(state, action)=>{
			EditPostsAction(state, action.payload)},


		
		
	}
  })
  
  export const {InitalMyPicture,InitalMyPosts,AddPostRedux,DeletePostsRedux,EditPostsRedux} =mypostsSlice.actions;

  export default mypostsSlice.reducer;