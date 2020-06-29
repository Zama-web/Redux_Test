import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../Constands';


export function addItem(item) {
    return {
        type: ADD_ITEM,
        payLoad: item
    }
}
export function removeItem(item) {
    return {
        type: REMOVE_ITEM,
        payLoad: item
    }
}
export function updateItem(item) {
    return {
        type: UPDATE_ITEM,
        payLoad: item
    }
}

