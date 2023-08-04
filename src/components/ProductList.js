import React, { useState } from "react";
import { Data } from "../api/Data";
import Product from "./Product";
import Search from "./Search";
import Category from "./Category";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(Data.map((item) => item.brand))];

  const filteredProducts = Data.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.brand) ||
        selectedCategories.includes("All"))
  );

  const handleSelectedCategories = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  return (
    <div className="container">
      <div className="row">
        <Search onSearch={setSearchQuery} />
        <Category
          categories={categories}
          selectedCategories={selectedCategories}
          onSelectedCategories={handleSelectedCategories}
        />
        {filteredProducts.map((productItem) => (
          <Product
            key={productItem.id}
            images={productItem.images}
            title={productItem.title}
            description={productItem.description}
            brand={productItem.brand}
            price={productItem.price}
            stock={productItem.stock}
            rating={productItem.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
