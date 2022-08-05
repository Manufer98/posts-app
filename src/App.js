import { useAuth0 } from '@auth0/auth0-react';
import { Box, Stack } from "@mui/material";
import { initializeApp } from "firebase/app";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Feed/Add";
import CardItemDetailContainer from "./components/Feed/CardItemDetailContainer";
import Feed from "./components/Feed/Feed";
import Hola from "./components/Feed/Hola";

import { GetEmail, GetName } from './components/Login/UserData';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import { update } from './components/redux/userSlice';
import Rightbar from "./components/Rightbar";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
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
  const name=GetName().split(" ")[0]; 
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
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/sdd" element={<Hola/>} />
            <Route path="/post/:id" element={<CardItemDetailContainer/>} />
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
