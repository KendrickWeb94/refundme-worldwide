// import {useEffect, useState} from "react";
// import {useChatStore} from "../store/useChatStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import {useAuthStore} from "../store/useAuthStore";
// import {Headphones, MessageCircleX, X} from "lucide-react";
//
// import RefundmeLogo from "../assets/sm-logo.png"
//
// import RefundmeLogoSmall from "../assets/sm-logo.png"
//
// import UserSvg from "../assets/user.svg"
// import {Link} from "react-router-dom";
//
// export {
//     RefundmeLogo,
//     RefundmeLogoSmall,
//     UserSvg,
// }
//
// const MBSidebar = () => {
//     const {getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = useChatStore();
//
//     const {onlineUsers} = useAuthStore();
//     const [showOnlineOnly, setShowOnlineOnly] = useState(false);
//     const {logout, authUser} = useAuthStore();
//
//     useEffect(() => {
//         getUsers();
//     }, [getUsers]);
//
//     // Filter users to show only those with role="user"
//     const usersOnly = users.filter(user => user.role === "user");
//     const filteredUsers = showOnlineOnly
//         ? usersOnly.filter((user) => onlineUsers.includes(user._id))
//         : usersOnly;
//
//     if (isUsersLoading) return <SidebarSkeleton/>;
//
//     return (
//         <main className={"backdrop-sepia-0 fixed top-0 z-50 left-0 w-full h-full bg-primary/20"}>
//             <aside className="h-screen w-64 shadow-sm bg-white relative flex flex-col transition-all duration-200">
//
//                 <div  className={"absolute z-20 right-[-1.1rem] top-[1rem] bg-white p-2 rounded-md flex items-center justify-center"}>
//                     <X size={18}/>
//                 </div>
//                 <div className="overflow-y-auto w-full py-3">
//                     {filteredUsers.map((user) => (<button
//                         key={user._id}
//                         onClick={() => setSelectedUser(user)}
//                         className={`
//               w-full p-3 flex items-center gap-3
//               hover:bg-primary/60 transition-colors
//               ${selectedUser?._id === user._id ? "bg-primary/30 " : ""}
//             `}
//                     >
//                         <div className="relative mx-0 lg:mx-0">
//                             {user?.profilePic ? (
//                                 <div
//                                     className="size-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white text-sm uppercase flex items-center justify-center">
//                                     {user.fullName
//                                         .split(" ")
//                                         .map((n) => n[0])
//                                         .slice(0, 3)
//                                         .join("")}
//                                 </div>
//                             ) : (
//                                 <div
//                                     className="size-8 rounded-full bg-gradient-to-r from-bg-primary to-bg-primary/80 text-white text-sm uppercase flex items-center justify-center">
//                                     {user.fullName
//                                         .split(" ")
//                                         .map((n) => n[0])
//                                         .slice(0, 2)
//                                         .join("")}
//                                 </div>
//                             )}
//
//
//                             {onlineUsers.includes(user._id) && (<span
//                                 className="absolute bottom-0 right-0 size-3 bg-green-500
//                   rounded-full "
//                             />)}
//                         </div>
//
//                         {/* User info - only visible on larger screens */}
//                         <div className="block text-left min-w-0">
//                             <div className="font-medium text-gray-900 truncate">{user.fullName}</div>
//                             <div className="font-regular text-sm text-gray-500 truncate">{user.location}</div>
//                             {/*<div className="text-sm text-zinc-600">*/}
//                             {/*    {onlineUsers.includes(user._id) ? "Online" : "Offline"}*/}
//                             {/*</div>*/}
//                         </div>
//                     </button>))}
//                     <Link to={"/profile"}
//                           className="flex  flex-row gap-4 mt-4 mx-3 p-2 lg:bg-transparent  items-center justify-start rounded">
//                         <img src={UserSvg} alt={"user"} className="size-6 fill-gray-500 rounded-full border"/>
//                         <span className="inline">Your Profile</span>
//                     </Link>
//                     <div className="mt-4 mx-3 p-2 bg-primary/20 flex flex-col items-center justify-center rounded ">
//                         <button className="text-primary hidden">
//                             <Headphones/>
//                         </button>
//                         <div className="block">
//                             <p className="text-sm text-gray-800">Have any feedback about this session?</p>
//                             <textarea
//                                 placeholder="Type your feedback here..."
//                                 className="bg-white/60 mt-2 p-1 w-full resize-none h-28 rounded text-sm"
//                             ></textarea>
//                         </div>
//                     </div>
//                     <div className="flex items-center my-4 absolute bottom-0 w-full justify-center">
//                         <button
//                             className="flex gap-2 items-center text-white rounded-md px-4 w-[90%] bg-primary justify-center py-2"
//                             onClick={logout}>
//                             <MessageCircleX className="size-5"/>
//                             <span className="flex text-xs">End session</span>
//                         </button>
//                     </div>
//
//                     {filteredUsers.length === 0 && (<div className="">
//
//                         <div className="text-center text-sm text-zinc-500 py-4">No active users</div>
//
//                     </div>)}
//                 </div>
//             </aside>
//         </main>
//         );
// };
// export default MBSidebar;

import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { Headphones, MessageCircleX, X } from "lucide-react";
import { Link } from "react-router-dom";
import UserSvg from "../assets/user.svg";

const MBSidebar = ({ onClose }) => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers, logout, authUser } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const usersOnly = users.filter((user) => user.role === "agent");
  const filteredUsers = showOnlineOnly
    ? usersOnly.filter((user) => onlineUsers.includes(user._id))
    : usersOnly;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* ✅ Backdrop */}
      <div
        className="bg-black/30 backdrop-blur-sm w-full h-full"
        onClick={onClose}
      />

      {/* ✅ Sidebar */}
      <aside className="h-screen w-64 shadow-sm bg-white absolute top-0 left-0 flex flex-col transition-all duration-200">
        {/*<div  className={"absolute z-20 right-[-1.1rem] top-[1rem] bg-white p-2 rounded-md flex items-center justify-center"}>*/}
        {/*    <X size={18}/>*/}
        {/*</div>*/}
        <div className="overflow-y-auto w-full py-3">
          {filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
              w-full p-3 flex items-center gap-3
              hover:bg-primary/60 transition-colors
              ${selectedUser?._id === user._id ? "bg-primary/30 " : ""}
            `}
            >
              <div className="relative mx-0 lg:mx-0">
                {user?.profilePic ? (
                  <div className="size-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white text-sm uppercase flex items-center justify-center">
                    {user.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 3)
                      .join("")}
                  </div>
                ) : (
                  <div className="size-8 rounded-full bg-gradient-to-r from-bg-primary to-bg-primary/80 text-white text-sm uppercase flex items-center justify-center">
                    {user.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}

                {onlineUsers.includes(user._id) && (
                  <span
                    className="absolute bottom-0 right-0 size-3 bg-green-500
                  rounded-full "
                  />
                )}
              </div>

              {/* User info - only visible on larger screens */}
              <div className="block text-left min-w-0">
                <div className="font-medium text-gray-900 truncate">
                  {user.fullName}
                </div>
                <div className="font-regular text-sm text-gray-500 truncate">
                  {user.location}
                </div>
                {/*<div className="text-sm text-zinc-600">*/}
                {/*    {onlineUsers.includes(user._id) ? "Online" : "Offline"}*/}
                {/*</div>*/}
              </div>
            </button>
          ))}
          <Link
            to={"/profile"}
            className="flex  flex-row gap-4 mt-4 mx-3 p-2 lg:bg-transparent  items-center justify-start rounded"
          >
            <img
              src={UserSvg}
              alt={"user"}
              className="size-6 fill-gray-500 rounded-full border"
            />
            <span className="inline">Your Profile</span>
          </Link>
          <div className="mt-4 mx-3 p-2 bg-primary/20 flex flex-col items-center justify-center rounded ">
            <button className="text-primary hidden">
              <Headphones />
            </button>
            <div className="block">
              <p className="text-sm text-gray-800">
                Have any feedback about this session?
              </p>
              <textarea
                placeholder="Type your feedback here..."
                className="bg-white/60 mt-2 p-1 w-full resize-none h-28 rounded text-sm"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center my-4 absolute bottom-0 w-full justify-center">
            <button
              className="flex gap-2 items-center text-white rounded-md px-4 w-[90%] bg-primary justify-center py-2"
              onClick={logout}
            >
              <MessageCircleX className="size-5" />
              <span className="flex text-xs">End session</span>
            </button>
          </div>

          {filteredUsers.length === 0 && (
            <div className="">
              <div className="text-center text-sm text-zinc-500 py-4">
                No active agents
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MBSidebar;
