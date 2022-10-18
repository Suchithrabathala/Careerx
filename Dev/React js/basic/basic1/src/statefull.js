import React,{Component} from 'react';
import Childcomponent from './stateless';
export default class Parentcomponent extends Component{
    state={
        firstname:"Suchithra",
        
    }
    render(){
        return(
            <div>
                    
                    <Childcomponent firstname={this.state.firstname}></Childcomponent>
                    <Childcomponent firstname={this.state.firstname}></Childcomponent>
                    <Childcomponent firstname="Bathala"></Childcomponent> 
            </div>
        );
    }

}

