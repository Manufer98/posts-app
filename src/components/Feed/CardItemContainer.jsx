import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPosts } from '../../firebase/FBPosts';
import CardItem from './CardItem';
import './CardItemContainer.css';

const CardItemContainer = () => {
	const [data, setData] = useState([]);
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		getData();
	}, [data]);

	const getData = async () => {
		try {
			const posts = await getPosts();
			setData(posts);
			setLoad(false);
		} catch (e) {
			setError(true);
			setLoad(false);
		}
	};
	return (
		<Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', minHeight: 'calc(100vh - 96px)' }}>
			{error && <Typography sx={{ textAlign: 'center', fontSize: '40px', marginTop: '20px' }}>Error... Try again next time</Typography>}
			<div className={load ? 'loading' : ''}></div>
			<CardItem data={data} />
		</Box>
	);
};

export default CardItemContainer;
