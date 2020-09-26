import React, { Component } from 'react';

class Counter extends Component{
  constructor(){
    super()
    this.state={
      temp:0
    }
    
  }
   
  
  plus=()=>{
    this.setState(prevState=>{return {temp:prevState.temp+1 }})
    }
  minus=()=>{
    this.setState(prevState=>{return {temp:prevState.temp-1 }})
    }
  reset=()=>{
    this.setState({temp:0 })
    }
   
    render(){
    const {temp}=this.state
    return(
       <div className="container">
          <h1>{temp}</h1>
          <button onClick={this.plus} className="btn btn-primary mr-1">Increase</button>
          <button onClick={this.reset} className="btn btn-primary mr-1">Reset</button>
          <button onClick={this.minus} className="btn btn-primary mr-1">Decrease</button> 
       </div>
     )
   }
 }

export default Counter;
