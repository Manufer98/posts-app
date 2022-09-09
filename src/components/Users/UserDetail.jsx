import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../firebase/FBPosts';
import CardItem from './CardItem';

const Users = () => {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		getData();
	}, [id]);

	const getData = async () => {
		try {
			const user = await getUserData(id);
			setUser(user);
		} catch (e) {
			console.log('error', e);
		}
	};

	return (
		<Box bgcolor="" flex={4} p={2} sx={{ minHeight: '89.65vh' }}>
			<Box position="sticky">
				<Typography textAlign="center" variant="h5">
					User {user.name} Profile
				</Typography>

				<Typography textAlign="center" variant="h6">
					{user.email}
				</Typography>
				<img referrerPolicy="no-referrer" src={user.picture} alt="Imagen usuario" />

				<Typography variant="h6">Posts</Typography>
				<Divider />
				<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', marginTop: '10px' }}>
					<CardItem posts={user.posts} picture={user.picture} />
				</Box>
			</Box>
		</Box>
	);
};

export default Users;
