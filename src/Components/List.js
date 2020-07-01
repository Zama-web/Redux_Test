import React, {Component} from 'react';
import { connect } from 'react-redux';
import './List.css';



const mapSateToProps = state => {
    let {items} = state;
    return {items}
}


class ConnectedList extends Component {

    render(){

        return(
            <ul>
                {
                    this.props.items.map(elem=><li key={elem.id}>
                        <p>{elem.id}</p>
                        <h3>{elem.title}</h3>
                        <p>{elem.body}</p>
                        <button>Кнопка-1</button>
                    </li>)
                }
            </ul>
        )
    }
}
const List = connect(mapSateToProps)(ConnectedList)

export default List;





// function ConnectedList({articles}) {

//         return(
//             <ul className='list'>
//                 {
//                     articles.map(elem=><li key={elem.id}>
//                         <h2>{elem.title}</h2>
//                         <p>{elem.body}</p>
//                     </li>)
//                 }
//             </ul>
//         )
// }

// const List = connect(mapSateToProps)(ConnectedList);

// export default List;

