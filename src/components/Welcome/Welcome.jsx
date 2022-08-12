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
		</div>
	);
};

export default Welcome;
