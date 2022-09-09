import { useAuth0 } from '@auth0/auth0-react';
import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addPost } from '../../firebase/FBPosts';
import { AddPostRedux } from '../redux/myPostsSlice';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const Add = () => {
	const [open, setOpen] = useState(false);
	const [description, setDescription] = useState('');
	const { user } = useAuth0();
	const dispatch = useDispatch();

	const AddPost = async () => {
		if (description.length === 0) {
			toast.error('Write a description');
		} else {
			/* const post = {
				name: user.name,
				description,
				email: user.email,
				picture: user.picture,
			};*/

			const a = await addPost(user.name, description, user.email, user.picture);
			dispatch(AddPostRedux(a));

			setOpen(false);
			toast.success('Post created');
			/* window.location.reload(); */
		}
	};

	return (
		<>
			<Tooltip onClick={() => setOpen(true)} title="Add" sx={{ bgcolor: 'primary ', position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', sm: 30 } }}>
				<Fab color="info" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box borderRadius={4} width={400} height={380} bgcolor="white" p={3}>
					<Typography variant="h6" color="grey" textAlign={'center'}>
						Create Post
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
						{/* <Typography>Title</Typography>
						<TextField value={title} onChange={(e) => setTitle(e.target.value)} /> */}

						<Typography>Description</Typography>
						<TextField value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={5} />
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
							AddPost();
						}}
					>
						<Typography color="white">Create</Typography>
					</Button>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
