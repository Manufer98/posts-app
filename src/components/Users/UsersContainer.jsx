import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNames } from '../../firebase/FBPosts';
import User from './User';
const UsersContainer = () => {
	const [users, setUsers] = useState([]);
	const { user } = useAuth0();
	const [load, setLoad] = useState(true);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const userData = await getNames(user.email);
			setUsers(userData);
			setLoad(false);
		} catch {
			setLoad(false);
		}
	};

	return (
		<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }} flex={4} p={2} marginBottom="10px">
			<Typography variant="h3" textAlign="center">
				Users
			</Typography>
			<div className={load ? 'loading' : ''}></div>
			{users && users.map((user) => <User key={user.id} name={user.name} email={user.email} picture={user.picture} id={user.id} numberPost={user.posts.length} />)}
		</Box>
	);
};

export default UsersContainer;
