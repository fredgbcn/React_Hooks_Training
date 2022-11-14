import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'
class Navbar extends React.Component {

    render() {
    return(<nav>
            <h4><Link to='/'>Home</Link></h4>
            <h4><Link to='/PM'>Country Manager</Link></h4>

    </nav>
    )}}
         
    


export default Navbar;