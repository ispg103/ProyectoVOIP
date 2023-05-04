import { Posts } from "./post"

export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    user: {
        userName: string,
        email: string,
    },
    post: Posts[]
}

export enum AuthActions {
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}

export enum PostsActions {
    "AddPost" = "AddPost",
    "GetPost" = "GetPost",
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


export type Actions = LogInAction | LogOutAction | AddPostAction | GetPostAction;
