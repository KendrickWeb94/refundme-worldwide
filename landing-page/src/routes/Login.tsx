import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import GoogleImg from "@/assets/img/google.svg";
import { GoBack } from "@/components/ui/go-back";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export { GoogleImg };

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Password field
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    try {
      // Send login request to the backend
      const response = await axios.post(
        "http://localhost:3009/login", // Change to your login API endpoint
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure the request is JSON
          },
        }
      );

      // Handle successful login
      if (response.data.success) {
        // Store user info in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: response.data.uid,
            email: response.data.email,
            name: response.data.name,
          })
        );

        // Redirect to the dashboard or another page
        navigate("/start-your-claim");
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center relative justify-center w-full h-screen">
      <div className="absolute m-5 top-0 left-0">
        <GoBack />
      </div>

      {loading && (
        <div className="w-full flex items-center fixed bg-tw_primary/40 p-4 bg-opacity-40 top-0 z-20 justify-center h-screen">
          <div className="rounded-md flex items-center text-gray-600 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
            <Loader2 className="animate-spin w-12 h-12" />
            Logging you in...
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-md flex items-center text-red-500 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
          {error}
        </div>
      )}

      <div className="w-full max-w-lg p-5 text-sm">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
                 <Label className="tw-font-medium text-gray-800 text-xs">Email*</Label>
            <Input
              type="email"
              value={email}
              placeholder="Enter your email to login"
              className="text-xs text-gray-400 tw-font-regular"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
              <Label className="tw-font-medium text-gray-800 text-xs">Password*</Label>
            <Input
              type="password"
              value={password}
              placeholder="Enter your password"
              className="text-xs text-gray-400 tw-font-regular"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex items-center tw-font-medium justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 accent-tw_primary rounded-sm"
              />
              <label htmlFor="remember-me" className="text-gray-600 text-xs">
                Remember me
              </label>
            </div>
            <Link to={"/forgot-password"} className="text-tw_primary text-xs">
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className="tw-font-medium btn-primary-3 rounded-sm w-full"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

      

        

        <br />
        <div className="text-center flex gap-2 flex-wrap items-center justify-center tw-font-regular text-sm text-gray-600">
          If you don't already have an account, easy peasy{" "}
          <Link
            to={"/get-started"}
            className="text-tw_primary underline underline-offset-8 l-2"
          >
            click to create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
