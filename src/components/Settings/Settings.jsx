import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/userSlice';

const Settings = () => {
	const [name, setName] = useState('John');
	const [email, setEmail] = useState('john@gmail.com');
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleUpdate = (e) => {
		e.preventDefault();
		dispatch(update({ name, email }));
	};

	return (
		<Box bgcolor="pink" flex={4} p={2} sx={{ minHeight: '89.65vh' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<h3>Update your acount</h3>
				<label>Username</label>
				<input placeholder={user.name} type="text" onChange={(e) => setName(e.target.value)} />
				<label>Email</label>
				<input placeholder={user.email} type="text" onChange={(e) => setEmail(e.target.value)} />
				<button onClick={handleUpdate}>Update</button>
			</Box>
		</Box>
	);
};

export default Settings;
