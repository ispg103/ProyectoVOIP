export type Observer = { render: () => void } & HTMLElement;
import { Posts } from "./post"
import { Screens } from "./navigation";

export type AppState = {
    Post: Posts[];
    screens: Screens;
    user: string;
  };

  export enum UserActions {
    "SET_USER" = "SET_USER",
  }

  export enum PostActions {
    "SAVE_POST" = "SAVE_POST",
    "GET_POST" = "GET_POST",
  }

  export enum NavigateActions {
    "NAVIGATE" = "NAVIGATE",
  }

  export interface Navigate {
    action: NavigateActions.NAVIGATE;
    payload: Screens
  }

  export interface SavePost {
    action: PostActions.SAVE_POST;
    payload: Posts
  }
  
  export interface GetPost {
    action: PostActions.GET_POST;
    payload: Posts[]
  }

  export interface SetUser{
    action: UserActions.SET_USER;
    payload: string
}

  export type Actions = Navigate | SavePost | GetPost | SetUser ;