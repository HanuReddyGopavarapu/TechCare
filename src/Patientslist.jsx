// src/components/PatientList.jsx
import React from "react";
import patientsdata from "./patientsdetails";
import Hdots from "./asset/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import searchicon from "./asset/search_FILL0_wght300_GRAD0_opsz24.svg";

const PatientList = () => {
  return (
    <div className="absolute mt-[10px] ml-[0px] left-[18px] w-[367px] max-h-[1110px] bg-white rounded-[16px] opacity-100">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[24px] font-bold">Patients</h2>
        <img src={searchicon} alt="img" className="text-gray-500 w-[17.99px] h-[18px]" />
      </div>
      <div className="p-4 space-y-4 max-h-[1030px] overflow-y-auto">
        {patientsdata.map((patient, index) => (
          <div
            key={index}
            className="flex items-center py-2 hover:bg-[#a0cec8]"
          >
            <img
              src={patient.profilePicture}
              alt={patient.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <div className="text-[14px] font-semibold">{patient.name}</div>
                <img src={Hdots} alt="img" className="text-xl text-gray-700" />
              </div>
              <div className="text-[14px] text-gray-600">
                {patient.gender}, {patient.age} years
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
