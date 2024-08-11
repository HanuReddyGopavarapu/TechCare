import React, { useState, useEffect } from "react";

import downloadicon from "./asset/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

import birthcal from "./asset/BirthIcon.svg";
import femaleicon from "./asset/FemaleIcon.svg";
import phoneicon from "./asset/PhoneIcon.svg";
import insuranceicon from "./asset/InsuranceIcon.svg";

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = "coalition";
    const password = "skills-test";
    const auth = btoa(`${username}:${password}`);

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setProfileData(data[3]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!profileData) return <div>No Data Available</div>;

  return (
    <div className="flex flex-col">
      <div className=" mt-[10px] w-[367px] h-[750px] bg-white rounded-[16px] opacity-100  p-4">
        <div className=" mx-[75px] mt-[15px] w-[200px] h-[200px] bg-transparent">
          <img
            src={profileData.profile_picture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="  w-[164px] h-[33px] mx-[95px] mt-[22px] text-center font-manrope font-extrabold text-[24px] leading-[33px] text-[#072635]">
          {profileData.name}
        </div>

        <div className="mt-[30px] space-y-4 mx-[5px]">
          <div className="flex items-center">
            <img
              src={birthcal}
              alt="Icon"
              className="w-[42px] h-[42px] mr-[10px] "
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-600">Date of Birth</p>
              <p className="text-[14px] font-manrope font-extrabold text-gray-600">
                {profileData.date_of_birth}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={femaleicon}
              alt="Icon"
              className="w-[42px] h-[42px] mr-[10px] "
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-600">Gender</p>
              <p className="text-[14px] font-manrope font-extrabold text-gray-600">
                {profileData.gender}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={phoneicon}
              alt="Icon"
              className="w-[42px] h-[42px] mr-[10px] "
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-600">Contact Info</p>
              <p className="text-[14px] font-manrope font-extrabold text-gray-600">
                {profileData.phone_number}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={phoneicon}
              alt="Icon"
              className="w-[42px] h-[42px] mr-[10px] "
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-600">Emergency Contacts</p>
              <p className="text-[14px] font-manrope font-extrabold text-gray-600">
                {profileData.emergency_contact}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={insuranceicon}
              alt="Icon"
              className="w-[42px] h-[42px] mr-[10px] "
            />
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-600">Emergency Contacts</p>
              <p className="text-[14px] font-manrope font-extrabold text-gray-600">
                {profileData.insurance_type}
              </p>
            </div>
          </div>
        </div>

        <div className=" mx-[80px] my-[20px]  ">
          <button className="bg-[#01F0D0] hover:bg-[#5fa59c] text-white px-4 py-2 rounded-lg">
            Show Information
          </button>
        </div>
      </div>

      <div>
        <div className=" mt-[10px] w-[367px] h-[350px] bg-white rounded-[16px] opacity-100  p-4">
          <div className="  w-[164px] h-[33px]  mt-[20px]  font-manrope font-extrabold text-[24px] leading-[33px] text-[#072635]">
            Lab Results
          </div>
          {/* Icon and Date of Birth */}
          <div className="mt-[35px] space-y-4 mx-[0px] max-h-[200px] overflow-y-auto ">
            {profileData.lab_results.map((repot, index) => (
              <div key={index} className="flex items-center justify-between hover:bg-[#F6F7F8]">
                <span className="text-[14px] text-[#072635]">{repot}</span>
                <div className="flex-shrink-0 ml-[10px]">
                  <img
                    src={downloadicon}
                    alt="Icon"
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
