import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
            name:'Youssef Dabaki GOMYCODE',
        };
    };
   
            handlechange=(event)=> {
                this.setState({name:event.target.value})
            };
    render() { 
        return (  
            <div>
            
                <h2>enter your name</h2>
                <input type='text' onChange={this.handlechange}/>
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}
 
export default Counter;