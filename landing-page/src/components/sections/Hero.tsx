import Logo from "@/assets/img/RefundMe.svg";
import { MenuIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";


import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetPortal,
  // SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Stats_v1 } from "../ui/Stats-v1";


export { Logo };

export const Hero_Section = () => {
 

  return (
    <main className="relative hero-section-1 min-h-auto h-auto">
    
      <header className="py-4 tw-container">
        <nav className="w-full flex items-center justify-between">
          <a href={"/"} className="logo-container motion-preset-confetti">
            <img src={Logo} alt="" />
          </a>
          <ul className="ds:hidden mdl:flex tw-font-regular text-sm items-center gap-6">
            <a
              href="#about-refundme"
              className="text-white motion-preset-confetti  relative after:w-0 after:hover:w-full after:smooth after:h-[1.3px] after:rouned-full after:left-0 after:bg-white after:absolute after:bottom-[-0.2rem]  smooth font-medium"
            >
              About
            </a>
          
            <a
              href="#How-it-works"
              className="text-white relative after:w-0 after:hover:w-full after:smooth after:h-[1.3px] after:rouned-full after:left-0 after:bg-white after:absolute after:bottom-[-0.2rem]  smooth font-medium"
            >
              How it works
            </a>
            <a
              href="#why-refundme"
              className="text-white relative after:w-0 after:hover:w-full after:smooth after:h-[1.3px] after:rouned-full after:left-0 after:bg-white after:absolute after:bottom-[-0.2rem]  smooth font-medium"
            >
              Why RefundMe
            </a>
            <a
              href="#Articles"
              className="text-white relative after:w-0 after:hover:w-full after:smooth after:h-[1.3px] after:rouned-full after:left-0 after:bg-white after:absolute after:bottom-[-0.2rem]  smooth font-medium"
            >
              Articles
            </a>
          </ul>
          <div className="button-container">
            <Link
                target="_blank"
                to={"https://refundme-worldwide.onrender.com/"}
              
              className="btn-primary ds:hidden text-sm tw-font-regular xs:flex"
            >
              Start your claim
            </Link>

            <Sheet>
              <SheetTrigger>
                <div className="menu-btn text-white cursor-pointer ds:block mdl:hidden">
                  <MenuIcon />
                </div>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <div className="text-sm">
                  <ul className="flex flex-col text-sm tw-font-regular gap-4">
                    <a
                      href="#about-refundme"
                      className="text-gray-800  hover:text-white relative  py-1 border-gray-300  hover:border-none cursor-pointer w-full hover:px-3 hover:py-3 rounded-md hover:bg-tw_primary smooth font-medium"
                    >
                      About
                    </a>
                    <a
                      href="#How-it-works"
                      className="text-gray-800  hover:text-white relative  py-1 border-gray-300  hover:border-none cursor-pointer w-full hover:px-3 hover:py-3 rounded-md hover:bg-tw_primary smooth font-medium"
                    >
                      How it works
                    </a>
             
                    <a
                      href="#why-refundme"
                      className="text-gray-800  hover:text-white relative  py-1 border-gray-300  hover:border-none cursor-pointer w-full hover:px-3 hover:py-3 rounded-md hover:bg-tw_primary smooth font-medium"
                    >
                      Why RefundMe
                    </a>
                    <a
                      href="#Articles"
                      className="text-gray-800  hover:text-white relative  py-1 border-gray-300  hover:border-none cursor-pointer w-full hover:px-3 hover:py-3 rounded-md hover:bg-tw_primary smooth font-medium"
                    >
                      Articles
                    </a>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <section className="pt-8 tw-container">
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <div className="flex items-center gap-4 md:flex-nowrap justify-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2">
                <StarIcon fill="#facc15" stroke="none" size={13} />
                <StarIcon fill="#facc15" stroke="none" size={13} />
                <StarIcon fill="#facc15" stroke="none" size={13} />
                <StarIcon fill="#facc15" stroke="none" size={13} />
                <StarIcon fill="#facc15" stroke="none" size={13} />
              </div>
              <h1 className="text-center text-white  tw-font-medium">
                Mrs. Georgina Thomas
              </h1>
              <p className="text-gray-200 tw-font-regular max-w-sm text-center text-sm">
                I was lost when my husband was scammed, but you gave us hope.
                I’ll never forget it.
              </p>
            </div>
          </div>
          <h1 className="sm:text-7xl motion-preset-confetti ds:text-4xl  xs:text-5xl text-center text-white font-semibold max-w-2xl text-balance leading-tight">
            <span className="change-color text-blue-900">Have you</span> ever
            been scammed before?
          </h1>
          <p className="md:max-w-2xl text-balance tw-font-regular text-white text-center">
            we have helped over a 1000 people around europe and america get
            their money back, and we've recovered over 50 Million for fraud
            victims.
          </p>
          <div className="button-container text-sm  text-center flex-wrap">
            <Link
                target="_blank"
                to={"https://refundme-worldwide.onrender.com/"}
              
              className="btn-primary tw-font-light ds:w-full xs:w-fit"
            >
              Start your claim
            </Link>
            <Link
                target="_blank"
              to={"https://refundme-worldwide.onrender.com/"}
              className="btn-primary-1 tw-font-light ds:w-full xs:w-fit"
            >
              Contact an agent
            </Link>
          </div>
        
          {/* <img src={chatimg}  alt="" className="rounded-lg h w-full object-fill"/> */}
        </div>
        <div className=" translate-y-14">
      <Stats_v1 />
      </div>
      </section>
     
    </main>
  );
};
