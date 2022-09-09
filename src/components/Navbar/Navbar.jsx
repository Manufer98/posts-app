import MailIcon from '@mui/icons-material/Mail';
import SignpostIcon from '@mui/icons-material/Signpost';
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotifications, getSearchPosts } from '../../firebase/FBPosts';
import { LogoutButton } from '../Login/Logout';
import { InitalNotifications, InitalPicture } from '../redux/notificationsSlice';
import Notifications from './Notifications';
import SearchBar from './SearchBar';
const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: '#e64588',
});

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '15px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

const Navbar = () => {
	const [posts, setPosts] = useState([]);
	const [notifications, setNotifications] = useState([]);
	const name = useSelector((state) => state.user.name);
	const [open, setOpen] = useState(false);

	const notificationsRedux = useSelector((state) => state.notifications.notifications);
	const pictureRedux = useSelector((state) => state.notifications.picture);
	const userEmail = useSelector((state) => state.user.email);
	const dispatch = useDispatch();

	useEffect(() => {
		getData();
	}, [userEmail]);

	const getData = async () => {
		try {
			const posts = await getSearchPosts();
			setPosts(posts);

			const notifications = await getNotifications(userEmail);

			dispatch(InitalNotifications(notifications.notifications));
			dispatch(InitalPicture(notifications.picture));
		} catch (e) {
			console.log('error', e);
		}
	};

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
					Posts App
				</Typography>

				<SignpostIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

				<Box sx={{ marginRight: { xs: '0px', sm: '0px', md: '50px', xl: '240px' } }}>
					<SearchBar data={posts} />
				</Box>

				<Icons>
					<Badge
						sx={{
							'& .MuiBadge-badge': {
								backgroundColor: 'info',
							},
						}}
						badgeContent={4}
						color="primary"
					>
						<MailIcon />
					</Badge>

					<Badge
						sx={{
							'& .MuiBadge-badge': {
								backgroundColor: 'info',
							},
						}}
						/* badgeContent={notifications ? notifications.notifications.length : 0} */
						badgeContent={5}
						color="primary"
					>
						<Notifications data={notificationsRedux} picture={pictureRedux} />
					</Badge>
					<Avatar referrerPolicy="no-referrer" src={pictureRedux} onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} />
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar referrerPolicy="no-referrer" src={pictureRedux} sx={{ width: 30, height: 30 }} />
					<Typography>{name}</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<MenuItem>
					<Link style={{ textDecoration: 'none' }} to={'/'}>
						Homepage
					</Link>
				</MenuItem>
				<MenuItem>
					<Link style={{ textDecoration: 'none' }} to={'/myposts'}>
						My Posts
					</Link>
				</MenuItem>
				<MenuItem>
					<Link style={{ textDecoration: 'none' }} to={'/profile'}>
						Profile
					</Link>
				</MenuItem>
				<LogoutButton />
			</Menu>
		</AppBar>
	);
};

export default Navbar;
