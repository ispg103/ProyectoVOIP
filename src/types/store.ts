import { Posts } from "./post"
import { Home } from "./home"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    post: Posts[]
    home: Home[]
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostsActions {
    "AddPost" = "AddPost",
    "GetPost" = "GetPost",
}

export enum HomeActions {
    "AddHome" = "AddHome",
    "GetHome" = "GetHome",
}

export interface LogInAction {
    action: AuthActions.LOGIN,
    payload: Pick<AppState, "user">
}

export interface LogOutAction {
    action: AuthActions.LOGOUT,
    payload: void
}

export interface AddPostAction {
    action: PostsActions.AddPost,
    payload: Posts
}


export interface GetPostAction {
    action: PostsActions.GetPost,
    payload: Posts[]
}

export interface AddHomeAction {
    action: HomeActions.AddHome,
    payload: Home
}


export interface GetHomeAction {
    action: HomeActions.GetHome,
    payload: Home[]
}


export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostAction | AddHomeAction | GetHomeAction;
