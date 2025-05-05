import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
      <div className="p-2.5 w-[90%] mx-auto my-4 shadow-xl rounded-md bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}



            <div
                className="size-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white text-sm uppercase flex items-center justify-center">
              {selectedUser.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 3)
                  .join("")}
            </div>


            {/* User info */}
            <div>
              <h3 className="font-medium text-gray-900">{selectedUser.fullName}</h3>
              <p className={`text-xs text-zinc-600  ${onlineUsers.includes(selectedUser._id) ? "text-green-400" : "text-gray-500"}`}>
                {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button onClick={() => setSelectedUser(null)}>
            <X />
          </button>
        </div>
      </div>
  );
};
export default ChatHeader;
