import { useEffect } from "react";

const TawkChat = () => {
  useEffect(() => {
    const Tawk_API = (window as any).Tawk_API || {};
    const Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67c1b09bb481f1190b620c30/1il69joir";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI element, just loads the script
};

export default TawkChat;
