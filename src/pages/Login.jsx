import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";
import img1 from "../assets/loginimg.webp";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
//handle signup functionality 
  const handleSignUpNavigation = () => {
    navigate("/signUp");
  };
//handle submit when the form is submited 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in Successfully");
      navigate("/");
      toast.success("Welcome Back!", {
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        className: "bg-green-600 text-white font-semibold",
      });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
        className: "bg-red-500 text-white font-semibold",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#fdefe9] min-h-screen  flex items-center"
    >
      <div className=" bg-white mt-32 rounded-xl h-auto mb-20 w-[400px] mx-auto">
        <img src={img1} className=" rounded-t-xl" alt="" />
        <div className="p-8">
          <p className="text-xl font-extrabold">Login to view your profile</p>
          <input
            className="outline-none mt-4 w-full p-1 "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            className="outline-none mt-4 w-full p-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="mt-4 bg-[#9f2089] rounded-md text-lg font-bold text-white p-2 w-[100%]">
            Log In
          </button>
          <p className="mt-4 text-center text-[15px]">
            Dont have an account ?{" "}
            <span
              onClick={handleSignUpNavigation}
              className="text-[#9f2089] cursor-pointer"
            >
              Sign Up
            </span>{" "}
          </p>
          <p className="font-bold text-center text-[12px] mt-14">
            <span className="opacity-70">
              By continuing, you agree to Meesho's
            </span>
            <br />
            <span className="text-[#9f2089]">
              {" "}
              Terms & Conditions and Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
