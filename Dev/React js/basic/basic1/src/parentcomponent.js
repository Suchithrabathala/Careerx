import React,{Component} from 'react';
import Childcomponent from './childcomponent';
export default class Parentcomponent extends Component{
    render(){
        return(
            <div>
                <p>I am parent Component</p>
                    <Childcomponent text="I am 1 childd"></Childcomponent>
                    <Childcomponent text="I am 2 child"></Childcomponent> 
            </div>
        );
    }
}