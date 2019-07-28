import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
 
 class NavBar extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            login:localStorage.getItem("login")
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
                {this.props.user.isAuthenticated ? 
                <Navbar color="light" light expand="md">
                     <NavbarBrand >Admin Section</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <Link to="/member">Members</Link>&nbsp;&nbsp;
                        <Link to="/product">Products</Link>&nbsp;&nbsp;
                        <Link to="/reporting">Reporting</Link>&nbsp;&nbsp;
                        <Link to="/users">Users</Link>
                    </Nav>
                    <h6 style={{'marginLeft':"936px",'marginTop':"8px"}}>{this.props.user.isAuthenticated ? this.props.user.user.name : ""}</h6>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Link to="/user/logout">Logout</Link>&nbsp;&nbsp;
                        </Nav>
                    </Collapse>
                </Navbar>
                :
                
                <Navbar color="light" light expand="md">
                     <NavbarBrand >Reckonsys</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                        <Link to="/user/login">Login</Link>&nbsp;&nbsp;
                    </Nav>
                </Navbar>
                }
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
return {
    user:state.users
}
}
export default connect(mapStateToProps)(NavBar)