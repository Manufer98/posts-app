import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost } from '../../firebase/FBPosts';
import { EditPostsRedux } from '../redux/myPostsSlice';
import CardItemContainer from './CardItemContainer';
const Edit = () => {
	const [open, setOpen] = useState(true);
	const { id } = useParams();
	const email = id.split('~')[0];
	const idPost = id.split('~')[1];
	const oldDescription = id.split('~')[2];
	const [description, setDescription] = useState(oldDescription);
	const dispatch = useDispatch();

	let navigate = useNavigate();
	//console.log(description);

	useEffect(() => {
		setOpen(true);
		return () => {
			setOpen(true);
		};
	}, []);

	return (
		<Box bgcolor="" flex={4} p={2}>
			<CardItemContainer />
			<Modal
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
				open={open}
				onClose={() => {
					setOpen(false);
					navigate('/myposts');
				}}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box borderRadius={4} width={400} height={380} bgcolor="white" p={3}>
					<Typography variant="h6" color="grey" textAlign={'center'}>
						Edit Post
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
						<Typography>Description</Typography>
						<TextField key={idPost} value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={5} />
					</Box>
					<Button
						sx={{
							width: '100%',
							bgcolor: '#0c5eed',
							borderRadius: '6px',
							'&:hover': {
								background: '#0755de',
							},
						}}
						onClick={() => {
							if (description.length > 0) {
								try {
									editPost(idPost, email, description);
									const asd = { idPost, description };
									dispatch(EditPostsRedux(asd));
									setOpen(false);
									toast.success('Your post was succesfully edited');
									navigate('/myposts');
								} catch (e) {
									console.log('error', e);
								}
							} else {
								toast.error('Write a description');
							}
						}}
					>
						<Typography color="white">Edit Post</Typography>
					</Button>
				</Box>
			</Modal>
		</Box>
	);
};

export default Edit;
