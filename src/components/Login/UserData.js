import { useAuth0 } from '@auth0/auth0-react';

export const GetName = () => {
	
	const { user,isAuthenticated} = useAuth0();
	return(
	isAuthenticated ? 
	 user.given_name : ""
	
	)

};
export const GetEmail = () => {
	
	const { user,isAuthenticated} = useAuth0();
	return(
	isAuthenticated ? 
	 user.email : ""
	
	)

};

export const GetUser = () => {
	
	const { user,isAuthenticated} = useAuth0();
	return(
	isAuthenticated ? 
	 user : {}
	
	)

};

