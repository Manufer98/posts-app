import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
const Item = ({ title, icon }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton component="a" href="#home">
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItemButton>
		</ListItem>
	);
};

export default Item;
