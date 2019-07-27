import React from 'react'

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // loggedToken: localStorage.getItem('token')
        }
    }

    render() {
        return (
          
            <h2>logout</h2>
        )
    }
}

export default Logout