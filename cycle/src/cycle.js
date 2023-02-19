import React, { Component } from 'react'
import Child from './child';


export class cycle extends Component {

    constructor(){
    super()
        this.state={
            name:"child",
            show:"true",
            future:";life"
        }
    }

    
   componentDidMount(){
    console.log("componentdidmount");
   }


   componentDidUpdate(){
    console.log("componentdidupdate", this.state);
   }

  updateName(){
    this.setState({age:25}, ()=>{
     console.log("callback",this.state);   
    });
    console.log(this.state.age);
  }


//   shouldComponentUpdate(){
//     return false;
//   }

  render() {
    console.log("render");
    return (
      <div>
        <h1>app(this.state.name)<button onClick={()=>this.updateName()}>update</button></h1>
        <button onClick={()=>this.setState({future:"lifecycle"})}>update future</button>
        <button onClick={()=>this.setState({show:!this.state.show})}>show/hide</button>
       {this.state.show ?<Child future={this.state.future}/>:null}
      </div>
      
    )
  }
}

export default cycle