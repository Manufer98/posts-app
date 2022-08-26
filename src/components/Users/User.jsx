import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = ({ name, numberPost, email, id, picture }) => {
	const initial = name.split('')[0].toUpperCase();
	let navigate = useNavigate();
	return (
		<Box>
			<Card sx={{ bgcolor: '#E6E3E3' }} onClick={() => navigate('/user/' + id)}>
				<CardHeader
					avatar={
						<Avatar referrerPolicy="no-referrer" src={picture} sx={{ bgcolor: 'red' }} aria-label="recipe">
							{initial}
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={name}
					subheader={email}
				/>
				{/* {<CardMedia component="img" height="600" image="https://i.pinimg.com/736x/d1/15/de/d115dec75f9cf5435339547a09a56b24.jpg" alt="Paella dish" />} */}
				<CardContent>
					<Typography variant="body2" color="#000000">
						Number of Post: {numberPost}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default User;
