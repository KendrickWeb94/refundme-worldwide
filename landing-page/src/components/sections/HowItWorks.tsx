
import { Grid_layout_xl } from "../ui/Grid_layout-xl";
import { Section } from "../ui/Section";




export const HowItWorks = () => {
  
  return (
    <div className="">
    
      <Section>
      <div className="w-full space-y-5">
      
       
        <div className="pt-10">
          <Grid_layout_xl>
            <div className="space-y-4">
              <button className="rounded-3xl  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary text-white text-sm font-medium">
                How refundme works
              </button>
              <h1 className="text-5xl text-nowrap text-black font-semibold">
               The process
              </h1>
              <p className="text-gray-600 font-inter">
                We're here to help you all the way through!
              </p>
              <br />
              <p className="text-gray-600 font-inter">
                here we have listed the process we go through to get your money
                back, you are special to us , and we would do everything to help
                you.
              </p>
              <br />
              {/*<Link*/}
              {/*    target="_blank"*/}
              {/*    to={"https://refundme-worldwide.onrender.com/"}*/}
              {/*    className="btn-primary-2 text-sm tw-font-regular">Start your claim</Link>*/}
            </div>
          
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                 
                  <h1 className="text-2xl text-gray-800 tw-font-medium font-medium">
                    The Investigation
                  </h1>
                </div>
                <p className="text-gray-500 tw-font-light ">
                  Our Fraud Investigators will assess your case to see if we can
                  help.
                </p>
              </div>
              <hr />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
               
                  <h1 className="text-2xl text-gray-800 font-inter font-medium">
                    The Bank
                  </h1>
                </div>
                <p className="tw-font-light text-gray-500">
                  RefundMe will prepare your individual case and submit a
                  bespoke report to the bank in order to receive their formal
                  response
                </p>
              </div>
              <hr/>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                 
                  <h1 className="text-2xl text-gray-800 font-inter font-medium">
                   FOS
                  </h1>
                </div>
                <p className="tw-font-light text-gray-500">
                  If the bank refuses reimbursement, RefundMe takes your case to
                  the FOS for an independent review, the final stage determining
                  your refund amount
                </p>
              </div>
            </div>
          </Grid_layout_xl>
        </div>
      </div>
    </Section>
    </div>
  );
};
