import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import UserList from './components/userList.js';
import Chat from './components/chat.js';
import Topbar from './components/topbar.js';
import ChatInput from './components/chatInput.js';
import Login from './components/login.js';
import request from 'request';

const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:5000');

socket.on('connect',doConnect);
socket.on('newMessage', doMessage);

function doConnect() {

  console.log('socket connected');
}

function doMessage(message) {
  console.log('got new message:')
  console.log(message);
}

const mockUser = {
  name:'mockUsername',
  handle:'@name0',
  avatar:'https://i.imgur.com/Dp9Ogph.png',
  id:'1'
};

export default class App extends Component {



  constructor(props) {
    super(props);
    this.state = {
      currentUser: mockUser,
      allUsers: [],
      allPostData: [],
    };

    //console.log('CURRENT USER LIST AFTER INIT'+this.state.allUsers);
  }
  componentDidMount() {
    this.callApi('/startingState').then(res => this.setState(res)).catch(err => console.log(err));

  }

  makePost() {
    console.log('making post')
    var messageObject = {
      user: 'admin1',
      postText: 'benis',
    };
    request(
      {
        method: 'POST',
        url: 'http://localhost:5000/makePost',
        json: messageObject,
      },
      function (err, httpResponse, body) {
        console.log(body);
      }
    );

  }

  callApi = async(query) => {
    const response = await fetch(query);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  handleSubmit = async(e) => {
    e.preventDefault();

  }

  signIn(username, password) {
    var requestData = {
      username: username,
      password: password
    }
    request(
      {
        method: 'POST',
        url: 'http://localhost:5000/newUser',
        json: requestData,
      },
      function (err, httpResponse, body) {
        console.log(body);
      }
    );
  }

  addUserTest = () => {
    this.addUser({name:'name'+(this.state.allUsers.length),handle:'@name'+(this.state.allUsers.length),avatar:'https://i.imgur.com/Dp9Ogph.png'});
  }

  addUser = (addedUser) => {
    if (!this.state.allUsers.includes(addedUser)){
      console.log('ADDING' + addedUser.name);
      this.setState({
        allUsers: [...this.state.allUsers, addedUser],
      }, () => {
        console.log('CURRENT USER LIST AFTER addUser' + this.state.allUsers);
      });
    } else {
      console.log('USER ALREADY IN LIST');
    }
  }

  removeUser = (removedUser) => {
    if (this.state.allUsers.includes(removedUser)) {
      let filteredArray = this.state.allUsers.filter(item => item.name !== removedUser.name);
      this.setState({
        allUsers: filteredArray
      }, () => {
        console.log('CURRENT USER LIST AFTER removeUser' + this.state.allUsers);
      });
    } else {
      console.log('USER NOT FOUND TO REMOVE');
    }
  }
  addPost = (newPost) => {
    this.setState({
      allPostData: [...this.state.allPostData, newPost]
    })
  }

  sendMessage = (text) => {
    this.handleSubmit();
  }

  render() {

    return (
      <div className='App'>
        <Container>
          <Row className='TopPanel'>
            <Topbar currentUser = {this.state.currentUser}/><button onClick={this.makePost}>make post</button>
          </Row>
          <Row className='BottomPanel' md={1}>
            <Row className='Header'>
              <Login onSignIn={this.signIn.bind(this)}/>
            </Row>
            <Row className='Content' noGutters={true}>
              <Col className='LeftPanel' md={4}>
                <UserList allUsers = {this.state.allUsers}/>
              </Col>
              <Col className='RightPanel'>
                <Chat allPostData = {this.state.allPostData}/>
                <ChatInput sendMessage = {this.sendMessage}/>
              </Col>
            </Row>
          </Row>
        </Container>
        <Container>

          <button onClick={this.addUserTest}>addUser</button>
          <button onClick={() => this.removeUser(this.state.allUsers[this.state.allUsers.length - 1])}>remove topmost user</button>
        </Container>
        <Container>
          test area woop woop
        </Container>
      </div>
    );
  }
}
