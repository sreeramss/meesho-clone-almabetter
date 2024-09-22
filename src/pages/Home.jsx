import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard"; // Import the ProductCard component
import banner1 from "../assets/Banner1.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"
import banner4 from "../assets/banner4.png"
import banner5 from "../assets/banner5.png"
import banner6 from "../assets/banner6.png"


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [sortOption, setSortOption] = useState(''); // State for sorting option

  useEffect(() => {
    // Fetching men’s products from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
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

    let sortedProducts = [...products];
    if (value === 'low-to-high') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high-to-low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (value === "rating") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setProducts(sortedProducts); // Update the sorted products
  };

  return (
    <div className='mt-[150px]'>
      <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=370546728"><img className='px-[10%] p-4' src={banner1} alt="banner-image" /></a>
      <h1 className='text-center text-xl md:text-4xl font-bold mt-12'>Top Categories to choose from</h1>
      <img className='px-[10%] p-4 mt-12' src={banner2} alt="banner-image2" />
      <img className='px-[10%] p-4 mt-12' src={banner3} alt="banner-image3" />
      <img className='px-[10%] p-4 mt-12' src={banner4} alt="banner-image4" />
      <img className='px-[10%] p-4 mt-12' src={banner5} alt="banner-image5" />
      <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=banner"><img className='px-[10%] p-4 mt-12' src={banner6} alt="banner-image6" /></a>
      <div className="mt-12 p-6">
      <div className="md:sticky md:top-[150px] mb-4">
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
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
    </div>
  )
}

export default Home


