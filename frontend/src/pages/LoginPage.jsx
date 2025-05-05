import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2} from "lucide-react";
import {RefundmeLogoSmall} from "../components/Sidebar.jsx";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
      <div className="h-full items-center grid lg:grid-cols-2">
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <img src={RefundmeLogoSmall} alt={"refundme logo"} className={`size-12`} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email
                </label>
                <div className="relative">

                  <input
                      type="email"
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-full`}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <div className="relative">

                  <input
                      type={showPassword ? "text" : "password"}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-full`}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                        <EyeOff className="h-5 w-5 text-base-content/40" />
                    ) : (
                        <Eye className="h-5 w-5 text-base-content/40" />
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="bg-primary flex items-start justify-center gap-2 text-white px-4 py-2 text-sm rounded-md w-full" disabled={isLoggingIn}>
                {isLoggingIn ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Loading...
                    </>
                ) : (
                    "Sign in"
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="text-primary font-medium hover:underline underline-offset-4">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Pattern */}
        <AuthImagePattern
            title={"Welcome back!"}
            subtitle={"Sign in to continue your conversations and catch up with your messages."}
        />
      </div>
  );
};
export default LoginPage;
