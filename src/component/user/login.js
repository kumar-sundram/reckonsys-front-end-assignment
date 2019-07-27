import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
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
            redirectList: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    toggleShow = () => {
        this.setState({ hidden: !this.state.hidden });
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            email: this.state.email,
            password: this.state.password
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
        }
    }
    render() {
        if (this.state.redirectList) {
            return <Redirect to="/member" />
        }
        // consolse.log('state',this.props)
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
                                        <Input size="lg" type='text' value={this.state.email} onChange={this.handleChange} name="email" />
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
                                        <Input size="lg" type={this.state.hidden ? "password" : "text"} value={this.state.password} onChange={this.handleChange} name="password" /><br/>
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
            </div>
        )

    }

}
export default connect()(Login)