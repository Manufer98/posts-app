import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';
import React from 'react';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	console.log(user);
	return (
		isAuthenticated && (
			<Box bgcolor="" flex={4} p={2} sx={{ height: '89.65vh' }}>
				<div>Hola</div>
				<div>{user.birthdate}</div>
				<img referrerpolicy="no-referrer" src={user.picture} alt={user.name} />
				<h2>{user.name}</h2>
				<h2>{user.email}</h2>
			</Box>
		)
	);
};

export default Profile;
