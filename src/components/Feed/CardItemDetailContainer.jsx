import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../firebase/FBPosts';
import CardItemDetail from './CardItemDetail';
const CardItemDetailContainer = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const email = id.split('~')[0];
	const idUser = id.split('~')[1];
	console.log(idUser, id);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const post = await getPost(idUser, email);
			setPost(post);
		} catch (e) {
			console.log('error', e);
		}
	};
	console.log(post);

	return (
		<Box bgcolor="" flex={4} p={2}>
			<CardItemDetail key={post.id} id={id} date={post.date} title={post.title} description={post.description} email={post.email} />
		</Box>
	);
};

export default CardItemDetailContainer;
