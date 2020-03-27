import React, { Component } from "react";
import ReflectionsForm from './ReflectionsForm'
class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            ReflectionsEntry:[]

        }

    }
    formSubmission=(reflection,hasSubmitted)=>{
        hasSubmitted? this.addToList(reflection):this.addToList(reflection)

    }
    addToList=(reflection)=>{
        this.state.ReflectionsEntry.push(reflection);
        this.setState({ReflectionsEntry: this.state.ReflectionsEntry})
    }
    componentDidMount(){
        this.state.ReflectionsEntry.push({

        })
    }
    render(){
        return(
            <div>
                <ReflectionsForm formSubmission={this.formSubmission} className='formchild'/>
            </div>
        )
    }
}
export default AppContainer