import React from 'react';
import { Table} from 'reactstrap';
import data from '../json_file/user.json'

export default class Member extends React.Component {
  constructor(){
    super()
    this.state={
      data
    }
  }

  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item)=>{
                  return (
                   <tr key={item.id}>
                   <th scope="row">{item.id}</th>
                   <td>{item.userName}</td>
                   <td>{item.userEmail}</td>
                   <td>{item.position}</td>
                </tr>)
              })}
        </tbody>
      </Table>
    );
  }
}