import { Box, Stack } from "@mui/material";
import { initializeApp } from "firebase/app";
import Add from "./components/Feed/Add";
import Feed from "./components/Feed/Feed";
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
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />

    </Box>
  );
}

export default App;
