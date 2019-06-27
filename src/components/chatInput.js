import React, { Component } from 'react';
const GLOBAL_MESSAGE_CHAR_LIMIT = 1000;
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
    if (this.state.message.length < GLOBAL_MESSAGE_CHAR_LIMIT)
    this.setState({
      message: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    if (this.state.message !== '') {
      this.props.sendMessage(this.state.message);
    }
    this.setState({
      message:'',
    })
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
