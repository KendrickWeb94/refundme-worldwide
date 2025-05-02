import { useState, useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Select from "react-select";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";
import { RefundmeLogoSmall } from "../components/Sidebar.jsx";

const SignUpPage = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    location: selectedCountry || "",
  });

  useEffect(() => {
    // Fetch the countries data
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    fetchCountries();

    // Check for a saved country in localStorage
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: (
      <div className="flex items-center">
        <img
          src={country.flags?.png || ""}
          alt={`${country.name.common} flag`}
          width={12}
          height={12}
          className="inline-block w-4 h-4 mr-2"
        />
        <p className="text-xs text-gray-800">{country.name.common}</p>
      </div>
    ),
  }));
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.location) return toast.error("Your location is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="h-full  grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-4">
          {/* LOGO */}
          <div className="flex items-center justify-center ">
            <img
              src={RefundmeLogoSmall}
              alt={"refundme logo"}
              className={`size-12`}
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5 max-w-full`}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <div className="form-control">
              <div className="relative">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your country/location
                </label>
                {/*<select*/}
                {/*    id="countries"*/}
                {/*    value={formData.location}*/}
                {/*    onChange={(e) => setFormData({...formData, location: e.target.value})}*/}
                {/*    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-full"*/}
                {/*    disabled={loading}*/}
                {/*>*/}
                {/*    <option value="">Choose a country</option>*/}
                {/*{countries.length > 0 ? (*/}
                {/*    countries.map((country) => (*/}
                {/*        <option key={country.cca2}*/}
                {/*                value={country.cca2}>*/}

                {/*            <img*/}
                {/*                src={country.flags?.png || ""}*/}
                {/*                alt={`${country.name.common} flag`}*/}
                {/*                width={16}*/}
                {/*                height={16}*/}
                {/*                className="inline-block w-6 h-5 mr-2"*/}
                {/*            />*/}
                {/*            {country.name.common}*/}

                {/*        </option>*/}
                {/*    ))*/}
                {/*) : (*/}
                {/*    <div className=" text-sm">Loading countries...</div>*/}
                {countries.length > 0 ? (
                  <Select
                  className="text-sm text-gray-800"
                    options={countries
                      .sort((a, b) =>
                        a.name.common.localeCompare(b.name.common)
                      )
                      .map((country) => ({
                        value: country.cca2,
                        label: country.name.common,
                      }))}
                    value={countryOptions.find(
                      (option) => option.value === formData.location
                    )}
                    onChange={(selectedOption) =>
                      setFormData({
                        ...formData,
                        location: selectedOption.value,
                      })
                    }
                    placeholder="Select a country"
                    classNames={{ positioned: "absolute", zindex: 1000 }}
                  />
                ) : (
                  <div className="text-sm">Loading countries...</div>
                )}
                {/*        <Loader2 className="size-5 animate-spin"/>*/}
                {/*    </div>)}*/}
              </div>
            </div>

            <button
              type="submit"
              className=" bg-primary flex items-start justify-center gap-2 text-white px-4 py-2 text-sm rounded-md w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:underline underline-offset-4"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <AuthImagePattern
        title="Start your claim"
        subtitle="Connect with expert agents, share your story, and get refunded."
      />
    </div>
  );
};
export default SignUpPage;
