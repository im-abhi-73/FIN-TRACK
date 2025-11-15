import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import React from "react";
import { validateEmail } from "../util/validation";
import toast from "react-hot-toast";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import { AppContext } from "../context/AppContext";
import { LoaderCircle } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // basic validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      setIsLoading(false);
      return;
    }
    if (!password.trim()) {
      setError("Please enter your password");
      setIsLoading(false);
      return;
    }

    setError("");

    // login api call
    try {
      const response = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        setUser(user);
        toast.success("Login successful");
        navigate("/dashboard");
      }
    } catch (err) {

    if(err.response && err.response.data.message){
        setError(err.response.data.message);
    }else{

      console.error("Error during login:", err);
      setError(err.message || "Something went wrong. Please try again.");

    }


    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* Background Image with blur */}
      <img
        src={assets.bg_login}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />

      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
          <h3 className="text-2xl font-semibold text-black text-center mb-2">
            Welcome Back
          </h3>

          <p className="text-sm text-slate-700 text-center mb-8">
            Please enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="example@gmail.com"
              type="email"
            />

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="********"
              type="password"
            />

            {error && (
              <p className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                {error}
              </p> 
            )}

            <button
              disabled={isLoading}
              type="submit"
              className={`w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 ${
                isLoading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin w-5 h-5 " />
                  SIGN IN
                </>
              ) : (
                "SIGN IN"
              )}
            </button>

            <p
              className="text-sm text-slate-800 text-center mt-6 cursor-pointer font-medium text-primary underline hover:text-primary-dark transition-colors"
              onClick={() => navigate("/signup")}
            >
              You don't have an account? Sign Up
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
