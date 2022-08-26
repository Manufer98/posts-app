import { useAuth0 } from '@auth0/auth0-react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, IconButton, Stack, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addComment } from '../../firebase/FBPosts';

import Comments from '../Comments/Comments';

const CardItemDetail = ({ comments, id, title, description, date, email, emailUser, picture, edited }) => {
	let navigate = useNavigate();
	const [comment, setComment] = useState('');
	const { user } = useAuth0();

	const handleComment = () => {
		try {
			if (comment.length === 0) {
				toast.error('You must comment something');
			} else {
				addComment(id, comment, email, user.email, user.picture);
				setComment('');
				toast.success('Comment Posted');
			}
		} catch (e) {
			console.log('Error:', e);
		}
	};

	return (
		<Box>
			<Typography variant="h3">Post</Typography>
			<Card sx={{ marginBottom: '20px' }}>
				<CardHeader
					avatar={<Avatar referrerPolicy="no-referrer" src={picture} sx={{ bgcolor: 'red' }} aria-label="recipe"></Avatar>}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={email}
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
				</CardActions>
			</Card>
			<Typography variant="h6">Comments</Typography>
			<Stack gap="10px">
				{comments &&
					comments.map((comment) => (
						<Comments
							key={comment.id}
							editt={false}
							picture={comment.picture}
							emailUser={emailUser}
							idUser={id}
							id={comment.id}
							date={comment.date}
							comment={comment.comment}
							email={comment.email}
							edited={comment.edited}
						/>
					))}
			</Stack>
			<Typography marginTop="10px" marginBottom="10px" variant="h6">
				Post your comment
			</Typography>
			<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1, bgcolor: 'white', borderRadius: '2px' }}>
				<TextField value={comment} variant="outlined" size="small" sx={{ bgcolor: 'white', width: '90%' }} onChange={(e) => setComment(e.target.value)}></TextField>
				<Button onClick={() => handleComment()}>Comment</Button>
			</Stack>
		</Box>
	);
};

export default CardItemDetail;
