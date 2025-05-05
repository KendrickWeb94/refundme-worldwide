import goodImg from "../../assets/svg/good.svg";

export { goodImg };

export const WhyChoose = () => {
  return (
    <main className="bg-tw_primary/10">
      <div className="tw_container relative w-full mx-auto max-w-[90%] py-10">
        <div className="w-full flex justify-between relative gap-8 ds:flex-wrap md:flex-nowrap">
          <div className="space-y-4 md:w-[60%]">
            <button className="rounded-3xl  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary text-white text-sm font-medium">
              Why us
            </button>
            <h2 className="text-5xl max-w-sm font-semibold leading-[3.6rem]">
              Why Choose
              <br />
              <span className="text-tw_primary">RefundMe</span>
            </h2>
            {/* <p className=" md:max-w-md text-base absolute bottom-0 left-0 tw-font-regular ">
              At the heart of our offering are a set of innovative features that
              have been meticulously designed to address the specific needs.
            </p> */}
          </div>
          <div className="flex md:w-[60%] items-center gap-4 flex-wrap">
            <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
              <img
                src={goodImg}
                width={30}
                height={30}
                className="object-cover"
                alt=""
              />
              <h1 className="text-[#0D0D0D] tw-font-medium">Quick replies</h1>
              <p className="text-sm tw-font-light text-[#808080]">
               the thing about using is that our agents and experts reply faster to meet your need
              </p>
            </div>
            <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
              <img
                src={goodImg}
                width={30}
                height={30}
                className="object-cover"
                alt=""
              />
              <h1 className="text-[#0D0D0D] tw-font-medium">24/7 Support</h1>
              <p className="text-sm tw-font-light text-[#808080]">
                we are always online with people working on shifts to help with your questions
              </p>
            </div>
            <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
              <img
                src={goodImg}
                width={30}
                height={30}
                className="object-cover"
                alt=""
              />
              <h1 className="text-[#0D0D0D] tw-font-medium">Guaranted refund</h1>
              <p className="text-sm tw-font-light text-[#808080]">
                after being to refund 80+ people in 7 months , we can say that we are have a high succes rate
              </p>
            </div>
            <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
              <img
                src={goodImg}
                width={30}
                height={30}
                className="object-cover"
                alt=""
              />
              <h1 className="text-[#0D0D0D] tw-font-medium">Bank connections</h1>
              <p className="text-sm tw-font-light text-[#808080]">
               we have connections and affilations with many banks , so that money you lost? consider it refunded
              </p>
            </div>
            <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
              <img
                src={goodImg}
                width={30}
                height={30}
                className="object-cover"
                alt=""
              />
              <h1 className="text-[#0D0D0D] tw-font-medium">Good reviews</h1>
              <p className="text-sm text-[#808080]">
                as you have seen on our website, we do have good feedbacks from people we've helped , and we are verified on trustpilot
              </p>
            </div>
            {/* <div className="rounded-md p-4 ds:w-full sm:w-[220px] bg-[#F9F9FB] space-y-4">
            <img
              src={goodImg}
              width={30}
              height={30}
              className="object-cover"
              alt=""
            />
            <h1 className="text-[#0D0D0D] font-medium">Budget Tracker</h1>
            <p className="text-sm text-[#808080]">
              Gain financial clarity with The Future's insightful budget
              tracker.
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};
