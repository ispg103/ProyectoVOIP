import { NavigateActions, PostActions, UserActions } from "../types/store";
import { AppState } from "../types/store";
import { Actions } from "../types/store";

export const reducer = (actions: Actions, appState: AppState) => {
  const {action, payload} = actions


  switch (action) {
    case PostActions.SAVE_POST:
      appState.Post = [...appState.Post, payload]
      return appState

    case PostActions.GET_POST:
      appState.Post = payload
      return appState

    case NavigateActions.NAVIGATE:
      appState.screens = payload;
      return appState

    case UserActions.SET_USER:
      appState.user = payload;
      return appState

    case UserActions.ADD_USER:
      appState.userInfo = payload
      return appState

    default:
        return appState
    }
}