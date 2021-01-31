import React, {Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            inputValue : '',
            list :['learning React'],
        }

    }

    render(){
        return(
            <Fragment>
            <h1>Todo List</h1>
            <p>Submit to add and click to delete</p>
            <input 
                value={this.state.inputValue}
                onChange={(e)=>{this.setState({ inputValue : e.target.value })}}
                onKeyDown={(e)=>{
                    if(e.key==='Enter'){
                        if(this.state.inputValue != ''){
                            this.setState({ list : [...this.state.list, this.state.inputValue] });
                            this.setState({ inputValue: ''});
                        }
                    }
                }}
            />
            <button onClick={()=>{
                if(this.state.inputValue != ''){
                    this.setState({ list : [...this.state.list, this.state.inputValue] });
                    this.setState({ inputValue: ''});
                }
            }}>submit</button>
            <ul>
                {
                    this.state.list.map( (item,index)=>{
                        return <div>
                            <li 
                            onClick={()=>{
                                let newList = [...this.state.list];
                                newList.splice(index,1);                                
                                this.setState({ list : newList });
                            }}>{item}</li>
                            </div>
                    })
                }
            </ul>
            </Fragment>
        );
    }
}

export default App;