import { addDoc, collection, doc, getDoc, getDocs, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { GetUser } from '../components/Login/UserData';

export const getPosts = async (email) => {
	const id = await getId(email);
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);

	const { posts } = { ...res.data() };
	const { picture } = { ...res.data() };

	const ps = { posts, picture };

	//console.log(ps);
	return ps;
};

export const getNotifications = async (email) => {
	const id = await getId(email);
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);

	const { notifications } = { ...res.data() };
	const { picture } = { ...res.data() };

	const ns = { notifications, picture };
	return ns;
};

export const getPost = async (idd, email) => {
	const id = await getId(email);
	//Saco la al usuario con los posts
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const user = { ...res.data() };
	const post = user.posts.filter((i) => i.id === idd);
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
export const editPost = async (id, email, newDescription) => {
	const db = getFirestore();
	//saco el id del usuario
	const idUser = await getId(email);

	//agarro toda la data del usuario:
	const usersCollection = doc(db, 'users', idUser);
	const res = await getDoc(usersCollection);
	const userData = { ...res.data() };

	//borro el post seleccionado
	//const index = userData.posts.findIndex((item) => item.id === id);
	userData.posts.filter((item) => item.id === id).reduce((acc, cur, i) => (acc = cur), {}).description = newDescription;
	userData.posts.filter((item) => item.id === id).reduce((acc, cur, i) => (acc = cur), {}).edited = true;
	console.log(userData.posts.filter((item) => item.id === id).reduce((acc, cur, i) => (acc = cur), {}).edited);
	//userData.posts.splice(index, 1);

	//actualizo la bd
	await updateDoc(usersCollection, userData)
		.then(() => {
			console.log('se edito bien');
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
	const notifications = [];
	const user = {
		name,
		email,
		picture,
		posts,
		notifications,
	};
	const fil = users.filter((i) => i === email);
	if (fil.length === 1) {
		//console.log('el mail existe en la bd:', fil);
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

export const getSearchPosts = async () => {
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

	return resultPosts;
};

export const getNames = async (email) => {
	const users = await getUsersData();
	const usersData = users.map((user) => ({ id: user.id, name: user.name, email: user.email, picture: user.picture, posts: user.posts }));
	return usersData.filter((user) => user.email !== email);
};
export const getNamesProfile = async (email) => {
	const users = await getUsersData();
	const usersData = users.map((user) => ({ id: user.id, name: user.name, email: user.email, picture: user.picture, posts: user.posts }));
	return usersData.filter((user) => user.email === email);
};

export const addPost = async (title, description, email, picture) => {
	const id = await getId(email);
	const unique_id = uuid();
	//Saco la al usuario con los posts
	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const user = { ...res.data() };
	const comments = [];
	const edited = false;
	const post = {
		title,
		description,
		date: Timestamp.fromDate(new Date()),
		id: unique_id,
		email,
		comments,
		picture,
		edited,
	};
	//agrego el post nuevo

	user.posts.push(post);

	//actualizo ese documento
	await updateDoc(usersCollection, user)
		.then(() => {})
		.catch((e) => console.log('aaa', e));
};
export const addComment = async (idd, comment, emailPost, emailUser, picture) => {
	const id = await getId(emailPost);
	const unique_id = uuid();
	//Saco la al usuario con los posts

	const db = getFirestore();
	const usersCollection = doc(db, 'users', id);
	const res = await getDoc(usersCollection);
	const user = { ...res.data() };
	const email = emailUser;
	const edited = false;

	const Newcomment = {
		comment,
		date: Timestamp.fromDate(new Date()),
		id: unique_id,
		email,
		picture,
		edited,
	};

	const newNotification = {
		date: Timestamp.fromDate(new Date()),
		emailPost,
		emailUser,
		idNotification: unique_id,
		idPost: idd,
		picture,
	};

	//agrego el comentario nuevo
	user.notifications.push(newNotification);

	user.posts
		.filter((post) => post.id === idd)
		.reduce((acc, cur, i) => (acc = cur), {})
		.comments.push(Newcomment);
	//actualizo ese documento
	await updateDoc(usersCollection, user)
		.then(() => {})
		.catch((e) => console.log('aaa', e));
};

export const deleteComment = async (idUserPost, idComment, email) => {
	const db = getFirestore();
	//saco el id del usuario
	const idUser = await getId(email);

	//agarro toda la data del usuario:
	const usersCollection = doc(db, 'users', idUser);
	const res = await getDoc(usersCollection);
	const userData = { ...res.data() };

	const index = userData.posts
		.filter((post) => post.id === idUserPost)
		.reduce((acc, cur, i) => (acc = cur), {})
		.comments.findIndex((comment) => comment.id === idComment);

	userData.posts
		.filter((post) => post.id === idUserPost)
		.reduce((acc, cur, i) => (acc = cur), {})
		.comments.splice(index, 1);

	await updateDoc(usersCollection, userData)
		.then(() => {
			console.log('salio bien');
		})
		.catch((e) => console.log('Error:', e));
};

export const editComment = async (idUserPost, idComment, email, Newcomment) => {
	const db = getFirestore();
	//saco el id del usuario
	const idUser = await getId(email);

	//agarro toda la data del usuario:
	const usersCollection = doc(db, 'users', idUser);
	const res = await getDoc(usersCollection);
	const userData = { ...res.data() };

	userData.posts
		.filter((post) => post.id === idUserPost)
		.reduce((acc, cur, i) => (acc = cur), {})
		.comments.filter((comment) => comment.id === idComment)
		.reduce((acc, cur, i) => (acc = cur), {}).comment = Newcomment;

	userData.posts
		.filter((post) => post.id === idUserPost)
		.reduce((acc, cur, i) => (acc = cur), {})
		.comments.filter((comment) => comment.id === idComment)
		.reduce((acc, cur, i) => (acc = cur), {}).edited = true;

	await updateDoc(usersCollection, userData)
		.then(() => {
			console.log('salio bien');
		})
		.catch((e) => console.log('Error:', e));
};
