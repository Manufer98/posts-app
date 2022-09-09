import { configureStore } from '@reduxjs/toolkit';
import mypostsReducer from "./myPostsSlice";
import notificationReducer from "./notificationsSlice";
import userReducer from "./userSlice";
export default configureStore({
	reducer:{
		user: userReducer,
		myposts: mypostsReducer,
		notifications: notificationReducer,
	},
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})