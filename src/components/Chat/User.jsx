import { Avatar, Box, Card, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const User = ({ name, numberPost, email, id, picture }) => {
	const initial = name.split('')[0].toUpperCase();
	let navigate = useNavigate();
	return (
		<Box>
			<Card sx={{ bgcolor: '#E6E3E3' }} onClick={() => navigate('/chat/' + id)}>
				<CardHeader
					avatar={
						<Avatar referrerPolicy="no-referrer" src={picture} sx={{ bgcolor: 'red' }} aria-label="recipe">
							{initial}
						</Avatar>
					}
					title={name}
					subheader={email}
				/>
				{/* 
				<CardContent></CardContent> */}
			</Card>
		</Box>
	);
};

export default User;
