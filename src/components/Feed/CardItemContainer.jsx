import { useAuth0 } from '@auth0/auth0-react';
import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../firebase/FBPosts';
import { InitalMyPicture, InitalMyPosts } from '../redux/myPostsSlice';
import CardItem from './CardItem';
import './CardItemContainer.css';

const CardItemContainer = () => {
	//const [posts, setPosts] = useState([]);
	//const [picture, setPicture] = useState([]);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const postsRedux = useSelector((state) => state.myposts.posts);
	const pictureRedux = useSelector((state) => state.myposts.picture);
	const { user } = useAuth0();

	useEffect(() => {
		getData();
	}, [postsRedux]);

	const getData = async () => {
		try {
			const { posts, picture } = await getPosts(user.email);
			dispatch(InitalMyPosts(posts));
			dispatch(InitalMyPicture(picture));

			setLoad(false);
		} catch (e) {
			setError(true);
			setLoad(false);
			console.log(e);
		}
	};

	return (
		<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
			<Typography variant="h3" textAlign="center">
				My posts
			</Typography>
			{/* <Button onClick={() => handleRedux()}>asd</Button> */}
			<Divider />
			{/* <StepConnector /> */}
			{error && <Typography sx={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>Error... Try again next time</Typography>}
			<div className={load ? 'loading' : ''}></div>
			{postsRedux.length !== 0 || error || load ? (
				<CardItem /*  posts={posts} picture={picture} */ postsRedux={postsRedux} pictureRedux={pictureRedux} />
			) : (
				<Typography sx={{ textAlign: 'center', fontSize: '30px' }}>No posts</Typography>
			)}
		</Box>
	);
};

export default CardItemContainer;
