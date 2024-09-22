import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Import the ProductCard component

const Mens = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [sortOption, setSortOption] = useState(''); // State for sorting option

  useEffect(() => {
    // Fetching men’s products from the API
    axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => {
        setMenProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching men products:", error);
        setLoading(true); // Stop loading even if there's an error
      });
  }, []);

  // Function to handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sortedProducts = [...menProducts];
    if (value === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setMenProducts(sortedProducts); // Update the sorted products
  };

  return (
    <div className="mt-[120px] p-6">
      <div className="md:fixed mb-4">
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border outline-none border-gray-300 rounded p-3"
        >
          <option value="">Sort By </option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="md:ml-[21%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {loading ? (
          <p>Loading...</p> // Show loading text while data is being fetched
        ) : (
          menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default Mens;
