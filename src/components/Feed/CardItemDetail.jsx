import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../firebase/FBPosts';

const CardItemDetail = ({ id, title, description, date }) => {
	let navigate = useNavigate();
	const notify = () => toast.success('Post deleted', { duration: 4000 });

	const deleteP = (id) => {
		try {
			deletePost(id);

			navigate('/');
			notify();
		} catch (e) {
			console.log('aca', e, id);
		}
	};

	return (
		<>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={title}
					subheader={date && date.toDate().toDateString()}
				/>
				{/* {<CardMedia component="img" height="600" image="https://i.pinimg.com/736x/d1/15/de/d115dec75f9cf5435339547a09a56b24.jpg" alt="Paella dish" />} */}
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
					</IconButton>
					<IconButton aria-label="share">
						<ShareIcon />
					</IconButton>
					<button onClick={() => deleteP(id)}>Delete</button>
				</CardActions>
			</Card>
		</>
	);
};

export default CardItemDetail;
