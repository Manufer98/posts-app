import { useAuth0 } from '@auth0/auth0-react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { deletePost } from '../../firebase/FBPosts';
const Item = ({ id, title, description, date, email, picture }) => {
	const { user } = useAuth0();
	const initial = title.split('')[0].toUpperCase();

	return (
		<>
			<Card /* sx={{ width: '50%' }} */>
				<CardHeader
					avatar={
						<Avatar src={picture} sx={{ bgcolor: 'red' }} aria-label="recipe">
							{initial}
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
					<Button>
						<Link style={{ textDecoration: 'none' }} to={'/post/' + email + '~' + id}>
							Detalle
						</Link>
					</Button>
					{title === user.email ? (
						<Button
							onClick={() => {
								deletePost(id, user.email);
								toast.success('Post deleted');
							}}
						>
							Delete
						</Button>
					) : (
						''
					)}
				</CardActions>
			</Card>
		</>
	);
};

export default Item;
