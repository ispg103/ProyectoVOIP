import { Posts } from "../types/post";
import { User } from "../types/user";
import { Actions, NavigateActions, PostActions, UserActions, SetUser, AddUser} from "../types/store";
import firebase from "../utils/firebase";
import { Screens } from "../types/navigation";

export const setUserCredentials = (user: string): SetUser => {
  return {
    action: UserActions.SET_USER,
    payload: user,
  };
};

export const addUser = (user: User): AddUser =>{
  
  return{
      action: UserActions.ADD_USER,
      payload: user,
  };
};

export const navigate = (screen: Screens) => {
  return {
    action: NavigateActions.NAVIGATE,
    payload: screen,
  };
};


export const SavePost = async (post: Posts): Promise<Actions>=>{
  await firebase.SavePost(post);
  return{
      action: PostActions.SAVE_POST,
      payload: post,
  }
}

export const getPosts = async(): Promise<Actions>=>{
    const Posts = await firebase.GetPost();
    return{
        action: PostActions.GET_POST,
        payload: Posts,
    }
}