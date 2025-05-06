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
    const usersOnly = users.filter(user => user.role === "agent");
    const filteredUsers = showOnlineOnly
        ? usersOnly.filter((user) => onlineUsers.includes(user._id))
        : usersOnly;

    if (isUsersLoading) return <SidebarSkeleton/>;

    return (
        <aside className="h-screen w-20 lg:w-64 hidden shadow-sm bg-white relative md:flex flex-col transition-all duration-200">
            <div className=" w-full p-5">
                <div className="flex items-center mb-4 gap-2">
                    {/*<Users className="size-6" />*/}
                    {/*<span className="font-medium hidden lg:block">Contacts</span>*/}

                    <img src={RefundmeLogoSmall} alt={"refundme logo"} className=" max-w-12 w-full flex"/>
                </div>
                <hr/>
                {/* TODO: Online filter toggle */}

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
                        {user?.profilePic ? (
                            <div
                                className="size-8 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white text-sm uppercase flex items-center justify-center">
                                {user.fullName
                                    .split(" ")
                                    .map((n) => n[0])
                                    .slice(0, 3)
                                    .join("")}
                            </div>
                        ) : (
                            <div
                                className="size-8 rounded-full bg-gradient-to-r from-bg-primary to-bg-primary/80 text-white text-sm uppercase flex items-center justify-center">
                                {user.fullName
                                    .split(" ")
                                    .map((n) => n[0])
                                    .slice(0, 2)
                                    .join("")}
                            </div>
                        )}


                        {onlineUsers.includes(user._id) && (<span
                            className="absolute bottom-0 right-0 size-3 bg-green-500
                  rounded-full "
                        />)}
                    </div>

                    {/* User info - only visible on larger screens */}
                    <div className="hidden lg:block text-left min-w-0">
                        <div className="font-medium text-gray-900 truncate">{user.fullName}</div>
                        <div className="font-regular text-xs text-gray-500 truncate">{user.location}</div>
                        {/*<div className="text-sm text-zinc-600">*/}
                        {/*    {onlineUsers.includes(user._id) ? "Online" : "Offline"}*/}
                        {/*</div>*/}
                    </div>
                </button>))}
                <Link to={"/profile"}
                      className="flex lg:flex-row flex-col gap-4 mt-4 mx-3 p-2 lg:bg-transparent bg-primary/20 items-center lg:justify-start justify-center rounded">
                    <img src={UserSvg} alt={"user"} className="size-6 fill-gray-500 rounded-full border"/>
                    <span className="hidden lg:inline">Your Profile</span>
                </Link>
                <div className="mt-4 mx-3 p-2 bg-primary/20 flex flex-col items-center justify-center rounded ">
                    <button className="text-primary lg:hidden flex">
                        <Headphones/>
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
                        <span className="hidden text-xs lg:flex">End session</span>
                    </button>
                </div>

                {filteredUsers.length === 0 && (<div className="">

                    <div className="text-center text-sm text-zinc-500 py-4">No active agents</div>

                </div>)}
            </div>
        </aside>);
};
export default Sidebar;