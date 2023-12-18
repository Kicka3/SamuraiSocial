import {v1} from "uuid";
import {followAC, InitialUsersStateType, setUsersAC, unFollowAC, usersReducer} from "./users-reducer";


let startState: InitialUsersStateType;
// let startState = {}
beforeEach(() => {

    startState = {
        users: [
            {
                id: 's13',
                photoUrl: '../../public/assets/person/person0.jpeg',
                followed: true, fullName: 'Dianych', status: 'I am on elephant yaaay!',
                location: {
                    city: 'EKB',
                    country: 'Russia',
                }
            },
            {
                id: '12s',
                photoUrl: '',
                followed: false, fullName: 'Evgeny', status: 'Lived in colhozee',
                location: {
                    city: 'Moscow',
                    country: 'Russia',
                }
            },
        ]
    }
});

test('user should be followed', () => {
    const userId = '12s';
    const action = followAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBe(true);
});

test('user should be unFollowed', () => {
    const userId = 's13';
    const action = unFollowAC(userId);
    const endState = usersReducer(startState, action);

    expect(endState.users[0].followed).toBe(false);
});

test('user must be added', () => {
    const newUser = [{
        id: v1(),
        photoUrl: '',
        followed: false,
        fullName: 'XXXX',
        status: 'XXXXXX',
        location: {
            city: 'XXXX',
            country: 'XXXX',
        }
    }];

    const action = setUsersAC(newUser);
    const endState = usersReducer(startState, action);

    expect(endState.users.length).toBe(3);
});
