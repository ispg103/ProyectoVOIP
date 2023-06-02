import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Posts } from "../types/post";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import posts from "../services/posts";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const registerUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    alert("welcome " + userCredential.user.email);
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    return false;
  }
};

/////////////////////// DB
const db = getFirestore(app);

const addPost = async () => {
  try {
    const where = collection(db, "products");
    await addDoc(where, posts);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

const getPost = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const transformed: Array<Posts> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Posts, "id"> = doc.data() as any;
    transformed.push({ ...data });
  });

  return transformed;
};

export default {
  addPost,
  getPost,
  registerUser,
  loginUser,
};