import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Box, Button, Card, Divider, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteComment, editComment } from '../../firebase/FBPosts';
const Comments = ({ edited, editt, idUser, comment, email, date, id, emailUser, picture }) => {
	const MyOptions = ['Share via Whatsapp', 'Send Email', 'Download', 'Save as PDF'];
	const [anchorEl, setAnchorEl] = useState(null);
	const [edit, setEdit] = useState(editt);
	const [newComment, setNewComment] = useState(comment);
	const { user } = useAuth0();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const open = Boolean(anchorEl);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = () => {
		try {
			deleteComment(idUser, id, emailUser);
			toast.success('Your comment has been deleted');
		} catch (e) {
			console.log('Error: ', e);
		}
	};

	const handleEditBox = () => {
		setEdit(true);
	};

	const handleEdit = () => {
		try {
			setEdit(false);
			editComment(idUser, id, emailUser, newComment);
			setNewComment('');
			toast.success('Your comment has been edited');
		} catch (e) {
			console.log('Error: ', e);
		}
	};

	return (
		<Card sx={{ bgcolor: '#f2f0f0' }}>
			<Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
				<Avatar referrerPolicy="no-referrer" variant="rounded" src={picture} />

				<Stack spacing={0.5}>
					<Typography>{email}</Typography>

					{!edit ? (
						<Typography variant="body2" color="black">
							{comment}
						</Typography>
					) : (
						<TextField sx={{ width: '130%' }} value={newComment} onChange={(e) => setNewComment(e.target.value)} />
					)}
				</Stack>
			</Box>

			{!edit ? (
				<Box paddingLeft="5px" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					{user.email === email ? <Button onClick={() => handleDelete()}>Delete</Button> : ''}

					{user.email === email ? <Button onClick={() => handleEditBox()}>Edit</Button> : ''}
				</Box>
			) : (
				<Box paddingLeft="5px" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<Button onClick={() => handleEdit()}>Edit Comment</Button>
					<Button onClick={() => setEdit(false)}>Cancel</Button>
				</Box>
			)}
			<Divider />

			<Box paddingLeft="5px" sx={{ display: 'flex', p: 1, gap: '10px' }}>
				<Typography sx={{}} variant="body2" color="text.secondary">
					{date && date.toDate().toDateString()}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{edited && 'Edited'}
				</Typography>
			</Box>
		</Card>
	);
};

export default Comments;
