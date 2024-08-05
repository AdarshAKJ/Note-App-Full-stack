import React from "react";
import { getInititals } from "../../utills/helper";

const ProfileInfo = ({OnLogout }) =>{
    return (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
            {getInititals("John Willam")}
            </div>

            <div>
                <p className="text-sm font-medium">Willam</p>
                 <button className="text-sm text-slate-700 underline" onClick={OnLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileInfo;