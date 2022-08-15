import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserData } from '../../firebase/FBPosts';
import CardItem from '../Feed/CardItem';

const Users = () => {
	const [user, setUser] = useState({});
	const { id } = useParams();
	let navigate = useNavigate();
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
	console.log(user);
	return (
		<Box bgcolor="" flex={4} p={2} sx={{ height: '89.65vh' }}>
			<Box position="sticky">
				<Typography textAlign="center" variant="h5">
					User {user.name} Profile
				</Typography>
				<Typography textAlign="center" variant="h6">
					{user.email}
				</Typography>
				<img referrerPolicy="no-referrer" src={user.picture} />
				<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
					<CardItem posts={user.posts} />
				</Box>
			</Box>
		</Box>
	);
};

export default Users;
