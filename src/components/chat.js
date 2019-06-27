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
  shouldMergePost(currentPost, index) {
    if (index > 0) {
      var previousPost = this.props.allPostData[index - 1];
      if (currentPost.user.username === previousPost.user.username) {
        if (currentPost.time - previousPost.time < 3600000) {
          return true;
        }
      }
    }
    return false;
  }

  render() {
    return(
      <Container className='ChatContainer'>
        {this.props.allPostData.map((postData, index) => <Post postData={postData} key={postData.time} shouldMerge={this.shouldMergePost(postData, index)}/> )}
        <div ref={BottomOfChat => {this.BottomOfChat = BottomOfChat;}}/>
      </Container>
    )
  }
}
