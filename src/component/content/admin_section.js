import React from 'react';
import { Table,Button,Container, Row, Col } from 'reactstrap';
import data from '../json_file/admin_section.json'
import AddMember from './form'
export default class AdminSection extends React.Component {
    constructor(props){
        super(props)
        this.state={
            admin:data,
            show:false
        }
    }

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Admin Name</th>
            <th>Email</th>
            <th>Contact No.</th>
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
                </tr>)
              })}
        </tbody>
      
      </Table>
    );
  }
}