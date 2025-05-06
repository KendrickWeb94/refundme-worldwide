import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { RefundmeLogoSmall } from "./Sidebar.jsx";
import MBSidebar from "./sidebar-mobile.jsx";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showbar, setShowbar] = useState(false);

  function toggleShowbar() {
    setShowbar(!showbar);
  }

  return (
      <div className="w-full md:w-[90%] mx-auto md:my-4 md:shadow-xl rounded-md bg-white">
        {showbar && <MBSidebar onClose={toggleShowbar} />}

        {/* Mobile header */}
        <div className="p-2.5 md:hidden w-full flex items-center justify-between px-4">
          <button onClick={toggleShowbar}>
            <Menu size={20} className="cursor-pointer" />
          </button>
          <img src={RefundmeLogoSmall} className="size-9" alt="refundme logo" />
          <button onClick={() => setSelectedUser(null)}>
            <X size={20} />
          </button>
        </div>

        <hr className="md:hidden" />

        {/* User Info */}
        {selectedUser && (
            <div className="flex p-2.5 items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white text-sm uppercase flex items-center justify-center">
                  {selectedUser.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 3)
                      .join("")}
                </div>

                <div className="-space-y-1">
                  <h3 className="font-medium text-gray-900">{selectedUser.fullName}</h3>
                  <p className="tw-font-regular text-xs text-gray-500">{selectedUser.location}</p>
                </div>
              </div>

              <div
                  className={`w-2 h-2 rounded-full ${
                      onlineUsers.includes(selectedUser._id) ? "bg-green-400" : "bg-gray-500"
                  }`}
              />
            </div>
        )}
      </div>
  );
};

export default ChatHeader;
