import Item from './Item';

const CardItem = ({ data }) => {
	return <>{data && data.sort((a, b) => b.date - a.date).map((post) => <Item key={post.id} id={post.id} date={post.date} title={post.title} description={post.description} />)}</>;
};

export default CardItem;
