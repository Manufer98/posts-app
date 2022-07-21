import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from "@mui/material";
import Item from './Item';
const Sidebar = () => {
  return (
	<Box  
	flex={1} 
	p={2} 
	sx={{display : {xs:"none" , sm:"block"}}}
	>
	<Box position="sticky">
	<List>
	<Item title="Homepage" icon={<HomeIcon/>} />
	<Item title="Pages" icon={<TextSnippetIcon/>} />
	<Item title="Groups" icon={<GroupIcon/>} />
	<Item title="Marketplace" icon={<StoreIcon/>} />
	<Item title="Friends" icon={<PersonIcon/>} />
	<Item title="Settings" icon={<SettingsIcon/>} />
	<Item title="Profile" icon={<AccountBoxIcon/>} />
	<ListItem disablePadding>
	  <ListItemButton component="a" href="#home">
		<ListItemIcon>
		<NightlightIcon/>
		</ListItemIcon>
			<Switch/>
	  </ListItemButton>
	</ListItem>
	</List>
	</Box>
	</Box>
  )
}

export default Sidebar