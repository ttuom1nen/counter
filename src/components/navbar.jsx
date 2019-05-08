import React, { Component } from 'react';

// Stateless Functional Component:
// Use shortcut sfc
// Is same as class

// Destructuring: instead of props everywhere
// NavBar = (props) changes to NavBar = ({totalCounters})
// And {props.totalCounters} to {totalCounters} 

const NavBar = ({totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">
                {totalCounters}
                </span>
            </a>
        </nav>
    );
}
/*
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}*/
 
export default NavBar;