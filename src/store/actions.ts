import Post from '../services/posts'
import { AuthActions, LogInAction, LogOutAction, PostsActions, AddPostAction, GetPostAction } from "../types/store"


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

export const getPost = async (): Promise<GetPostAction> => {
    const post = await Post.get();
    console.log('post', post);
    return {
        action: PostsActions.GetPost,
        payload: post
    }
}

export const addNewPost = ({payload}: Pick<AddPostAction, "payload">): AddPostAction => {
    return {
        action: PostsActions.AddPost,
        payload
    }
}