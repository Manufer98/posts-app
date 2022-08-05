import { useAuth0 } from '@auth0/auth0-react';
import { MenuItem } from '@mui/material';
import React from 'react';

export const LogoutButton = () => {
	const { logout } = useAuth0();

	return <MenuItem onClick={() => logout({ returnTo: window.origin })}>Logout</MenuItem>;
};
