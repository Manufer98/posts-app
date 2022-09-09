import { useAuth0 } from '@auth0/auth0-react';
import { Box, Stack } from "@mui/material";
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Feed/Add";
import CardItemDetailContainer from "./components/Feed/CardItemDetailContainer";
import Edit from './components/Feed/Edit';
import Feed from "./components/Feed/Feed";
import Homepage from './components/Feed/Homepage';
import NotFound from './components/Feed/NotFound';
import { GetEmail, GetName } from './components/Login/UserData';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { update } from './components/redux/userSlice';
import Rightbar from "./components/Rightbar/Rightbar";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UserDetail from './components/Users/UserDetail';
import UsersContainer from './components/Users/UsersContainer';
import Welcome from './components/Welcome/Welcome';
const firebaseConfig = {

  apiKey: "AIzaSyApmlNO6WIc97MHSYOX-1a-srMXMp_YoVw",

  authDomain: "material-4734f.firebaseapp.com",

  projectId: "material-4734f",

  storageBucket: "material-4734f.appspot.com",

  messagingSenderId: "221534931671",


  appId: "1:221534931671:web:4445f2363b3c838984fe92"



};


initializeApp(firebaseConfig);


function App() {
  const {isAuthenticated,isLoading,user} = useAuth0();
  const dispatch = useDispatch();
  const name=GetName(); 
  const email= GetEmail();


  useEffect(() => {
    dispatch(update({ name , email }));
  },[name])


  
  

  return (
    isLoading ? 
    <>
    <Box >
      <BrowserRouter>
        <Navbar />
        </BrowserRouter>
    </Box>
      </>
    :
    isAuthenticated ? 
    <Box >
      <BrowserRouter>
        <Navbar />
       
        <Toaster />
        <Stack bgcolor='#f5edf1' minHeight="93.2vh" direction="row"  justifyContent="space-between">
          <Sidebar />
          <Routes>
          
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/myposts" element={<Feed />} />
            <Route path="/notfound" element={<NotFound />} /> 
            <Route path="/" element={<Homepage />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/post/:id" element={<CardItemDetailContainer/>} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>
          <Rightbar />
        </Stack>
        <Add />
      </BrowserRouter>
    </Box> : 
    <>
    <Welcome/>
    </>
  );
}

export default App;
