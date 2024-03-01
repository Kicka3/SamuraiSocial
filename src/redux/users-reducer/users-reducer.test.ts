import {
    followSuccessAC,
    ResponseUsersType,
    setCurrentPageAC, setTotalUsersCount,
    setUsersAC, toggleFollowingProgressAC, toggleIsFetching,
    unfollowSuccessAC,
    usersReducer
} from "./users-reducer";


let startState = {
    users: [
        {
            id: '1',
            name: 'user 1',
            status: 'XX11',
            photos: {
                small: 'srcS',
                large: 'srcL',
            },
            followed: false,
            totalCount: 1,
            error: 'someError'
        },
        {
            id: '2',
            name: 'user 2',
            status: 'XX22',
            photos: {
                small: 'srcS',
                large: 'srcL',
            },
            followed: true,
            totalCount: 2,
            error: 'someError'
        }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [''],
}


test('correct user should be followed', () => {
    const userId: string = '1';
    const action = followSuccessAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBe(true);
});

test('correct user should be unFollowed', () => {
    const userId: string = '2';
    const action = unfollowSuccessAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBeFalsy();
});

test('the length of the friends array must match the users', () => {
    const users: ResponseUsersType[] = [
        {
            id: '1',
            name: 'user 1',
            status: 'XX11',
            photos: {
                small: 'srcS',
                large: 'srcL',
            },
            followed: false,
            totalCount: 1,
            error: 'someError'
        }
    ];
    const action = setUsersAC(users);
    const endState = usersReducer(startState, action);

    expect(endState.users.length).toBe(1);
});

test('currentPage must change', () => {
    const page: number = 3;
    const action = setCurrentPageAC(page);
    const endState = usersReducer(startState, action);

    expect(endState.currentPage).toBe(3);
});

test('totalUsersCount must change', () => {
    const totalCount: number = 13;
    const action = setTotalUsersCount(totalCount);
    const endState = usersReducer(startState, action);

    expect(endState.totalUsersCount).toBe(13);
});

test('isFetching should change to falsy', () => {
    const isFetching: boolean = false;
    const action = toggleIsFetching(isFetching);
    const endState = usersReducer(startState, action);

    expect(endState.isFetching).toBeFalsy();
});

test('the length of followingInProgress should change', () => {
    const userId: string = '1';
    const isFetching: boolean = false;
    const action = toggleFollowingProgressAC(userId, isFetching);
    const endState = usersReducer(startState, action);

    expect(endState.followingInProgress.length).toBe(1);
});
