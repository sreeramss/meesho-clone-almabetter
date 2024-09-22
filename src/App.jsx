import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Jewellery from "./pages/Jewellery";
import Electronics from "./pages/Electronics";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/products/:id" element={<ProductDetails />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
