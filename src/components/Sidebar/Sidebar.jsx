import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import Item from './Item';
const Sidebar = () => {
	const name = useSelector((state) => state.user.name);
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position="sticky">
				<List>
					<Item title="Homepage" icon={<HomeIcon />} to="" />
					<Item title="My Posts" icon={<TextSnippetIcon />} to="myposts" />
					<Item title="Groups" icon={<GroupIcon />} to="notfound" />
					<Item title="Marketplace" icon={<StoreIcon />} to="notfound" />
					<Item title="Users" icon={<PersonIcon />} to="notfound" />
					<Item title="Settings" icon={<SettingsIcon />} to="notfound" />
					<Item title="Profile" icon={<AccountBoxIcon />} to="profile" />
					<Item title={name} to="notfound" />
					<ListItem disablePadding>
						<ListItemButton component="a" href="#home">
							<ListItemIcon>
								<NightlightIcon />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

export default Sidebar;
