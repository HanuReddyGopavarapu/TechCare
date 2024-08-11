import React from "react";
import logo from "./asset/TestLogo.svg";
import ppic from "./asset/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import Home from "./asset/home_FILL0_wght300_GRAD0_opsz24.svg";
import Group from "./asset/group_FILL0_wght300_GRAD0_opsz24.svg";
import cal from "./asset/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import msg from "./asset/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import transc from "./asset/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import settings from "./asset/settings_FILL0_wght300_GRAD0_opsz24.svg";
import dots from "./asset/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

function Nav() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 rounded-[70px] w-[1564px] h-[72px] mx-auto mt-[0px]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-[210px] h-[48px]" />
      </div>

      <div className="flex items-center space-x-8 ">
        <div className="hover:bg-[#01F0D0] rounded-[41px] p-[5px]">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <img src={Home} className="text-xl" />
            <span>Overview</span>
          </a>
        </div>

        <div className="hover:bg-[#01F0D0] rounded-[41px] p-[5px]">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <img src={Group} className="text-xl" />
            <span>Patients</span>
          </a>
        </div>
        <div className="hover:bg-[#01F0D0] rounded-[41px] p-[5px]">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <img src={cal} className="text-xl" />
            <span>Schedule</span>
          </a>
        </div>
        <div className="hover:bg-[#01F0D0] rounded-[41px] p-[5px]">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <img src={msg} className="text-xl" />
            <span>Message</span>
          </a>
        </div>
        <div className="hover:bg-[#01F0D0] rounded-[41px] p-[5px]">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <img src={transc} className="text-xl" />
            <span>Transactions</span>
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src={ppic}
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-gray-300"
        />
        <div>
          <span className="block text-gray-700 font-medium">
            Dr. Jose Simmons
          </span>
          <span className="block text-sm text-gray-500">
            General Practitioner
          </span>
        </div>
        <img src={settings} className="text-xl text-gray-700" />
        <img src={dots} className="text-xl text-gray-700" />
      </div>
    </nav>
  );
}

export default Nav;
