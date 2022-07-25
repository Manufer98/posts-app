import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../../firebase/FBPosts';
import CardItemDetail from './CardItemDetail';
const CardItemDetailContainer = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	let navigate = useNavigate();

	useEffect(() => {
		getData();
	}, [id]);

	const getData = async () => {
		try {
			const post = await getPost(id);
			setPost(post);
			/* setLoading(false); */
			if (post) {
				setPost(post);
				console.log(post);
			} else {
				navigate('/NotFound');
			}
		} catch {}
	};

	return (
		<Box bgcolor="pink" flex={4} p={2}>
			<CardItemDetail key={post.id} date={post.date} title={post.title} description={post.description} />
		</Box>
	);
};

export default CardItemDetailContainer;
