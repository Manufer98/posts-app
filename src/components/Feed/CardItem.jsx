import Item from './Item';

const CardItem = ({ pictureRedux, postsRedux }) => {
	const posts = [...postsRedux];

	return (
		<>
			{posts &&
				posts
					.sort((a, b) => b.date - a.date)
					.map((post) => (
						<Item edited={post.edited} email={post.email} key={post.id} id={post.id} date={post.date} title={post.email} description={post.description} picture={pictureRedux} />
					))}
		</>
	);
};

export default CardItem;
