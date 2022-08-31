import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Box, Divider, Typography } from '@mui/material';
/* import TimeAgo from 'javascript-time-ago'; */

import TimeAgo from 'timeago-react';
/* // English.
import en from 'javascript-time-ago/locale/en'; */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Notifications = ({ data }) => {
	const [open, setOpen] = useState(false);

	const nowDate = new Date();
	console.log('notifications', data);
	return (
		<Box>
			<NotificationsNoneIcon sx={{ '&:hover': { cursor: 'pointer' } }} onClick={() => setOpen(!open)} />
			{open && (
				<Box
					className="dataResult"
					sx={{
						bgcolor: 'white ',
						width: { xs: '330px', md: '330px', lg: '330px' },
						position: 'fixed',
						top: { xs: 51, sm: 60 },
						right: { xs: 'calc(50% - 25px)', sm: 30 },
						maxHeight: '400px',
						borderRadius: '10px',
						p: 1,
					}}
				>
					<Typography variant="h5" sx={{ color: 'black' }}>
						Notifications
					</Typography>
					<Box>
						{data &&
							data
								.sort((a, b) => b.date - a.date)
								.map((notification) => (
									<Link
										to={'/post/' + notification.emailPost + '~' + notification.idPost}
										key={notification.idNotification}
										className="dataItem"
										style={{ color: 'black', paddingBottom: '10px', paddingTop: '10px' }}
									>
										<Avatar src={notification.picture} sx={{ bgcolor: 'red' }} aria-label="recipe" referrerPolicy="no-referrer" variant="rounded"></Avatar>
										{notification.emailUser.split('@')[0]} has commented in your post
										<Divider orientation="vertical" />
										<TimeAgo datetime={notification.date.toMillis()} />
									</Link>
								))}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Notifications;
