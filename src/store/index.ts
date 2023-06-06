import Storage, { PersistanceKeys } from "../utils/storage";
import { Actions, AppState, Observer } from "../types/store";
import { Screens } from "../types/navigation";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { navigate } from "./actions";
  
//onAuthStateChanged(auth, async (u: any) => {
  //console.log('user', u)
  //if (u) {
    //u.email !== null ? dispatch(setUserCredentials(u)): '';
    //appState.userInfo.uid = u.uid
    //appState.userInfo.email = u.email
    //const Name = String(u.email).slice(0, -10)
    //appState.userInfo.name = Name
    //dispatch(navigate(Screens.HOME));
  //} else {
    //dispatch(navigate(Screens.DASHBOARD));
  //}
//});

const emptyState: AppState = {
  Post: [],
  screens: Screens.DASHBOARD,
  user: "",
  userInfo: {
    email: "",
    password: "",
  }
};

export let appState = Storage.get<AppState>({
  key: PersistanceKeys.STORE,
  defaultValue: emptyState,
});

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
  Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  appState = newState;
  persistStore(newState);
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};