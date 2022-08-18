import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../firebase/FBPosts';
import CardItem from './CardItem';
import './CardItemContainer.css';

const CardItemContainer = () => {
	const [posts, setPosts] = useState([]);
	const [picture, setPicture] = useState([]);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);

	const { user } = useAuth0();
	useEffect(() => {
		getData();
	}, [posts]);

	const getData = async () => {
		try {
			const posts = await getPosts(user.email);
			setPosts(posts.posts);
			setPicture(posts.picture);
			setLoad(false);
		} catch (e) {
			setError(true);
			setLoad(false);
		}
	};

	return (
		<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
			<Typography variant="h3" textAlign="center">
				My posts
			</Typography>
			{/* <StepConnector /> */}
			{error && <Typography sx={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>Error... Try again next time</Typography>}
			<div className={load ? 'loading' : ''}></div>
			{posts.length !== 0 || error || load ? <CardItem posts={posts} picture={picture} /> : <Typography sx={{ textAlign: 'center', fontSize: '30px' }}>No posts</Typography>}
		</Box>
	);
};

export default CardItemContainer;
