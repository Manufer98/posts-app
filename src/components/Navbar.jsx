import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SignpostIcon from '@mui/icons-material/Signpost';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { useState } from 'react';
const StyledToolbar= styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  backgroundColor:"red"
});
const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"50%"

}));

const Icons=styled(Box)(({theme})=>({
    display:"none",
    gap:"15px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display : "flex"
    } 
}));

const UserBox=styled(Box)(({theme})=>({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display : "none"
  }
 
}));

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>

      <Typography  variant="h6" sx={{display : {xs:"none" , sm:"block"}}}>Manu DEV</Typography>
      <SignpostIcon sx={{display : {xs:"block" , sm:"none"}}}/>
      <Search><InputBase placeholder='search...'/></Search>
      
      <Icons>
      <Badge badgeContent={4} color="primary">
      <MailIcon  />
      </Badge>
      <Badge badgeContent={5} color="primary">
      <NotificationsNoneIcon  />
      </Badge>
      <Avatar onClick={()=>setOpen(true)} sx={{width:30,  height:30}}/>
      
      </Icons>
      <UserBox  onClick={()=>setOpen(true)}>
      <Avatar  sx={{width:30,  height:30,}} />
      <Typography>John</Typography>
      </UserBox>
      
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={()=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
    
  )
}

export default Navbar