import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer/profile-reducer";
import messagesReducer from "./messages-reducer/messages-reducer";
import {usersReducer} from "./users-reducer/users-reducer";
import {authReducer} from "./auth-reducer/auth-reducer";
import {appReducer} from "./app-reducer/app-reducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootReduxStoreType = ReturnType<typeof rootReducer>


export type StoreType = typeof store;

//@ts-ignore
window.store = store;

