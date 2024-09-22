import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import axios from "axios";
import { BsCart2 } from "react-icons/bs";
import { auth, db } from "../components/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    // Fetch the product details using the ID from the URL
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
// Function to add product to cart
const addToBag = async () => {
  if (isClothingCategory && !size) {
    toast.error("Please select a size before adding to the cart.");
    return;
  }

  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const cartRef = doc(db, "Users", userId, "cart", id); 

    try {
      await setDoc(cartRef, {
        ...product,
        selectedSize: isClothingCategory ? size : null, 
      });
      toast.success("Added To Bag", {
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-green-600 text-white font-semibold",
      });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-red-600 text-white font-semibold",
      });
    }
  } else {
    toast.error("You need to be logged in to add items to the cart.");
  }
};

const buyNow = async () => {
  // Only check for size if the product belongs to the clothing category
  if (isClothingCategory && !size) {
    toast.error("Please select a size before adding to the cart.");
    return;
  }

  if (auth.currentUser) {
    const userId = auth.currentUser.uid;
    const cartRef = doc(db, "Users", userId, "cart", id); // Using the product id as the document ID in cart

    try {
      await setDoc(cartRef, {
        ...product, // Spread the product data
        selectedSize: isClothingCategory ? size : null, // Only include size if applicable
      });
      toast.success("Added To Bag", {
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-green-600 text-white font-semibold",
      })
      navigate("/cart");
    } catch (error) {
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        className: "bg-red-600 text-white font-semibold",
      });
    }
  } else {
    toast.error("You need to be logged in to add items to the cart.");
  }
};


  const isClothingCategory =
    product.category === "men's clothing" || product.category === "women's clothing";

  return (
    <div className="p-8 mt-28 flex flex-col md:flex-row justify-evenly">
      <div className="w-full">
        <img
          className="md:w-[50%] border rounded-lg p-8 md:ml-[25%]"
          src={product.image}
          alt={product.title}
        />
        <div className="w-full md:flex items-center justify-center gap-6 mt-4">
          <button
            onClick={addToBag}
            className="flex justify-center w-full md:w-[40%] border text-[#b82089] border-[#b82089] p-2 md:px-20 py-3 font-bold rounded-md"
          >
            <BsCart2 className="text-[20px] mr-2" />
            Add to Cart
          </button>
          <button 
          onClick={buyNow} className="justify-center p-2 w-full mt-4 md:mt-0 bg-[#9e2088] text-white md:w-[40%] md:px-20 py-3 font-bold rounded-md flex">
            <MdOutlineKeyboardDoubleArrowRight className="text-[23px] mr-2" />
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <div className="rounded-md p-4 border w-full">
          <p className="text-xl font-extrabold opacity-70">{product.title}</p>
          <h1 className="text-3xl mt-4">${product.price}</h1>
          <div className="mt-2 flex items-center mb-2">
            <span className="rounded-2xl px-2 text-white font-bold p-1 bg-[#038d63] text-sm">
              {product.rating.rate} ★
            </span>
            <span className="ml-2 font-semibold opacity-60 text-sm text-gray-600">
              {product.rating.count} Reviews
            </span>
          </div>
          <p className="bg-[#f8f8ff] w-[86px] rounded-xl text-[12px] px-2 mt-2">
            Free delivery
          </p>
        </div>

        {/* Conditionally display size options if the category is men's or women's clothing */}
        {isClothingCategory && (
          <div className="p-4 rounded-md border mt-4 w-full">
            <p className="text-xl font-semibold">Select the size</p>
            <div className="flex md:gap-4 gap-1 text-[12px] p-2">
              {["S", "M", "L", "XL", "XXL"].map((item) => (
                <button
                  key={item}
                  className={`border border-black px-3 py-1 rounded-2xl ${
                    size === item ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            {size && <p className="mt-2">Selected Size: {size}</p>}
          </div>
        )}

        <div className="p-4 rounded-md border mt-4 w-full">
          <h2 className="text-xl font-semibold">Product Details</h2>
          <h2 className="mt-4">Name: {product.title}</h2>
          <h2 className="mt-2">Category: {product.category}</h2>
          <h2 className="mt-2 mb-2">Description: {product.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
