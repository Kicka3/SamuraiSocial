import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import messagesReducer from "./messages-reducer/messages-reducer";
import sideBarReducer from "./sideBar-reducer/side-bar-reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    message: messagesReducer,
    sidebar: sideBarReducer,
});
export const store = createStore(rootReducer);

export type RootReduxStoreType = ReturnType<typeof rootReducer>

export type StoreType = typeof store;

//@ts-ignore
window.store = store;