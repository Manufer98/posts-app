import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ email, id }) => {
	const nickName = email.split('@')[0];
	return (
		<Box sx={{ bgcolor: '' }}>
			<Link style={{}} to={'/user/' + id}>
				{nickName}
			</Link>
		</Box>
	);
};

export default Item;
