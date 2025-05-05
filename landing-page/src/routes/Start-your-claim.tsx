
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

interface LocalStorageUser {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  location?: string;
}

export const Start_your_claim = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); // Initially closed
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: LocalStorageUser = JSON.parse(storedUser);
        if (user?._id && localStorage.getItem("profileImageSkipped") !== "true") {
          setIsUploadModalOpen(true); // Show modal if user exists and hasn't skipped
        }
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
  }, [navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileImage", reader.result as string);
        localStorage.removeItem("profileImageSkipped"); // Clear the skipped flag
        setIsUploadModalOpen(false);
      };
      reader.readAsDataURL(uploadedImage);
    } else {
      setIsUploadModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    localStorage.setItem("profileImageSkipped", "true"); // Set a flag that the user skipped
    setIsUploadModalOpen(false);
  };
  //
  // const openUploadModal = () => {
  //   setIsUploadModalOpen(true);
  // };

  return (
    <div className="bg-[#EEEFF1] w-full relative min-h-screen">
      {isUploadModalOpen && (
        <div className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-tw_primary/30 z-40">
          <div className="max-w-sm w-full rounded-lg bg-white space-y-4">
            <div className="w-full p-4 border-b flex items-center justify-between">
              <div className="">
                <h1 className="text-sm tw-font-medium text-gray-700">
                  Would you like to upload a profile picture?
                </h1>
                <p className="text-gray-400 text-sm tw-font-regular">
                  must be a clear picture of you.
                </p>
              </div>
              <Button variant={"ghost"} size={"icon"} onClick={handleCloseModal}>
                <X />
              </Button>
            </div>
            <div className="p-4 flex items-center justify-center">
              <div className="w-full">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center tw-font-medium    justify-center w-full h-fit tw-font-regular border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG , WEBP (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-end tw-font-regular text-sm">
              <Button variant="secondary" onClick={handleCloseModal} className="mr-2">
                Skip
              </Button>
              <Button onClick={handleUpload} disabled={!uploadedImage}>
                {uploadedImage ? "Upload" : "Continue"}
              </Button>
            </div>
          </div>
        </div>
      )}
      {/*<ChatWindow openUploadModal={openUploadModal} /> */}
      {/* Pass the function down */}
    </div>
  );
};

export default Start_your_claim;