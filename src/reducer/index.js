import {ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM} from '../Constands';

const initialState = {
    items: [
        {
            id: 1, title: '___', body:'___'
        }
    ]
}

export const reducer = (state=initialState, action)=>{
    const {type, payLoad} = action;

    if (type === ADD_ITEM){
        state.items.push({
            ...payLoad,
            id: 12
        })

        for (let item of state.items) {
            console.log(item)
        }
        console.log('add');

    }else if (type === REMOVE_ITEM){
        state.items = state.items.filter(elem=>elem.id !== payLoad.id)
        
        for (let item of state.items) {
            console.log(item)
        }


        console.log('remove');

    }else if (type === UPDATE_ITEM){
        console.log('update');
    }
    return state
};
