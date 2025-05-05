import { X } from "lucide-react"
import { useState } from "react";
import { Link } from "react-router-dom"


export const Options = () => {
      const [OpenOptions, setOpenOptions] = useState(false);
    
      function ToggleOptionsOff() {
        setOpenOptions(!OpenOptions);
      }
    return (
        <div className={`w-full h-screen z-50 fixed top-0 bg-tw_primary/50 ${OpenOptions ? "hidden" : "block"}`}>
            {/* this would be a pop up to show if the user would love to sign up as a guest or a user*/}
                <div className="relative w-full h-screen flex items-center justify-center">
                    <button onClick={ToggleOptionsOff} className="cancel-btn absolute  m-5 right-0 top-0 w-8 h-8 rounded-full bg-tw_primary flex items-center justify-center text-white border border-white">
                        <X />
                    </button>
                    <div className="max-w-3xl px-10 bg-white rounded-md py-10 w-full">
                        <div className="w-full flex-wrap md:flex-nowrap flex gap-8">
                            <div className="space-y-2">
                                <h1 className="tw-font-medium">Register as a guest</h1>
                                <p className="text-red-400 text-sm">( not recommended )</p>
                                <p className="tw-font-regular text-sm text-gray-500 ">
                                    your details would not be saved and after a session we won't be able to reach you
                                </p>
                                <br />
                                     <Link to={"/Guest"} className=" bg-gray-500/15 rounded-md w-fit text-sm px-6 py-2 text-black">
                                        Continue as guest
                                     </Link>
                            </div>
                          
                            <div className="space-y-2">
                                <h1 className="tw-font-medium">Register as a User</h1>
                                <p className="text-green-400 text-sm">( highly recommended )</p>
                                <p className="tw-font-regular text-sm text-gray-500 ">
                                your details would  be saved and after a session we would be able to reach you and refer to other experts
                                </p>
                                <br />
                                     <Link to={"/Get-started"} className=" bg-tw_primary rounded-md w-fit text-sm px-6 py-2 text-white">
                                       Create an account
                                     </Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </div>
    )
}