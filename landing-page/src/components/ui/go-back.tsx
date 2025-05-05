import { ArrowLeft } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

export const GoBack = () => {
    const navigate = useNavigate(); 
    const goBack = () => {
        navigate(-1); // Go back one page in history
        // Or: history.goBack(); // For React Router v5 and below
      };
  return (
    <div>
      <Button variant={"outline"} onClick={goBack} size={"icon"} className=" shadow-lg">
        <ArrowLeft size={30} />
      </Button>
    </div>
  );
};
