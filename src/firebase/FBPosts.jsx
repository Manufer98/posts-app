import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, Timestamp } from 'firebase/firestore';

const coleccion = 'posts';

export const getPosts = async () => {
	const db = getFirestore();
	const colleccionProductos = collection(db, coleccion);
	const res = await getDocs(colleccionProductos);
	const posts = res.docs.map((item) => ({ id: item.id, ...item.data() }));
	return posts;
};
export const getPost = async (id) => {
	const db = getFirestore();
	const colleccionProductos = doc(db, coleccion, id);
	const res = await getDoc(colleccionProductos);
	const post = { id: res.id, ...res.data() };
	return post;
};

export const addPost = (title, description) => {
	const db = getFirestore();
	const orderCollection = collection(db, coleccion);
	const post = {
		title: title,
		description: description,
		date: Timestamp.fromDate(new Date()),
	};

	addDoc(orderCollection, post)
		.then(({ id }) => {
			console.log(id);
		})
		.catch(() => console.log('aaa'));
};

export const deletePost = (id) => {
	console.log(id);
	const db = getFirestore();
	const docRef = doc(db, coleccion, id);

	deleteDoc(docRef)
		.then(() => {
			console.log('Entire Document has been deleted successfully.');
		})
		.catch((error) => {
			console.log(error);
		});
};
