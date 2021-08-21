import React from 'react'
import PropTypes from 'prop-types'


 function Navbar(props) {
    
    
        return (
            <nav className ='navbar bg-primary'>
                <h1>
                    <i className="fa fa-github" style = {{ paddingRight: "10px"}} ></i>
                    {props.title}
                </h1>
            </nav>
        )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

export default Navbar
