import React, {Component} from 'react';
import './Style.css';



class Item extends Component{


    constructor(props){
        super(props);
        const randColor = () => Math.round(Math.random()*255);
        this.style = {
            backgroundColor: `rgb(${randColor()} rgb(${randColor()} rgb(${randColor()})`
        }
        console.log('***', this.style);

    }

    render() {
        
        return(

            <div 
                className='item' 
                style={{...this.style}}>
            </div>
        )
    
    }
}

export default Item;