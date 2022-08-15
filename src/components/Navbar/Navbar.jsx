import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SignpostIcon from '@mui/icons-material/Signpost';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../Login/Logout';
const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: '#e64588',
});
const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '50%',
}));

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
	const name = useSelector((state) => state.user.name);
	const [open, setOpen] = useState(false);
	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
					Posts App
				</Typography>

				<SignpostIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder="search..." />
				</Search>

				<Icons>
					<Badge
						sx={{
							'& .MuiBadge-badge': {
								backgroundColor: '#fa6400',
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
								backgroundColor: '#fa6400',
							},
						}}
						badgeContent={5}
						color="primary"
					>
						<NotificationsNoneIcon />
					</Badge>
					<Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} />
				</Icons>
				<UserBox onClick={() => setOpen(true)}>
					<Avatar sx={{ width: 30, height: 30 }} />
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
