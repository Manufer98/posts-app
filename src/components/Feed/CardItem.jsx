import Item from './Item';

const CardItem = ({ data }) => {
	return <>{data && data.map((post) => <Item key={post.id} date={post.date} title={post.title} description={post.description} />)}</>;
};

export default CardItem;
