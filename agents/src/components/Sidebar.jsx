import {useEffect, useState} from "react";
import {useChatStore} from "../store/useChatStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import {useAuthStore} from "../store/useAuthStore";
import {Headphones, MessageCircleX, User} from "lucide-react";
import RefundmeLogo from "../assets/RefundMe-light.svg"
import RefundmeLogoSmall from "../assets/sm-logo.png"
import UserSvg from "../assets/user.svg"
import {Link} from "react-router-dom";

export {
    RefundmeLogo,
    RefundmeLogoSmall,
    UserSvg,
}

const Sidebar = () => {
    const {getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = useChatStore();

    const {onlineUsers} = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);
    const {logout, authUser} = useAuthStore();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    // Filter users to show only those with role="user"
    const usersOnly = users.filter(user => user.role === "user");
    const filteredUsers = showOnlineOnly 
        ? usersOnly.filter((user) => onlineUsers.includes(user._id)) 
        : usersOnly;

    if (isUsersLoading) return <SidebarSkeleton/>;

    return (
        <aside className="h-screen w-20 lg:w-64  shadow-sm bg-white relative flex flex-col transition-all duration-200">
            <div className=" w-full p-5">
                <div className="flex items-center mb-4 gap-2">
                    {/*<Users className="size-6" />*/}
                    {/*<span className="font-medium hidden lg:block">Contacts</span>*/}
                    <img src={RefundmeLogo} alt={"refundme logo"} className=" max-w-38 hidden lg:flex"/>
                    <img src={RefundmeLogoSmall} alt={"refundme logo"} className=" max-w-38 flex lg:hidden"/>
                </div>
                <hr />
                {/* TODO: Online filter toggle */}
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        {/*<input*/}
                        {/*    type="checkbox"*/}
                        {/*    checked={showOnlineOnly}*/}
                        {/*    onChange={(e) => setShowOnlineOnly(e.target.checked)}*/}
                        {/*    className="checkbox checkbox-sm accent-[#3328BF]"*/}
                        {/*/>*/}
                        <span className="text-sm">Active Users</span>
                    </label>
                    <span className="text-xs text-green-500">({onlineUsers.length - 1} online)</span>
                </div>
            </div>

            <div className="overflow-y-auto w-full py-3">
                {filteredUsers.map((user) => (<button
                    key={user._id}
                    onClick={() => setSelectedUser(user)}
                    className={`
              w-full p-3 flex items-center gap-3
              hover:bg-primary/60 transition-colors
              ${selectedUser?._id === user._id ? "bg-primary/30 " : ""}
            `}
                >
                    <div className="relative mx-auto lg:mx-0">
                        <img
                            src={user.profilePic || "/avatar.png"}
                            alt={user.name}
                            className="size-8 object-cover rounded-full"
                        />
                        {onlineUsers.includes(user._id) && (<span
                            className="absolute bottom-0 right-0 size-3 bg-green-500
                  rounded-full "
                        />)}
                    </div>

                    {/* User info - only visible on larger screens */}
                    <div className="hidden lg:block text-left min-w-0">
                        <div className="font-medium text-gray-900 truncate">{user.fullName}</div>
                        <div className="font-regular text-sm text-gray-500 truncate">{user.location}</div>
                        {/*<div className="text-sm text-zinc-600">*/}
                        {/*    {onlineUsers.includes(user._id) ? "Online" : "Offline"}*/}
                        {/*</div>*/}
                    </div>
                </button>))}
                <Link to={"/profile"} className="flex lg:flex-row flex-col gap-4 mt-4 mx-3 p-2 lg:bg-transparent bg-primary/20 items-center lg:justify-start justify-center rounded">
                   <img src={UserSvg} alt={"user"} className="size-6 fill-gray-500 rounded-full border"/>
                    <span className="hidden lg:inline">Your Profile</span>
                </Link>
                <div className="mt-4 mx-3 p-2 bg-primary/20 flex flex-col items-center justify-center rounded ">
                    <button className="text-primary lg:hidden flex">
                        <Headphones />
                    </button>
                  <div className=" hidden lg:block">
                      <p className="text-sm text-gray-800">Have any feedback about this session?</p>
                      <textarea
                          placeholder="Type your feedback here..."
                          className="bg-white/60 mt-2 p-1 w-full resize-none h-28 rounded text-sm"
                      ></textarea>
                  </div>
                </div>
                <div className="flex items-center my-4 absolute bottom-0 w-full justify-center">
                    <button
                        className="flex gap-2 items-center text-white rounded-md px-4 w-[90%] bg-primary justify-center py-2"
                        onClick={logout}>
                        <MessageCircleX className="size-5"/>
                        <span className="hidden lg:flex">End session</span>
                    </button>
                </div>

                {filteredUsers.length === 0 && (<div className="">

                    <div className="text-center text-zinc-500 py-4">No online users</div>

                </div>)}
            </div>
        </aside>);
};
export default Sidebar;