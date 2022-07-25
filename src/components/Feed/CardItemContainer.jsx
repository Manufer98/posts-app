import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../firebase/FBPosts';
import CardItem from './CardItem';

const CardItemContainer = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, [data]);

	const getData = async () => {
		const posts = await getPosts();
		setData(posts);
	};
	return (
		<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
			<CardItem data={data} />
		</Box>
	);
};

export default CardItemContainer;
