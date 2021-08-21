import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    };
    onChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value }); 
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.userSearch(this.state.text);
        this.setState({text : ''});
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} className = "form">
                    <input type="text" name="text" placeholder = "Enter username...." value = {this.state.text} onChange = {this.onChange}/>
                </form>
            </div>
        )
    }
}

export default Search
