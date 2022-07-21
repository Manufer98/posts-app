import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
const Item = ({ title, description, date }) => {
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
				</CardActions>
			</Card>
		</>
	);
};

export default Item;
