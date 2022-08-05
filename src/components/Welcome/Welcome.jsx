import React from 'react';
import { LoginButton } from '../Login/Login';
import './Welcome.css';
const Welcome = () => {
	return (
		<div className="container">
			<div className="left">
				<h1 id="logo">Logo</h1>
				<h1>Post Social App</h1>
				<h1>Post Social App</h1>
				<h1>Post Social App</h1>
				<h1>Post Social App</h1>
				<h1>Post Social App</h1>
			</div>
			<div className="right">
				<LoginButton />
			</div>
			{/* <header>
				<h1>Post Social App </h1>
			</header>
			<div className="container">
				<div className="welcome">
					<h1>Welcome</h1>
					<LoginButton />
				</div>
			</div> */}
		</div>
	);
};

export default Welcome;
