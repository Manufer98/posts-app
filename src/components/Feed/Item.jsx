import { useAuth0 } from '@auth0/auth0-react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Modal, styled, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../firebase/FBPosts';
import { DeletePostsRedux } from '../redux/myPostsSlice';
const Item = ({ id, title, description, date, email, picture, edited }) => {
	const { user } = useAuth0();
	const initial = title.split('')[0].toUpperCase();
	const [open, setOpen] = useState(false);
	const [descriptionn, setDescriptionn] = useState(description);
	const dispatch = useDispatch();
	const StyledModal = styled(Modal)({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	});

	const AddPost = () => {};
	const hanldeEdit = () => {
		console.log('asd');
	};

	const handleDelete = async () => {
		const a = await deletePost(id, user.email);
		dispatch(DeletePostsRedux(a));
		toast.success('Post deleted');
	};

	return (
		<>
			<Card>
				<CardHeader
					avatar={<Avatar referrerPolicy="no-referrer" src={picture} sx={{ bgcolor: 'red' }} aria-label="recipe"></Avatar>}
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
					<Button>
						<Link style={{ textDecoration: 'none' }} to={'/post/' + email + '~' + id}>
							Detail
						</Link>
					</Button>

					{title === user.email ? (
						<>
							<Button onClick={() => handleDelete()}>Delete</Button>
							<Button>
								<Link style={{ textDecoration: 'none' }} to={'/edit/' + email + '~' + id + '~' + descriptionn}>
									Edit
								</Link>
							</Button>
						</>
					) : (
						''
					)}
					<Divider orientation="vertical" />

					<Typography variant="body2" color="text.secondary">
						{edited && 'Edited'}
					</Typography>
				</CardActions>
			</Card>
		</>
	);
};

export default Item;
