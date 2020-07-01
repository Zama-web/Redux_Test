import React, {Component} from 'react';
import Item from './Item'



class Container extends Component{


    constructor(props){
        super(props);
        this.state ={ 
            items: [1,2,3,4,5,6,7,8,9],
            frameNumber: 0,
            left: 0
        }
        this.elemCount = this.state.items.length
        
        
        this.style = {
            width: this.elemCount*100+'px',
            left: this.left,
            top: 0
        }
    }

    goRight() {
        this.setState(prev=>{
            prev.frameNumber -= 1;
            prev.left = prev.frameNumber * 100+'px';
            return prev;
        })        
    }

    goLeft() {
        this.setState(prev=>{
            prev.frameNumber += 1;
            prev.left = prev.frameNumber * 100+'px';
            return prev;
        })        
    }


    render(){
        const {left} = this.state;
        return(
            <div>
                <div className='frame'>
                    <div className='containerName' style={{...this.style, left}}>
                {this.state.items.map((id)=><Item key={id} />)}
                </div>
            </div>
            <button onClick={()=>this.goLeft()}> лево </button>

            <button onClick={()=>this.goRight()}> право  </button>
            </div>
        )
    }
}

export default Container;
