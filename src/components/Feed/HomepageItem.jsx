import React from 'react';
import Item from './Item';
const HomepageItem = ({ posts }) => {
	return <>{posts && posts.map((post) => <Item key={post.id} id={post.id} date={post.date} title={post.email} email={post.email} description={post.description} picture={post.picture} />)}</>;
};

export default HomepageItem;
