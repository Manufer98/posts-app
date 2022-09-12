import React from 'react';
import Item from './Item';
const HomepageItem = ({ postsRedux }) => {
	const posts = [...postsRedux];
	return (
		<>
			{posts &&
				posts.map((post) => (
					<Item edited={post.edited} key={post.id} id={post.id} date={post.date} title={post.email} email={post.email} description={post.description} picture={post.picture} />
				))}
		</>
	);
};

export default HomepageItem;
