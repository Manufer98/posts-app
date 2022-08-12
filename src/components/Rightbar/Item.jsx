import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ email, id }) => {
	return (
		<Box>
			<Link to={'/users/' + id} variant="h5">
				{email}
			</Link>
		</Box>
	);
};

export default Item;
