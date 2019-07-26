import React from "react";

// Stateless Functional Component:
// Use shortcut sfc

// Destructuring: instead of props everywhere
// NavBar = (props) changes to NavBar = ({totalCounters})
// And {props.totalCounters} to {totalCounters}

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default NavBar;
