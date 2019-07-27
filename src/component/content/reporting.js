import React from 'react';
import { Table } from 'reactstrap';
import data from '../json_file/reporting.json'

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
            <th>Reported By</th>
            <th>Reported By</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {this.state.data.map((item,key)=>{
                  return (
                   <tr key={item.id}>
                   <th scope="row">{item.id}</th>
                   <td>{item.reportedBy}</td>
                   <td>{item.reportedTo}</td>
                   <td>{item.time}</td>
                </tr>)
              })}
        </tbody>
        </Table>
    );
  }
}