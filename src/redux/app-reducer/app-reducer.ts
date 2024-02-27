import {Dispatch} from "redux";
import {getAuthUserDataTC} from "../auth-reducer/auth-reducer";

type InitialStateType = typeof initialState;

const initialState = {
    initialized: false
}

type AppReducerActionsType = InitialedSuccessAC

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case 'INITIALED-SUCCESS': {
            return {...state, initialized: true}
        }
        default:
            return state;
    }
};

//Actions
type  InitialedSuccessAC = ReturnType<typeof initialedSuccessAC>
export const initialedSuccessAC = () => {
    return {
        type: 'INITIALED-SUCCESS',
    } as const
}

//Thunks
export const InitializeAppTC = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserDataTC());

    promise.then(() => dispatch(initialedSuccessAC()))

}