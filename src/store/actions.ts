import { Posts } from "../types/post";
import { Actions, NavigateActions, PostActions, AuthActions, LogInAction, LogOutAction} from "../types/store";
import firebase from "../utils/firebase";
import { Screens } from "../types/navigation";

export const navigate = (screen: Screens) => {
  return {
    action: NavigateActions.NAVIGATE,
    payload: screen,
  };
};

export const logOut = (): LogOutAction => {
  return {
      action: AuthActions.LOGOUT,
      payload: undefined
  }
}

export const logIn = ({payload}: Pick<LogInAction, "payload">): LogInAction => {
  return {
      action: AuthActions.LOGIN,
      payload
  }
}

export const savePost = async (post: Posts): Promise<Actions> => {
  await firebase.savePostInDB(post);
  return{
      action: PostActions.SAVE_POST,
      payload: post,
  }
}

export const getPost = async (): Promise<Actions> => {
  const post = await firebase.getPostFromDB();
  return{
      action: PostActions.GET_POST,
      payload: post,
  }
}