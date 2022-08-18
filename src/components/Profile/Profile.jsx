import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNamesProfile } from '../../firebase/FBPosts';
import CardItem from '../Feed/CardItem';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const [load, setLoad] = useState(true);
	const [userProfile, setUserProfile] = useState([]);
	useEffect(() => {
		getData();
	}, [userProfile]);
	const getData = async () => {
		try {
			const userData = await getNamesProfile(user.email);
			setUserProfile(userData.reduce((acc, cur, i) => (acc = cur), {}));
			setLoad(false);
		} catch {
			setLoad(false);
		}
	};

	return (
		isAuthenticated && (
			<Box bgcolor="" flex={4} p={2} sx={{ minHeight: '89.65vh' }}>
				<Typography variant="h5">My Profile</Typography>
				<div>{user.birthdate}</div>
				<img referrerpolicy="no-referrer" src={user.picture} alt={user.name} />
				<Typography variant="h5">{user.name}</Typography>
				<Typography variant="h5">{user.email}</Typography>
				<Typography variant="h5">My Posts</Typography>
				<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'row', flexWrap: 'wrap' }}>
					<CardItem posts={userProfile.posts} picture={userProfile.picture} />
				</Box>
			</Box>
		)
	);
};

export default Profile;
