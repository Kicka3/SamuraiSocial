import profileReducer, {addPostAC, deletePostAC, InitialProfileStateType, PostsType,} from "./profile-reducer";

const startState: InitialProfileStateType = {
    postsData: [
        //fake posts
        {id: '0', message: "First Fake Jopa1 post", likesCount: 5},
        {id: '1', message: "Second fake Jopa2 Post", likesCount: 25},
    ] as PostsType[],
    postText: '',
    profile: null,
    status: ''
}

test('length of posts should be incremented', () => {

    let newPostText = {newPostText: 'new text'}
    const action = addPostAC(newPostText);
    const endState = profileReducer(startState, action);

    expect(endState.postsData.length).toBe(3);
});

test('message of new posts should be correct', () => {

    let newPostText = {newPostText: 'new text'}
    const action = addPostAC(newPostText);
    const endState = profileReducer(startState, action);

    expect(endState.postsData[0].message).toBe(newPostText.newPostText);
});

test('after deleting length of posts should be decrement', () => {

    const action = deletePostAC('1');
    const endState = profileReducer(startState, action);

    expect(endState.postsData.length).toBe(1);
});

test(`after deleting length of posts shouldn't be decrement if id is not defined`, () => {

    const action = deletePostAC('99999');
    const endState = profileReducer(startState, action);

    expect(endState.postsData.length).toBe(2);
});