import Item from './Item';

const CardItem = ({ posts, picture }) => {
	//console.log(posts);
	return (
		<>
			{posts &&
				posts
					.sort((a, b) => b.date - a.date)
					.map((post) => <Item email={post.email} key={post.id} id={post.id} date={post.date} title={post.email} description={post.description} picture={picture} />)}
		</>
	);
};

export default CardItem;
