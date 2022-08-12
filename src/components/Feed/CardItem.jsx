import Item from './Item';

const CardItem = ({ data }) => {
	return <>{data && data.sort((a, b) => b.date - a.date).map((post) => <Item email={post.email} key={post.id} id={post.id} date={post.date} title={post.email} description={post.description} />)}</>;
};

export default CardItem;
