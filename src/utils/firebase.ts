import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot, setDoc, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { Posts } from "../types/post";
import { User } from "../types/user"; 
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const storage = getStorage()

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, file.name);
  const res = await uploadBytes(storageRef, file);
  console.log("file uploaded", res);
};

const getFile = async (name: string) => {
  let urlimg = '';

  await getDownloadURL(ref(storage, name))
  .then((url) => {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    urlimg = url;
  
  })
  .catch((error) => {
    
  });

  console.log(urlimg);
  return urlimg;
}

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
}) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
};

const savePostInDB = async (post: Posts) => {
  try {
      await addDoc(collection(db, "Posts"), post);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
};

const getPostFromDB = async (): Promise<Posts[]> => {
  console.log("Getting posts...")
  const photo: Posts[] = [];
  const querySnapshot = await getDocs(collection(db, "Posts"));
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      photo.push({
          ...doc.data(),
      } as Posts)
  });
  return photo;
};

export default {
  savePostInDB,
  getPostFromDB,
  registerUser,
  loginUser,
  onAuthStateChanged,
  uploadFile,
  getFile
};