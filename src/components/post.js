import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.postData,
      postText: this.props.postData.postText,
      user: this.props.postData.user,
      time: this.props.postData.time,
      merged: this.props.shouldMerge,
    }
  }
  setMerged(bool) {
    this.setState({merged: bool});
  }

  mergedTime(timestamp) {
    var time = new Date(timestamp);
    var timeString = this.zeroAppender(time.getHours()) + ':' + this.zeroAppender(time.getMinutes());
    return timeString;
  }

  fullTime(timestamp) {
    var time = new Date(timestamp);
    return time.toLocaleString();
  }

  zeroAppender(time) {
    if (time < 10) {
      return('0' + time);
    }
    return time;
  }

  render() {

    if (this.state.merged === true) {
      return(
        <div className='MergedPost'>
          <span className='MergedPostTime' title={this.fullTime(this.state.time)}>{this.mergedTime(this.state.time)}</span><span className='PostText'>{this.state.postText}</span>
        </div>
      )
    }
    return(
      <div className='Post'>
        <div className='PostAvatarContainer'>
          <img className='PostAvatarImg' src={this.state.user.avatar} alt={this.state.user.username} />
        </div>
        <div className='PostContentContainer'>
          <div className='PostInfoContainer'>
            <span className='PostInfoName'>{this.state.user.username}</span>
            <span className='PostInfoTime'>{this.fullTime(this.state.time)}</span>
          </div>
          <div className='PostMessageContent'>
            <span className='PostText'>{this.state.postText}{this.props.shouldMerge}</span>
          </div>
        </div>
      </div>
    )

  }
}
