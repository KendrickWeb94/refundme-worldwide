import ChatHeader from "./ChatHeader.jsx";


const NoChatSelected = () => {
    return (
        <main className={"w-full h-screen "}>
            <ChatHeader />
            <div className="w-full h-screen flex flex-1 flex-col items-center justify-center p-16 ">
                <div className="max-w-md text-center space-y-6">
                    {/* Icon Display */}
                    <div className="flex justify-center gap-4 mb-4">
                        <div className="relative">
                            {/*<div*/}
                            {/*  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center*/}
                            {/* justify-center animate-bounce"*/}
                            {/*>*/}
                            {/*  <MessageSquare className="w-8 h-8 text-primary " />*/}
                            {/*</div>*/}
                            <picture>
                                <source
                                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif"
                                    alt="😉"
                                    width="68"
                                    height="68"
                                />
                            </picture>
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <h2 className="text-2xl font-bold">Welcome to <span className="text-primary">Refundme</span></h2>
                    <p className="text-base-content/60">
                        Select an agent to start chatting
                    </p>
                </div>
            </div>
        </main>
    );
};

export default NoChatSelected;
