import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { getNames } from '../../firebase/FBPosts';
import SearchBar from './SearchBar';
import User from './User';

const Users = () => {
	const [users, setUsers] = useState([]);
	const { user } = useAuth0();
	const [load, setLoad] = useState(true);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const userData = await getNames(user.email);
			setUsers(userData);
			setLoad(false);
		} catch {
			setLoad(false);
		}
	};
	return (
		<Box bgcolor="" flex={4} p={2} sx={{ display: 'flex', gap: '10px', flexDirection: 'column', minHeight: 'calc(100vh - 96px)' }}>
			<SearchBar />
			Users
			<div className={load ? 'loading' : ''}></div>
			{users && users.map((user) => <User key={user.id} name={user.name} email={user.email} picture={user.picture} id={user.id} numberPost={user.posts.length} />)}
		</Box>
	);
};

export default Users;
