import { Actions, AppState, AuthActions, PostsActions, HomeActions } from "../types/store";

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

        case HomeActions.AddHome:
            return {
                ...currentState,
                home: [
                    payload,
                    ...currentState.post,
                    ]
                }
            
        case HomeActions.GetHome:
            return {
                ...currentState,
                home: payload
                }
    
        default:
            return currentState;
    }
}