import React, { Component } from 'react';
export default class chatInput extends Component {
  constructor() {
    super()
    this.state = {
      message:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      message: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.sendMessage(this.state.message);
    this.setState({
      message:'',
    });
  }

  render() {
    return(
      <div className='ChatInputContainer'>
        <form className='ChatInput' onSubmit={this.handleSubmit}>
          <input className='ChatInputField' onChange={this.handleChange} value={this.state.message} placeholder='Type your message and hit ENTER' type='text'/>
          </form>
      </div>
    )
  }
}
