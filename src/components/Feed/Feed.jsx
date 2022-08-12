import { Box } from '@mui/material';
import { useEffect } from 'react';
import { addUser } from '../../firebase/FBPosts';

import CardItemContainer from './CardItemContainer';
const Feed = () => {
	addUser();
	useEffect(() => {});

	return (
		<Box bgcolor="" flex={4} p={2} height="90.5vh">
			<CardItemContainer />
		</Box>
	);
};

export default Feed;
