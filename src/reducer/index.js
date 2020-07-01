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
        let newItems = {}
        newItems.items = state.items.map(elem=>Object.assign({}, elem));
        newItems.items.push({
            ...payLoad
        })

        return newItems;

    }else if (type === REMOVE_ITEM){
        let newItems = {}
        newItems.items = state.items.map(elem=>Object.assign({}, elem))
                                    .filter(elem=>elem.id !== payLoad.id);
        
        return newItems;


    }else if (type === UPDATE_ITEM){
        console.log('update');
    }
    else{
        return state
    }
};
