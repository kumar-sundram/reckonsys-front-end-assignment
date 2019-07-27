import React from 'react';
import {
    Collapse,
    Navbar
} from 'reactstrap';
import {Link} from 'react-router-dom'
import loginUser from '../user/user.json'

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <nav className="ml-auto" navbar>
                        <Link to="/">Admin Section</Link>&nbsp;&nbsp;
                        <Link to="/member">Members</Link>&nbsp;&nbsp;
                        <Link to="/product">Products</Link>&nbsp;&nbsp;
                        <Link to="/reporting">Reporting</Link>&nbsp;&nbsp;
                        <Link to="/users">Users</Link>
                    </nav>
                    <h6 style={{'marginLeft':"936px",'marginTop':"8px"}}>{loginUser.user}</h6>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <nav className="ml-auto" navbar>
                            <Link to="/user/login">Login</Link>&nbsp;&nbsp;
                            <Link to="/user/logout">Logout</Link>&nbsp;&nbsp;
                        </nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}