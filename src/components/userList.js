import React, {Component} from 'react';
import UserLabel from './userLabel';
export default class UserList extends Component {

  // constructor(props) {
  //   super(props);
  //   // console.log(this.props);
  //   // console.log(typeof this.props);
  // }

  render() {
    //console.log("rendering");
    return (
      <div className='UserList'>
        {this.props.allUsers.map(user => <UserLabel {...user} key={user.name}/>)}
      </div>
    );
  }

}

///this.props.map(user => <ProfileCard key={user.handle} user={user}/>);
//{this.state.userList.map(user => <div>hello world</div>)}
