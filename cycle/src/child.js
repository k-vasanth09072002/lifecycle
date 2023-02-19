import React, { Component } from 'react'
 var timer;
export class child extends Component {

    constructor(){
        super()
        console.log("child constructor");
    }
    componentDidMount(){

       timer= setInterval(()=>{
            console.log("interval");
        },3000)
        console.log("componentdidmount");
    }
    componentDidUpdate(){
        console.log(" child componentdidupdate");
    }
    componentWillUnmount(){
        clearInterval(timer)
        console.log("componentwillunmount");
    }
  render() {
    console.log("child render");
    return (
      <div>
        child {this.state.age}{this.props.future}
      </div>
    )
  }
}

export default child