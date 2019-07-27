import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input, Container, Row, Col,FormFeedback,FormText } from 'reactstrap';

class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      admin:null,
      name:'',
      name_error:'',
      email:'',
      email_error:'',
      mobile:'',
      mobile_error:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    
        this.setState({name_error:'',email_error:'',mobile_error:''});

        var name   =   this.state.name;
        if(name == null || name.trim().length == 0){
            this.setState({name_error:'Name should not be empty'});
            return;
        }

        var email   =   this.state.email;
        if(email == null || email.trim().length == 0){
        
            this.setState({email_error:"Email is not valid"})
            return;
        }

        var mobile   =   this.state.mobile;
        if(mobile == null || mobile.trim().length == 0 ){
            this.setState({mobile_error:'mobile should not be empty'});
            return;
        }

         var add = {
            "id": this.state.admin.length + 1,
            'name': this.state.name,
            'email':this.state.email,
            'mobile':this.state.mobile
        };
        this.state.admin.push(add)
        this.setState({admin: this.state.admin})
        this.props.addMember(this.state.admin)
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
  }

  componentWillReceiveProps(nextProp){
    this.setState({modal: nextProp.show,admin:nextProp.admin})
  }

  nameHandle = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
}

emailHandle = (e) => {
    const email = e.target.value
    this.setState(() => ({ email }))
}

mobileHandle = (e) => {
    const mobile = e.target.value
    this.setState(() => ({ mobile }))
}

cancel=()=>{
    this.setState(prevState => ({
        modal: !prevState.modal
      }));
}

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.close}>Add Member</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.submitHandle}>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label>
                                        Name<br />
                                        <Input size="lg" type="text" value={this.state.name}  onChange={this.nameHandle}  />
                                        <FormText color="danger">{this.state.name_error}</FormText>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label>
                                        Email <br />
                                        <Input size="lg" type="email" value={this.state.email}  onChange={this.emailHandle}/>
                                        <FormText color="danger">{this.state.email_error}</FormText>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <FormGroup>
                                    <Label>
                                        Mobile<br />
                                        <Input size="lg" type="number" value={this.state.mobile}  onChange={this.mobileHandle} />
                                        <FormText color="danger">{this.state.mobile_error}</FormText>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={this.cancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMember;