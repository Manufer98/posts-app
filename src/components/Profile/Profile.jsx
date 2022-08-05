import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import React from 'react';

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	return (
		isAuthenticated && (
			<Box bgcolor="pink" flex={4} p={2} sx={{ height: '89.65vh' }}>
				<div>Hola</div>
				<img src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
			</Box>
		)
	);
};

export default Profile;
