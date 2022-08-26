import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../firebase/FBPosts';
import CardItemDetail from './CardItemDetail';
import './CardItemDetailContainer.css';
const CardItemDetailContainer = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [load, setLoad] = useState(true);
	const email = id.split('~')[0];
	const idUser = id.split('~')[1];

	useEffect(() => {
		getData();
	}, [post]);

	const getData = async () => {
		try {
			const post = await getPost(idUser, email);
			setPost(post);
			setLoad(false);
		} catch (e) {
			console.log('error', e);
			setLoad(false);
		}
	};

	return (
		<Box bgcolor="" flex={4} p={2}>
			<div className={load ? 'load' : ''}></div>
			{!load ? (
				<CardItemDetail
					key={post.id}
					emailUser={email}
					id={idUser}
					date={post.date}
					title={post.title}
					description={post.description}
					email={post.email}
					comments={post.comments}
					picture={post.picture}
					edited={post.edited}
				/>
			) : (
				''
			)}
		</Box>
	);
};

export default CardItemDetailContainer;
