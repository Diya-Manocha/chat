import React from "react";
import assets from "../assets/assets";

const ChatContainer = () => {
  return (
    <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
      <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
      <p className="flex-1 text-lg text-white flex items-center">
        ddd{" "}
        <span className="flex-1 text-lg text-white flex items-center gap-2"></span>
      </p>
      <img src="" alt="" />
    </div>
  );
};

export default ChatContainer;
