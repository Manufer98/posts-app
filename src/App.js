import { Box, Stack } from "@mui/material";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Feed/Add";
import CardItemDetailContainer from "./components/Feed/CardItemDetailContainer";
import Feed from "./components/Feed/Feed";
import Hola from "./components/Feed/Hola";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";

const firebaseConfig = {

  apiKey: "AIzaSyDwCzS32IgZxB7Lr12JGLYuQGDB7V-qzLo",

  authDomain: "material-95553.firebaseapp.com",

  projectId: "material-95553",

  storageBucket: "material-95553.appspot.com",

  messagingSenderId: "508516321926",

  appId: "1:508516321926:web:7aa362d16c7507c3259f07"

};


initializeApp(firebaseConfig);


function App() {
  return (
    <Box >
      <BrowserRouter>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/sdd" element={<Hola/>} />
            <Route path="/post/:id" element={<CardItemDetailContainer/>} />
          </Routes>
          <Rightbar />
        </Stack>
        <Add />
      </BrowserRouter>
    </Box>
  );
}

export default App;
