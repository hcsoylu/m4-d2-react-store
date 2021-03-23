import React from "react";
import { Navbar, DropdownButton, Dropdown } from "react-bootstrap";

const NavBar = (props) => {
  const categories = ["Fantasy", "History", "Horror", "Romance", "SciFi"];

  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">Book Store</Navbar.Brand>

        <DropdownButton id="dropdown-variants-secondary" title={props.selected}>
          {categories.map((category) => (
            <Dropdown.Item onClick={() => props.onSelection(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </Navbar>
  );
};

export default NavBar;
