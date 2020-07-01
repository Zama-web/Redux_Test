import React, {Component} from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../Actions';

function mapDispatchToProps(dispatch){
    return{
        removeItem: item=>dispatch(removeItem(item))
    }
}

class ConnectedRemove extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: ''
        };
    }

    onSubmit(event){
        event.preventDefault()
        const {id} = this.state;
        

        this.props.removeItem({id: +id})

        this.setState((prev)=>{
            prev.id = '';
            return prev;
        })
    }

    onChange(event, input){
        const value = event.target.value;
        this.setState((prev)=>{
            prev[input] = value;
            return prev;
        })
    }

    render(){
        return(
            <form onSubmit={(event)=>this.onSubmit(event)}>
                <h2>Удалить пункт</h2>
                <div className='field'>
                    <p>ID</p>
                    <input 
                    value ={this.state.id} 
                    onChange={(event)=>this.onChange(event, 'id')} 
                    />
                </div>
                <button>Удалить</button>
            </form>
        )
    }
}

const RemoveItem = connect(null, mapDispatchToProps)(ConnectedRemove)

export default RemoveItem;