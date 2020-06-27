import React, {Component} from 'react';


class List extends Component {

    constructor(){
        super();
        this.articles = [
            {
                id: 1,
                title: 'articles',
                body: 'Очень важная статья'
            }
        ]
    }

    render(){
        return(
            <ul>
                {
                    this.articles.map(elem=><li key={elem.id}>
                        <h2>{elem.title}</h2>
                        <p>{elem.body}</p>
                    </li>)
                }
            </ul>
        )
    }
}

export default List;