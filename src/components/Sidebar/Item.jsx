import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Item = ({ title, icon, to }) => {
	let navigate = useNavigate();
	return (
		<ListItem disablePadding>
			<ListItemButton /* component="a" href="#home" */ onClick={() => navigate(`/${to}`)}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
			</ListItemButton>
		</ListItem>
	);
};

export default Item;
