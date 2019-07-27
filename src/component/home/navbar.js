import React from 'react';
import {
    Collapse,
    Navbar
} from 'reactstrap';
import {Link} from 'react-router-dom'
import loginUser from '../user/user.json'
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
        console.log("nav bar state",this.props)
        return (
            <div>
                {this.props.user.isAuthenticated ? 
                <Navbar color="light" light expand="md">
                    <nav className="ml-auto" navbar>
                        <Link >Admin Section</Link>&nbsp;&nbsp;
                        <Link to="/member">Members</Link>&nbsp;&nbsp;
                        <Link to="/product">Products</Link>&nbsp;&nbsp;
                        <Link to="/reporting">Reporting</Link>&nbsp;&nbsp;
                        <Link to="/users">Users</Link>
                    </nav>
                    <h6 style={{'marginLeft':"936px",'marginTop':"8px"}}>{this.props.user.isAuthenticated ? this.props.user.user.name : ""}</h6>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <nav className="ml-auto" navbar>
                           
                            <Link to="/user/logout">Logout</Link>&nbsp;&nbsp;
                        </nav>
                    </Collapse>
                </Navbar>
                :
                
                <Navbar color="light" light expand="md">
                    <nav className="ml-auto" navbar>
                        <Link to="/">Home</Link>&nbsp;&nbsp;
                           
                            <Link to="/user/login">Login</Link>&nbsp;&nbsp;
                            </nav>
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