import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { GoBack } from "@/components/ui/go-back";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  location?: string;
  avatar?: string | null;
}

interface Country {
  name: string;
  code: string;
}

const GetStarted: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // API endpoint for fetching countries (using RestCountries API as it's free and widely used)
  const COUNTRIES_API_URL = "https://restcountries.com/v3.1/all?fields=name,cca2";

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(COUNTRIES_API_URL);
        const countryList = response.data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        // Sort countries alphabetically for better user experience
        countryList.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to load the list of countries. Please try again later.");
      }
    };

    fetchCountries();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        if (user?._id) {
          navigate("/start-your-claim");
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, [navigate]);

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setLocation(countries.find((c) => c.code === value)?.name || "");
  };

  // Handle email signup
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate required fields
    if (!name || !email || !password || !selectedCountry) {
      setLoading(false);
      setError("All fields marked with * are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("password", password.trim());
    formData.append("role", "user");
    formData.append("location", location.trim()); // Use the full country name

    if (profileImage instanceof File) {
      formData.append("avatar", profileImage);
    }

    try {
      const response = await axios.post(
        "http://localhost:3009/v1/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Signup Response:", response.data);

      if (response.status === 200 || response.status === 201) {
        const user: User = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/start-your-claim");
      } else {
        setError(
          response.data?.message || "Failed to create account. Please try again."
        );
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to create account. Please try again."
      );
      console.error("Signup Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle profile image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfileImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center relative justify-center w-full min-h-screen">
      <div className="absolute m-5 top-0 left-0">
        <GoBack />
      </div>

      {loading && (
        <div className="w-full flex items-center fixed bg-tw_primary/40 p-4 bg-opacity-40 top-0 z-20 justify-center h-screen">
          <div className="rounded-md flex items-center text-gray-600 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
            <Loader2 className="animate-spin w-12 h-12" />
            Creating your account...
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-md flex items-center text-red-500 gap-4 max-w-sm w-full tw-font-medium bg-white p-5">
          {error}
        </div>
      )}

      <div className="w-full max-w-lg p-5 text-sm">
        <form onSubmit={handleEmailSignup} className="space-y-4">
          <div className="flex w-full gap-2 items-center">
            <div className="space-y-1 w-full">
              <Label className="tw-font-medium text-gray-800 text-xs">
                Name*
              </Label>
              <Input
                type="text"
                value={name}
                placeholder="Your name"
                required
                className="text-gray-400 tw-font-regular text-xs"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-1 w-full">
              <Label className="tw-font-medium text-gray-800 text-xs">
                Email*
              </Label>
              <Input
                type="email"
                required
                value={email}
                placeholder="Your email"
                className="text-gray-400 tw-font-regular text-xs"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="tw-font-medium text-gray-800 text-xs">
              Password*
            </Label>
            <Input
              type="password"
              required
              value={password}
              placeholder="Your password"
              className="text-gray-400 tw-font-regular text-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label className="tw-font-medium text-gray-800 text-xs">
              Country*
            </Label>
            <Select onValueChange={handleCountryChange} value={selectedCountry}>
              <SelectTrigger className="w-full text-left text-gray-400 tw-font-regular text-sm">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code} className="tw-font-regular">
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* <div className="space-y-1">
            <Label className="tw-font-medium text-gray-800 text-xs">
              Profile Image (Optional)
            </Label>
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-gray-400 tw-font-regular text-xs"
            />
          </div> */}

          <Button
            type="submit"
            className="tw-font-medium btn-primary-3 rounded-sm w-full"
          >
            {loading ? "Creating your account..." : "Create account"}
          </Button>
        </form>

        <div className="text-center flex gap-2 text-sm flex-wrap items-center justify-center tw-font-regular text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to={"/welcome-back"}
            className="text-tw_primary underline underline-offset-8"
          >
            Click here to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;