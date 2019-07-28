import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, FormText , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import loginData from './user.json'
import {connect } from 'react-redux'
import {setUser} from '../redux/action'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            hidden: true,
            redirectList: false,
            password_error: '',
            email_error: '',
            modal: false
 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: false
        }));
    }

    handleChange(e) {
        e.persist();
        this.setState({password_error: '', email_error: ''});
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    passwordValid(pwd)  {
      let re = /[0-9]/;
      if(!re.test(pwd)) {
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(pwd)) {
        return false;
      }
    
      re = /[@#$%^&*]/;
      if(!re.test(pwd)) {
        return false;
      }
      
      return true;
    }
    

    validEmail(email)  {
        return /(.+)@(.+){2,}\.(.+){2,}/.test(email) ;
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({password_error: '', email_error: ''});
        let valid  = true;
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        if (!formData.email) {
            this.setState({email_error: 'Email is required' });
            valid  = false;
        } else if (!this.validEmail(formData.email)) {
            this.setState({email_error: 'Email is not valid' });
            valid  = false;
        } 

        if (!formData.password) {
            this.setState({password_error: 'Password is required' });
            valid  = false;
        } else if (!this.passwordValid(formData.password)) {
            this.setState({password_error: 'Password must have minimum of one special character, a number and a capital letter' });
            valid  = false;
        } 

        if (!valid) {
            return;
        }

        if(formData.email===loginData.user && formData.password===loginData.password){
            const user = {
                name:loginData.name
            }
            this.props.dispatch(setUser(user))
            localStorage.setItem("login",JSON.stringify({isAuthenticated:true,user:user}))
            this.setState(() => ({
                            email: '',
                            password: '',
                            redirectList: true
                        }))
        } else {
            this.setState(prevState => ({
                modal: true
              }));
        }
    }
    render() {
        if (this.state.redirectList) {
            return <Redirect to="/member" />
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col style={{'marginTop':'20px'}}sm="12" md={{ size: 6, offset: 6 }}>
                            <h2>Login</h2>
                        </Col>
                    </Row>
                </Container>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        Email<br />
                                        <Input bsSize="lg" type='text' value={this.state.email} onChange={this.handleChange} name="email" />
                                        <FormText color="danger">{this.state.email_error}</FormText>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 5 }}>
                                <FormGroup>
                                    <Label>
                                        Password<br />
                                        <Input bsSize="lg" type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={this.handleChange} name="password" />
                                        <FormText color="danger">{this.state.password_error}</FormText><br/>
                                        <Button size="sm" onClick={this.toggleShow}>Show/Hide</Button>
                                        
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 6 }}>
                                <Button color="primary" size="lg">Submit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Invalid credentials</ModalHeader>
                    <ModalBody>
                        The credentials are not valid, Please verify the username and password.
                    </ModalBody>      
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
            </div>
        )

    }

}
export default connect()(Login)