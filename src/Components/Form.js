import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../Actions';

function mapDispatchToProps(dispatch){
    return{
        addItem: item=>dispatch(addItem(item))
    }
}

class ConnectedForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onSubmit(event){
        event.preventDefault()
        const {title, body} = this.state;
        
        this.props.addItem({title, body})

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
                <h2>Добавить пункт</h2>
                <div className='field'>
                    <p>Заголовок</p>
                    <input 
                    value ={this.state.title} 
                    onChange={(event)=>this.onChange(event, 'title')} 
                    />
                </div>
                <div className='field'>
                    <p>Text</p>
                    <textarea 
                    value ={this.state.body} 
                    onChange={(event)=>this.onChange(event, 'body')}
                    ></textarea>
                </div>
                <button>Добавить</button>
            </form>
        )
    }
}

const Form = connect(elem=>console.log(elem), mapDispatchToProps)(ConnectedForm)

export default Form;