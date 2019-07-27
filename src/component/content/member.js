import React from 'react';
import { Table,Button,Container, Row, Col } from 'reactstrap';
import data from '../json_file/member.json'
import AddMember from './form'
export default class AdminSection extends React.Component {
    constructor(props){
        super(props)
        this.state={
            admin:data,
            show:false
        }
    }
    delete=(id)=>{
      let del=this.state.admin.filter((item)=> item.id!==id)
      this.setState({admin:del})
    }

    popup=()=>{
        this.setState({show:true,data:this.state.admin})
    }

    addMember=(admin)=>{
        this.setState({admin:admin,show:false})
    }

  render() {
    return (<div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
              {this.state.admin.map((item,key)=>{
                  return (
                   <tr key={item.id}>
                   <th scope="row">{item.id}</th>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.mobile}</td>
                   <td><button onClick={()=>this.delete(item.id)}>delete</button></td>
                </tr>)
              })}
        </tbody>
      </Table>
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                    <Button onClick={this.popup}>Add a new member</Button>
                    <AddMember admin={this.state.admin} addMember={this.addMember} show={this.state.show}/>
                </Col>
            </Row>
        </Container>
      
      </div>
    );
  }
}