import React, {Component} from 'react';
import { connect } from 'react-redux';
import './List.css';
import { removeItem } from '../Actions';




function deleteHandler(id, removeItem) {
    removeItem({id})

}

class ConnectedList extends Component {

    render(){
        const {removeItem} = this.props
        return(
            <ul>
                {
                    this.props.items.map(elem=><li key={elem.id}>
                        <p>{elem.id}</p>
                        <h3>{elem.title}</h3>
                        <p>{elem.body}</p>
                        <button onClick={()=> deleteHandler(elem.id, removeItem)}>Удалить</button>
                    </li>)
                }
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeItem: item=>dispatch(removeItem(item))
    }
}


const mapSateToProps = state => {
    let {items} = state;
    return {items}
}


const List = connect(mapSateToProps, mapDispatchToProps)(ConnectedList)

export default List;
