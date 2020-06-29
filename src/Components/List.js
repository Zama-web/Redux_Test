import React, {Component} from 'react';
import { connect } from 'react-redux';




const mapSateToProps = state => {
    return {articles: state.items}
}

function ConnectedList({articles}) {

        return(
            <ul>
                {
                    articles.map(elem=><li key={elem.id}>
                        <h2>{elem.title}</h2>
                        <p>{elem.body}</p>
                    </li>)
                }
            </ul>
        )
}

const List = connect(mapSateToProps)(ConnectedList);

export default List;







// class ConnectedList extends Component {

//     constructor(){
//         super();
//         this.articles = [
//             {
//                 id: 1,
//                 title: 'articles',
//                 body: 'Очень важная статья'
//             }
//         ]
//     }

//     render(){
//         return(
//             <ul>
//                 {
//                     this.articles.map(elem=><li key={elem.id}>
//                         <h2>{elem.title}</h2>
//                         <p>{elem.body}</p>
//                     </li>)
//                 }
//             </ul>
//         )
//     }
// }
// const List = connect(()=>console.log('connect 1'))(ConnectedList)
// export default List;