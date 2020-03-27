import React, { Component } from "react";

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            date:'',
            text:'',
            Confidence:'',
            submit:''

        }
        this.formSubmission=(event)=>{
            event.preventDefault();
            this.setState({
                date:'',
                text:'',
                Confidence:'',
                submit:false

            })
        }
        
    }
    change = (event) => {
        if (event.target.name === "date") {
            this.setState({ date: event.target.value })
        } else if (event.target.name === "text") {
            this.setState({ text: event.target.value })
        } else if (event.target.name === "Confidence") {
            this.setState({ Confidence: event.target.value })

        }
    }
    render(){
        return(
            <div className='style'>
                <h1>Reflection</h1>
                <label htmlFor="date">Date:</label>
                <input type="date" value={this.state.date}/>
                <hr/>
                <label htmlFor="Text">Text:</label>
                <textarea name="Entry" id="" cols="30" rows="1" value='text'></textarea>
                <hr/>
                <label htmlFor="Confidence">Confidence Level:</label>
                <select name="Confidence" id="" value='Confidence'>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
                </select>
                <hr/>
                <button>Add to Entry</button>
            </div>
        )
    }
}
export default AppContainer