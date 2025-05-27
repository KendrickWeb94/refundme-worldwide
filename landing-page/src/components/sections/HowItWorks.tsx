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
                <span className="rounded-3xl  tw-font-bold  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary/10 text-tw_primary text-sm tw-font-bold">
                  How Refundme works
                </span>
                <h1 className="text-5xl text-nowrap text-black font-semibold">
                  The process
                </h1>
                <p className="text-gray-600 font-inter">
                  We're here to help you all the way through!
                </p>
                <br />
                <p className="text-gray-600 font-inter">
                  here we have listed the process we go through to get your
                  money back, you are special to us , and we would do everything
                  to help you.
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
                    <h1 className="text-sm text-gray-800 tw-font-bold tw-font-bold">
                      The Investigation
                    </h1>
                  </div>
                  <p className="text-gray-500 text-sm leading-7 tw-font-regular">
                    RefundMe will investigate your case and gather all the
                    necessary information to support your claim. This includes
                    reviewing your transaction history, communication with the
                    bank, and any other relevant details. .
                  </p>
                </div>
                <hr />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm text-gray-800 font-inter tw-font-bold">
                      The Bank
                    </h1>
                  </div>
                  <p className="tw-font-regular text-sm text-gray-500 leading-8">
                    RefundMe will submit your claim to the bank, providing all
                    the evidence gathered during the investigation. The bank is
                    required to review your claim and respond within a specific
                    timeframe.
                  </p>
                </div>
                <hr />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm text-gray-800 font-inter tw-font-bold">
                      FOS
                    </h1>
                  </div>
                  <p className="tw-font-regular text-sm text-gray-500 leading-8">
                    If the bank rejects your claim or does not respond within
                    the required timeframe, RefundMe can escalate the case to
                    the Financial Ombudsman Service (FOS). The FOS will review
                    the case and make a decision based on the evidence provided.
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
