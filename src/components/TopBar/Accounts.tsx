import React from "react";
import { LuBell } from "react-icons/lu";
import { LuUser } from "react-icons/lu";

const Accounts: React.FC = () => {
    return (
        <div className="flex mt-5 gap-5">
            <LuBell size={30} className="h-auto w-auto p-2 bg-white border border-gray-200 rounded-full text-red-600 hover:bg-red-100 transition-colors"/>
            <LuUser size={30} className="h-auto w-auto p-2 bg-white border border-gray-200 rounded-full text-red-600 hover:bg-red-100 transition-colors"/>
        </div>
    )
}

export default Accounts;