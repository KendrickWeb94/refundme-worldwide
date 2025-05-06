import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
      <div className="md:p-2 p-3 sticky bottom-0  shadow-2xl w-full  bg-white">
        {imagePreview && (
            <div className="mb-3 flex items-center gap-2">
              <div className="absolute top-[-6rem]">
                <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                />
                <button
                    onClick={removeImage}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
                    type="button"
                >
                  <X className="size-3" />
                </button>
              </div>
            </div>
        )}

        <form onSubmit={handleSendMessage} className="flex items-center gap-2 ">
          <div className="flex items-center justify-between w-full gap-2">
            <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
            />

            <input
                type="text"
                className="outline-none bg-transparent rounded-lg text-sm p-3"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />


            <button
                type="button"
                className={`
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
                onClick={() => fileInputRef.current?.click()}
            >
              <Image size={20} />
            </button>
          </div>

          {/*<button*/}
          {/*  type="submit"*/}
          {/*  className="text-primary"*/}
          {/*  disabled={!text.trim() && !imagePreview}*/}
          {/*>*/}
          {/*  <Send size={22} />*/}
          {/*</button>*/}
        </form>
      </div>
  );
};
export default MessageInput;
