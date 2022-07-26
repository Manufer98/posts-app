import { useAuth0 } from '@auth0/auth0-react';
import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getNamesProfile } from '../../firebase/FBPosts';
import CardItem from '../Feed/CardItem';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const [load, setLoad] = useState(true);
	const [userProfile, setUserProfile] = useState([]);
	const postsRedux = useSelector((state) => state.myposts.posts);
	const pictureRedux = useSelector((state) => state.myposts.picture);

	useEffect(
		() => {
			getData();
		},
		[
			/* userProfile */
		]
	);
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
				<Typography variant="h6">{user.name}</Typography>
				<Typography variant="h6">{user.email}</Typography>
				<Typography variant="h5">My Posts</Typography>
				<Divider />
				<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', flexWrap: 'wrap', marginTop: '10px' }}>
					<CardItem postsRedux={postsRedux} pictureRedux={pictureRedux} />
				</Box>
			</Box>
		)
	);
};

export default Profile;
