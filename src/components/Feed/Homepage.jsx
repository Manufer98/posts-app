import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, getAllPosts } from '../../firebase/FBPosts';
import HomepageItem from './HomepageItem';
const Homepage = () => {
	const [posts, setPosts] = useState([]);
	const { user } = useAuth0();
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	let navigate = useNavigate();
	addUser();
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const posts = await getAllPosts(user.email);
			setPosts(posts);
			setLoad(false);
		} catch (e) {
			console.log('error', e);
			setError(true);
			setLoad(false);
		}
	};

	//console.log(users);
	return (
		<Box
			bgcolor=""
			flex={4}
			p={2}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px' /* , justifyContent: 'flex-end' */,
			}}
		>
			<Typography variant="h3" textAlign="center">
				Feed
			</Typography>

			{error && <Typography sx={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>Error... Try again next time</Typography>}
			<div className={load ? 'loading' : ''}></div>
			{posts.length !== 0 || error || load ? <HomepageItem posts={posts} /> : <Typography sx={{ textAlign: 'center', fontSize: '30px' }}>No posts</Typography>}
		</Box>
	);
};

export default Homepage;
