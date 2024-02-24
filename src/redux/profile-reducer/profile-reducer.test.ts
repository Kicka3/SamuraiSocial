import profileReducer, {
    addPostAC, InitialProfileStateType, initialState,
} from "./profile-reducer";


let startState: InitialProfileStateType;

beforeEach(() => {

    startState = initialState
});

// test('post length should increase', () => {
//     let newPostText = 'new text'
//     const action = addPostAC(newPostText);
//     const endState = profileReducer(startState, action);
//
//     expect(endState.postsData.length).toBe(3);
// });
