import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Button, Card, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { deleteComment } from '../../firebase/FBPosts';
const Comments = ({ idUser, comment, email, date, id, emailUser, picture }) => {
	const MyOptions = ['Share via Whatsapp', 'Send Email', 'Download', 'Save as PDF'];
	const [anchorEl, setAnchorEl] = useState(null);
	const { user } = useAuth0();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		deleteComment(idUser, id, emailUser);
	};

	return (
		<Card sx={{ bgcolor: '#f2f0f0' }}>
			<Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
				<Avatar variant="rounded" src={picture} />

				<Stack spacing={0.5}>
					<Typography>{email}</Typography>
					<Typography variant="body2" color="black">
						{comment}
					</Typography>
				</Stack>
			</Box>
			<Box paddingLeft="5px" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
				{user.email === email ? <Button onClick={() => handleDelete()}>Delete</Button> : ''}
			</Box>
			<Divider />
			<Box paddingLeft="5px">
				<Typography sx={{ p: 1, display: 'flex', justifyContent: 'flex-start' }} variant="body2" color="text.secondary">
					{date && date.toDate().toDateString()}
				</Typography>
			</Box>
		</Card>
	);
};

export default Comments;
