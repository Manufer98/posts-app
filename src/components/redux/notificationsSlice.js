import { createSlice } from '@reduxjs/toolkit';



export const notificationsSlice = createSlice({
	name:"notifications",
	initialState:{
		notifications:[],
		picture:'',
		
	},
	reducers:{
		
		InitalNotifications:(state, action)=>{
			state.notifications = [...action.payload]},
		InitalPicture: (state,action) =>{
				state.picture = action.payload;
		},
		
		
		
	}
  })
  
  export const {InitalNotifications,InitalPicture} =notificationsSlice.actions;

  export default notificationsSlice.reducer;