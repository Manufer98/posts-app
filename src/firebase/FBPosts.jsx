import { addDoc, collection, doc, getDoc, getDocs, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { GetUser } from '../components/Login/UserData';

export const getPosts = async (email) => {
	const id = await getId(email);
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const user = { ...res.data() };

	return user.posts;
};

export const getPost = async (idd, email) => {
	const id = await getId(email);

	//Saco la al usuario con los posts
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);

	const res = await getDoc(usersCollection);
	const user = { ...res.data() };

	//console.log(user);
	const post = user.posts.filter((i) => i.id === idd);
	console.log(post);
	return post.reduce((acc, cur, i) => (acc = cur), {});
};

export const deletePost = async (id, email) => {
	const db = getFirestore();
	//saco el id del usuario
	const idUser = await getId(email);

	//agarro toda la data del usuario:
	const usersCollection = doc(db, 'users', idUser);
	const res = await getDoc(usersCollection);
	const userData = { ...res.data() };

	//borro el post seleccionado
	const index = userData.posts.findIndex((item) => item.id === id);
	userData.posts.splice(index, 1);

	//actualizo la bd
	await updateDoc(usersCollection, userData)
		.then(() => {
			console.log('salio bien');
		})
		.catch((e) => console.log('Error:', e));
};

export const addUser = async () => {
	const { name, email, picture } = GetUser();
	const db = getFirestore();
	const colleccionUsers = collection(db, 'users');
	const res = await getDocs(colleccionUsers);
	const users = res.docs.map((user) => ({ ...user.data() }.email));
	const posts = [];
	const user = {
		name,
		email,
		picture,
		posts,
	};

	const fil = users.filter((i) => i === email);

	if (fil.length === 1) {
		console.log('el mail existe en la bd:', fil);
	} else {
		addDoc(colleccionUsers, user)
			.then(({ id }) => {
				console.log(id);
			})
			.catch(() => console.log('aaa'));
		console.log('add');
	}
};

const getId = async (email) => {
	const db = getFirestore();
	const colleccionUsers = collection(db, 'users');
	const ress = await getDocs(colleccionUsers);
	const users = ress.docs.map((user) => ({ id: user.id, ...user.data() }));
	const fil = users.filter((i) => i.email === email);
	const id = fil[0].id;
	return id;
};

export const getUsersData = async () => {
	const db = getFirestore();
	const colleccionProductos = collection(db, 'users');
	const res = await getDocs(colleccionProductos);
	const users = res.docs.map((item) => ({ id: item.id, ...item.data() }));
	return users;
};

export const getUserData = async (id) => {
	console.log(id);
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const userData = { ...res.data() };
	return userData;
};
export const getAllPosts = async (email) => {
	const db = getFirestore();
	const colleccionProductos = collection(db, 'users');
	const res = await getDocs(colleccionProductos);
	const posts = res.docs.map((item) => [...item.data().posts]);
	let resultPosts = [];
	for (let i = 0; i < posts.length; i++) {
		for (let j = 0; j < posts[i].length; j++) {
			resultPosts.push(posts[i][j]);
		}
	}
	const filterPost = resultPosts.filter((i) => i.email !== email).sort((a, b) => b.date - a.date);
	return filterPost;
};

export const getNames = async (email) => {
	const users = await getUsersData();
	const names = users.map((user) => ({ id: user.id, name: user.name, email: user.email }));
	return names.filter((user) => user.email !== email);
};

export const addPost = async (title, description, email) => {
	const id = await getId(email);
	const unique_id = uuid();
	//Saco la al usuario con los posts
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const user = { ...res.data() };
	const post = {
		title,
		description,
		date: Timestamp.fromDate(new Date()),
		id: unique_id,
		email,
	};
	//agrego el post nuevo
	user.posts.push(post);

	//actualizo ese documento
	await updateDoc(usersCollection, user)
		.then(() => {})
		.catch((e) => console.log('aaa', e));
};

/* export const deleteDocument = (id) => {
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
}; */
