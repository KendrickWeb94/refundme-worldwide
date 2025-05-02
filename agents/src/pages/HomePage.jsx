import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";


const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-white">
      <div className="">
        <div className="bg-white rounded-lg w-full ">
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
