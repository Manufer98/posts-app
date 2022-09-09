import Item from '../Feed/Item';

const CardItem = ({ posts, picture }) => {
	console.log(posts);
	return (
		<>
			{posts &&
				posts
					.sort((a, b) => b.date - a.date)
					.map((post) => <Item edited={post.edited} email={post.email} key={post.id} id={post.id} date={post.date} title={post.email} description={post.description} picture={picture} />)}
		</>
	);
};

export default CardItem;
