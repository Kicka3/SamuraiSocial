import {v1} from "uuid";
import {followSuccessAC, InitialUsersStateType, unfollowSuccessAC, usersReducer} from "./users-reducer";


let startState: InitialUsersStateType;
// let startState = {}
beforeEach(() => {

//     startState = {
//         users: [
//             {
//                 id: v1(),
//                 name: 'XXXX11',
//                 profileStatus: 'XXXXXX22',
//                 photos: {
//                     small: 'kek',
//                     large: 'kek2',
//                 },
//                 followed: false,
//                 totalCount: 22220,
//                 error: 'someError'
//             },
//             {
//                 id: v1(),
//                 name: 'XXXX33',
//                 profileStatus: 'XXXXXX44',
//                 photos: {
//                     small: 'kek',
//                     large: 'kek2',
//                 },
//                 followed: false,
//                 totalCount: 22221,
//                 error: 'someError'
//             }
//         ]
//     }
});

test('user should be followed', () => {
    const userId = '12s';
    const action = followSuccessAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBe(true);
});

test('user should be unFollowed', () => {
    const userId = 's13';
    const action = unfollowSuccessAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBe(false);
});

// test('user must be added', () => {
//     const newUser = [
//         {
//             id: v1(),
//             name: 'XXXX',
//             profileStatus: 'XXXXXX',
//             photos: {
//                 small: 'kek',
//                 large: 'kek2',
//             },
//             followed: false,
//             totalCount: 2222,
//             error: 'someError'
//         }
//     ];
//
//     const action = setUsersAC(newUser);
//     const endState = usersReducer(startState, action);
//
//     expect(endState.users.length).toBe(3);
// });
