import {v1} from "uuid";
import profileReducer, {
    addPostAC,
    InitialProfileStateType,
    PostsType,
    updatePostNewTextAC,
} from "./profile-reducer";


let startState: InitialProfileStateType;

beforeEach(() => {

    startState = {
        postsData: [
            {id: v1(), message: "Jopa", likesCount: 5},
            {id: v1(), message: "My little Jopa", likesCount: 25},
        ] as PostsType[],
        newPostText: 'Whussap?',
    }
});

test('post length should increase', () => {
    let newPostText = 'new text'
    const action = addPostAC(newPostText);
    const endState = profileReducer(startState, action);

    expect(endState.postsData.length).toBe(3);
});

test('newPostText should be changed', () => {
    const newText = 'new input text';
    const action = updatePostNewTextAC(newText);
    const endState = profileReducer(startState, action);

    expect(endState.newPostText).toBe(newText);
});