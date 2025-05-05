import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <div className="py-10 w-full min-h-[80vh] flex items-center justify-center tw-container">
      <div className="space-y-4 md:max-w-[60%] mx-auto">
        <h1 className=" text-3xl tw-font-bold text-center">
          Nobody deserves to be scammed
        </h1>
        <p className=" text-gray-500 tw-font-regular text-center font-regular">
          Don't miss this chance, contact an agent now or start your claim, we
          are always here to help you get your money back , nobody deserves to
          be scammed
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
              target="_blank"
            to={"https://refundme-worldwide.onrender.com/"}
            className="text-tw_primary underline underline-offset-8 tw-font-medium"
          >
          Start your claim
          </Link>
         
        </div>
      </div>
    </div>
  );
};
