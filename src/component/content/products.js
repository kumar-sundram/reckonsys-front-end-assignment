import React from 'react';
import { Table} from 'reactstrap';
import data from '../json_file/product.json'

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
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
              {this.state.data.map((item,key)=>{
                  return (
                   <tr key={item.id}>
                   <th scope="row">{item.id}</th>
                   <td>{item.productName}</td>
                   <td>{item.brand}</td>
                   <td>{item.price}</td>
                </tr>)
              })}
        </tbody>
      </Table>
      
    );
  }
}