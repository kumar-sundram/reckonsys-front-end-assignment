import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {removeUser} from '../redux/action'

class Logout extends React.Component {
    logout=()=>{
        this.props.dispatch(removeUser())
        localStorage.setItem("login","false")
    }
    componentDidMount(){
       this.logout()
    }
    render(){
        return <Redirect to="/" />
    }
}

export default connect()(Logout)