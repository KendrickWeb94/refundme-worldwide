import { Section_lightBg } from "../ui/Section_lightBg"
import LogoDark from "@/assets/img/RefundMe-light.svg"

export {
    LogoDark
}

export const Footer = () => {
    return (
        <Section_lightBg>
            <div className="">
            <footer className="w-full font-inter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <img src={LogoDark} alt="" />
                    <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                    <a href="https://start-your-claim-refundme.onrender.com" className="py-2.5 px-5 h-9 block w-fit bg-tw_primary rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a>
                </div>
        
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">RefundMe</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="/"  className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a href="/About"  className=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li className="mb-6"><a href="/How-it-works"  className=" text-gray-600 hover:text-gray-900">How it works</a></li>
                        <li className="mb-6"><a href="/Why-RefundMe"  className=" text-gray-600 hover:text-gray-900">Why RefundMe</a></li>
                        <li className="mb-6"><a href="/Articles"  className=" text-gray-600 hover:text-gray-900">Articles</a></li>
                     
                    </ul>
                </div>
        
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Countries</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">USA</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">England</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Neitherland</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Turkey</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Germany</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Sweden</a></li>
                    </ul>
                </div>
        
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Benefits</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a href="javascript:;"  className="text-gray-600 hover:text-gray-900">Guarantied refund</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Quick replies with agents</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Suitable for any language</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">User friendly steps</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                    </ul>
                </div>
        
              
            </div>

           
        </div>
    </footer>
                                            
            </div>
        </Section_lightBg>
    )
}