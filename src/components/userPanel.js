import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AvatarContainerStyle = {
    border:  '1px solid black',
    maxWidth: '100%',
    maxHeight: '100px',
}
const AvatarStyle = {
    maxWidth: '100%',
    maxHeight: '100%'
}
const UserPanelTopStyle = {
    maxHeight: '100px',
    border: '1px solid black'
}
class UserPanel extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    state = {
		name: 'Mono Classic',
        handle: '@mono',
        avatar: 'https://shpposter.club/media/af6dab0b-e984-43ed-a82e-4c37bdbabf06/62b523e1e8b0a90d570c2b58e488c16c2ec1729167fd220dd828b7059f1fe646.png'
    }
    render() {
        return (

            <Container>
                <Row  className='UserPanelTop' style={UserPanelTopStyle}>
                  
                    <Col>
                        Username <br/>
                        @handle
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Posts <br/>
                        1234
                    </Col>
                    <Col>
                        Following <br/>
                        256
                    </Col>
                    <Col>
                        Follower <br/>
                        789
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserPanel