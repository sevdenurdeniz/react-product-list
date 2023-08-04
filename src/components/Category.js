import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const Category = ({ categories, onSelectedCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    onSelectedCategories(updatedCategories);
  };

  const handleClearFilter=()=>{
    setSelectedCategories([]);
    onSelectedCategories([]);
  }

  return (
    <div className="col-12 col-lg-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Categories
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {selectedCategories.length > 0 && (
            <Dropdown.Item onClick={handleClearFilter}>
              Clear Filter
            </Dropdown.Item>
          )}
          <Form>
              <Form.Check
              type="checkbox"
              label="All"
              checked={selectedCategories.includes("All")}
              onChange={() => handleCategoryChange("All")}
            />
            {categories.map((category) => (
              <Form.Check
                key={category}
                type="checkbox"
                label={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            ))}
          </Form>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Category;
