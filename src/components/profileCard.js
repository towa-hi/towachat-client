import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const ProfileCardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'left',
    maxHeight: '3em'
}
const AvatarContainerStyle = {
    border:  '1px solid black',
    flexBasis: '3em'
}
const AvatarStyle = {
    maxWidth: '100%',
    maxHeight: '100%'
}
const ProfileCardInfoContainerStyle = {
    border: '1px solid black',
    flexGrow: '3',
    display: 'flex',
    flexDirection:'column'
}

const ProfileCardNameStyle = {
    flexGrow: '1'
}
const ProfileCardHandleStyle = {
    flexGrow: '1'
}
class ProfileCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    state = {
		name: 'Mono Classic',
        handle: '@mono',
        avatar: 'https://shitposter.club/media/d969841b-5b45-4d34-9b78-464947e62073/62b523e1e8b0a90d570c2b58e488c16c2ec1729167fd220dd828b7059f1fe646.png'
    }

    render() {
        return (
            <Container style={ProfileCardContainerStyle}>
                <div className='AvatarContainer' style ={AvatarContainerStyle}>
                    <Image src={this.props.user.avatar} style={AvatarStyle}/>
                </div>
                <div className='ProfileCardInfoContainer' style = {ProfileCardInfoContainerStyle}>
                    <div className='ProfileCardName' style = {ProfileCardNameStyle}>{this.props.user.name}</div>
                    <div className='ProfileCardHandle' style = {ProfileCardHandleStyle}>{this.props.user.handle}</div>
                </div>
            </Container>
        );
    }
}

export default ProfileCard