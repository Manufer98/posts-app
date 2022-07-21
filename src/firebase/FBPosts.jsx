import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const coleccion = 'posts';

export const getPosts = async () => {
	const db = getFirestore();
	const colleccionProductos = collection(db, coleccion);
	const res = await getDocs(colleccionProductos);

	//console.log(res.docs.map((i) => i.data()));
	const posts = res.docs.map((item) => ({ id: item.id, ...item.data() }));
	//dateCreated.toDate().toDateString();
	//console.log(posts[0].date.toDate().toDateString());
	return posts;
};

export const addPost = (title, description) => {
	const db = getFirestore();
	const orderCollection = collection(db, coleccion);
	const post = {
		title: title,
		description: description,
		/* date: Date.now(), */
		/* date:Date.now() */
	};
	addDoc(orderCollection, post)
		.then(({ id }) => {
			console.log(id);
		})
		.catch(() => console.log('aaa'));
};
