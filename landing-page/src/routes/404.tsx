import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="bg-gradient-to-r from-tw_primary via-tw_primary/80 to-tw_primary/50 bg-clip-text text-transparent tw-font-medium text-center text-8xl ">
        404
      </h1>
      <p className="text-gray-500 text-center tw-font-regular">
        This page might have been removed, deleted, or still in progress or
        doesnt exist
      </p>
      <Link to={"/"} className=" btn-primary-2">
        Go back to the homepage
      </Link>
    </div>
  );
};
