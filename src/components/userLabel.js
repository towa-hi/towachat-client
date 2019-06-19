import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'
export default class UserLabel extends Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(this.props);
  //   // console.log(typeof this.props);
  //   }

  render() {
    return(
      <div className='UserLabel'>
        <Image className='UserLabelAvatar' src={this.props.avatar}/>
        <span className='UserLabelName'>{this.props.name}</span>
      </div>
    )
  }
}
