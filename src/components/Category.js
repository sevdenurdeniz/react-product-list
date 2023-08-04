import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Category = ({ categories, onSelectCategory }) => {
  return (
    <div className="col-12 col-lg-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={()=> onSelectCategory(null)}>All Categories</Dropdown.Item>
          {categories.map((category) => (
            <Dropdown.Item key={category} onClick={() => onSelectCategory(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Category;