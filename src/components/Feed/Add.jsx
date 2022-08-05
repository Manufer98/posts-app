import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { addPost } from '../../firebase/FBPosts';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const Add = () => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const notify = () => toast.success('Post created');

	const AddPost = () => {
		addPost(title, description);
		setOpen(false);
		notify();
	};

	return (
		<>
			<Tooltip onClick={() => setOpen(true)} title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', sm: 30 } }}>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box borderRadius={4} width={400} height={380} bgcolor="white" p={3}>
					<Typography variant="h6" color="grey" textAlign={'center'}>
						Create Post
					</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
						<Typography>Title</Typography>
						<TextField value={title} onChange={(e) => setTitle(e.target.value)} />

						<Typography>Description</Typography>
						<TextField value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={5} />
					</Box>
					<Button
						sx={{ width: '100%', bgcolor: 'red', borderRadius: '6px' }}
						onClick={() => {
							AddPost();
						}}
					>
						Create
					</Button>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
