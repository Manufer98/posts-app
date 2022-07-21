import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Fab, Modal, styled, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { addPost } from '../../firebase/FBPosts';

const StyledModal = styled(Modal)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip onClick={() => setOpen(true)} title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', sm: 30 } }}>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box borderRadius={4} width={400} height={280} bgcolor="white" p={3}>
					<Typography variant="h6" color="grey" textAlign={'center'}>
						Create Post
					</Typography>
					<Button onClick={() => addPost()}>Subila</Button>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
