import { configureStore } from '@reduxjs/toolkit';
import mypostsReducer from "./myPostsSlice";
import notificationReducer from "./notificationsSlice";
import postsReducer from "./postSlice";
import userReducer from "./userSlice";
export default configureStore({
	reducer:{
		user: userReducer,
		myposts: mypostsReducer,
		notifications: notificationReducer,
		posts:postsReducer
	},
	middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})