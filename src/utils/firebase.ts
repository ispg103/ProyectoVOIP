import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { Posts } from "../types/post";
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

const SavePost = async (post: Omit<Posts, "id">) => {
  try {
    const where = collection(db, "posts");
    await addDoc(where, { ...post, createdAt: new Date() });
    console.log("Added succesfully");
  } catch (error) {
    console.error(error);
  }
};


const GetPost = async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt"));
  const querySnapshot = await getDocs(q);
  const transformed: Array<Posts> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Posts, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

export default {
  SavePost,
  GetPost,
  registerUser,
  loginUser,
  onAuthStateChanged,
  uploadFile,
  getFile
};