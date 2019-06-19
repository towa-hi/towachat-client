import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Post from './post.js'

export default class Chat extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.BottomOfChat.scrollIntoView({behavior: 'smooth'});
  }
  shouldMergePost() {

  }
  render() {
    return(
      <Container className='ChatContainer'>
        {this.props.allPostData.map(postData => <Post postData={postData} key={postData.id}/>)}
        <div ref={BottomOfChat => {this.BottomOfChat = BottomOfChat;}}/>
      </Container>
    )
  }
}
