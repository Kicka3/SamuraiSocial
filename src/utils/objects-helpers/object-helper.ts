import {ResponseUsersType} from "../../redux/users-reducer/users-reducer";
//after:
// export const updateObjInArray = () => {
//     state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
// }

//now:

type KeysObjPropName = 'id'| 'name'| 'status'| 'photos'|'followed'| 'totalCount'| 'error'

// Функция обновления объекта в массиве по заданным параметрам
export const updateObjInArray =
     (items: ResponseUsersType[], itemId: string, objPropName: KeysObjPropName, newObjProps: {}) => {
    return items.map(u => {
        // Проверяем, соответствует ли объект заданным параметрам
        if (u[objPropName] && u[objPropName ] === itemId) {
            // Обновляем объект с новыми свойствами
            return {...u, ...newObjProps}
        }
        // Возвращаем объект без изменений
        return u;
    });
}


