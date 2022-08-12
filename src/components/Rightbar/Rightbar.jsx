import { useAuth0 } from '@auth0/auth0-react';
import { Box, StepConnector, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getNames } from '../../firebase/FBPosts';
import Item from './Item';
const Rightbar = () => {
	const [users, setUsers] = useState([]);
	const { user } = useAuth0();

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const userData = await getNames(user.email);
			setUsers(userData);
		} catch {}
	};

	return (
		<Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position="sticky">
				<Typography textAlign="center" variant="h5">
					Active Users
				</Typography>
				<StepConnector />
				<Box position="sticky">
					{users &&
						users.map((user) => {
							return <Item key={user.id} id={user.id} email={user.email} />;
						})}
				</Box>
				<StepConnector sx={{ marginTop: '5px' }} />
			</Box>
		</Box>
	);
};

export default Rightbar;
