import { Box, Typography } from '@mui/material';
import React from 'react';
const NotFound = () => {
	return (
		<Box bgcolor="" flex={4} p={2} sx={{ display: 'flex', gap: '10px', flexDirection: 'column', minHeight: 'calc(100vh - 96px)' }}>
			<Typography>NotFound</Typography>
		</Box>
	);
};

export default NotFound;
