import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const INITIAL_STATE = { 
	username:'',
	email:'',
	password:'',
	error: null,
};
class SignupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            error: null,
        }
    }
    onSubmit = event => {
		const {username, email, password} = this.state;
		this.props.firebase.doCreateUserWithEmailAndPassword(email, password).then(authUser => {
			this.setState({...INITIAL_STATE});
		})
		.catch(error => {
			this.setState({error});
		});
		event.preventDefault();
    }

    onChange = event => {
    this.setState({
        [event.target.name]: event.target.value,
    }, () => {
        console.log('CURRENT SIGNUPMODAL STATE: ' + this.state.username);
    });
    }
    //this all needs some kinda onchange handler



    render() {
		const isInvalid = this.state.email === '' || this.state.username === '' || this.state.password === '';

		return (
			<Modal {...this.props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="Sign Up">
					Sign Up
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Centered Modal</h4>
				<Form onSubmit={this.onSubmit}>
					<Form.Group controlId="username" >
						<Form.Label>Username</Form.Label>
						<Form.Control placeholder="Enter username" name="username" type="text" value={this.state.username} onChange={this.onChange}/>
					</Form.Group>
					<Form.Group controlId="email" >
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange}/>
						<Form.Text className="text-muted">
							Warning: This gets sent to the cloud.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="password" >
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
					</Form.Group>
					<Button variant="primary" type="submit" disabled={isInvalid}>
						Sign Up
					</Button>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.props.onHide}>Close</Button>
			</Modal.Footer>
			</Modal>
		);
 	}
}
export default SignupModal;

/**            <form onSubmit={this.onSubmit}>
            <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordO"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
            />
           <button type="submit">Sign Up</button>

            {error && <p>{error.message}</p>}
        </form> */