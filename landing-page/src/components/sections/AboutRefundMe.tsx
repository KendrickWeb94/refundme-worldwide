import { Section } from "../ui/Section";

export const AboutRefundMe = () => {
  return (
    <Section>
      <br />
      <div className="grid items-baseline justify-between grid-cols-1 md:grid-cols-1 gap-8">
        <div className=" space-y-4 ">
          <span className="rounded-3xl  tw-font-bold  px-4 py-1 border-[0.8px] border-tw_primary bg-tw_primary/10 text-tw_primary text-sm font-medium">
            About us
          </span>
          <h1 className="text-5xl text-nowrap text-black font-semibold">
            Our Story
          </h1>
          <p className="text-gray-800 font-inter">
            RefundMe was started up back in 2010
          </p>
        </div>
        <div className="space-y-4 md:max-w-xl">
          <p className="text-gray-800 font-inter">
            Our experienced team has over 20 years combined experience working
            in industry for banks, the Financial Conduct Authority or the
            Financial Ombudsman Service
          </p>
          <p className="text-gray-800 font-inter">
            Thousands of people across the world have lost millions of pounds
            from scams. We want to help you get that back.
          </p>
          <p className="  tw-font-medium">
            So we started{" "}
            <span className="tw-font-bold   underline-offset-8">RefundMe</span>
          </p>
          <br />
        </div>
      </div>
    </Section>
  );
};
