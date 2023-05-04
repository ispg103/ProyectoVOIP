import { Actions, AppState, AuthActions, PostsActions } from "../types/store";

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
    const { action, payload } = currentAction; 

    switch (action) {
        case AuthActions.LOGIN:
            return {
                ...currentState,
                user: payload.user
            }

        case AuthActions.LOGOUT:
            return {
                ...currentState,
                user: {
                    userName: "",
                    email: ""
                }
            }
            
        case PostsActions.AddPost:
            return {
                ...currentState,
                post: [
                    payload,
                    ...currentState.post,
                ]
            }
        
        case PostsActions.GetPost:
            return {
                ...currentState,
                post: payload
            }
    
        default:
            return currentState;
    }
}