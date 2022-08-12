import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Item from './Item';
const HomepageItem = ({ data }) => {
	const { user } = useAuth0();
	//console.log(data);

	return <>{data && data.map((post) => <Item key={post.id} id={post.id} date={post.date} title={post.email} email={post.email} description={post.description} />)}</>;
};

export default HomepageItem;
