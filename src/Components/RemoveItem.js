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
        

        this.props.removeItem({id})

        this.setState((prev)=>{
            prev.title = '';
            prev.body = '';
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
                    <p>Заголовок</p>
                    <input 
                    value ={this.state.title} 
                    onChange={(event)=>this.onChange(event, 'id')} 
                    />
                </div>
                <div className='field'>
                    <p>Text</p>
                    <textarea 
                    value ={this.state.id} 
                    onChange={(event)=>this.onChange(event, 'id')}
                    ></textarea>
                </div>
                <button>Добавить</button>
            </form>
        )
    }
}

const Form = connect(elem=>console.log(elem), mapDispatchToProps)(ConnectedRemove)

export default Form;