export type Observer = { render: () => void } & HTMLElement;
import { Posts } from "./post"
import { User } from "./user";
import { Screens } from "./navigation";

export type AppState = {
    Post: Posts[];
    screens: Screens;
    user: string;
    userInfo: User;
  };

  export enum PostActions {
    "SAVE_POST" = "SAVE_POST",
    "GET_POST" = "GET_POST",
  }

  export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

  export enum NavigateActions {
    "NAVIGATE" = "NAVIGATE",
  }

  export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
  action: AuthActions.LOGOUT,
  payload: void
}

  export interface Navigate {
    action: NavigateActions.NAVIGATE;
    payload: Screens
  }

  export interface SavePostAction {
    action: PostActions.SAVE_POST;
    payload: Posts
  }
  
  export interface GetPostAction {
    action: PostActions.GET_POST;
    payload: Posts[]
  }

  export type Actions = Navigate | SavePostAction | GetPostAction ;