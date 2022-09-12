import { useAuth0 } from '@auth0/auth0-react';
import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getAllPosts } from '../../firebase/FBPosts';
import { InitalPosts } from '../redux/postSlice';
import HomepageItem from './HomepageItem';
const Homepage = () => {
	const { user } = useAuth0();
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const postsRedux = useSelector((state) => state.posts.posts);
	const dispatch = useDispatch();

	addUser();
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const posts = await getAllPosts(user.email);
			dispatch(InitalPosts(posts));
			setLoad(false);
		} catch (e) {
			console.log('error', e);
			setError(true);
			setLoad(false);
		}
	};

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
			<Divider />

			{error && <Typography sx={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>Error... Try again next time</Typography>}
			<div className={load ? 'loading' : ''}></div>
			{postsRedux.length !== 0 || error || load ? <HomepageItem postsRedux={postsRedux} /> : <Typography sx={{ textAlign: 'center', fontSize: '30px' }}>No posts</Typography>}
		</Box>
	);
};

export default Homepage;
