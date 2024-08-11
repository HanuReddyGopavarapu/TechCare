import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import cardimg1 from "./asset/respiratory rate.svg";
import cardimg2 from "./asset/temperature.svg";
import cardimg3 from "./asset/HeartBPM.svg";

Chart.register(...registerables);

const Dashboard = () => {
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

  const lastDiagnosis =
    profileData.diagnosis_history[profileData.diagnosis_history.length - 1];

  const data = {
    labels: [
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
    ],
    datasets: [
      {
        label: "Systolic",
        data: [120, 125, 130, 135, 140, 145],
        borderColor: "#FF6384",
        fill: false,
      },
      {
        label: "Diastolic",
        data: [80, 82, 84, 86, 88, 90],
        borderColor: "#36A2EB",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div>
      <div className="mt-[10px] ml-[400px] left-[18px] w-[766px] h-[735px] opacity-100 bg-[#FFFFFF] rounded-[16px] ">
        <div className="m-[15px]">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="flex  justify-between m-[15px]  opacity-100">
          <div className="bg-[#E0F3FA] rounded-[12px] p-4 w-[228px] h-[242px] flex flex-col items-center justify-center relative ">
            <img
              src={cardimg1}
              alt="lungs Icon "
              className="rounded-full w-[120px] h-[120px] absolute top-[0px] left-[0px] p-[16px]"
            />
            <p className=" text-[16px] font-medium mr-[75px] mt-[100px]   ">
              Respiratory Rate
            </p>
            <p className=" text-[30px] font-extrabold text-gray-600 mr-[84px]">
              {lastDiagnosis.respiratory_rate.value}
            </p>
            <p className="mr-[145px] mt-[10px] text-[14px] text-gray-500">
              {lastDiagnosis.respiratory_rate.levels}
            </p>
          </div>
          <div className="bg-[#FFE6E9] rounded-[12px] p-4 w-[228px] h-[242px] flex flex-col items-center justify-center relative">
            <img
              src={cardimg2}
              alt="Temperature Icon "
              className="rounded-full w-[120px] h-[120px] absolute top-[0px] left-[0px] p-[16px]"
            />
            <p className="text-[16px] font-medium mr-[105px] mt-[100px]">
              Temperature
            </p>
            <p className="text-[30px] font-extrabold text-gray-600 mr-[115px]">
              {lastDiagnosis.temperature.value}
            </p>
            <p className="mr-[145px] mt-[10px] text-[14px] text-gray-500">
              {lastDiagnosis.temperature.levels}
            </p>
          </div>
          <div className="bg-[#FFE6F1] rounded-[12px] p-4 w-[228px] h-[242px] flex flex-col items-center justify-center relative">
            <img
              src={cardimg3}
              alt="Heart Icon"
              className="rounded-full w-[120px] h-[120px] absolute top-[0px] left-[0px] p-[16px]"
            />
            <p className="text-[16px] font-medium mr-[115px] mt-[100px]">
              Heart Rate
            </p>
            <p className="text-[30px] font-extrabold text-gray-600 mr-[84px]">
              {lastDiagnosis.heart_rate.value}
            </p>
            <p className="mr-[70px] mt-[10px] text-[14px] text-gray-500 ">
              {lastDiagnosis.heart_rate.levels}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] ml-[400px] left-[18px] w-[766px] h-[358px] opacity-100 bg-[#FFFFFF] rounded-[16px]">
        <h1 className="text-[24px] font-extrabold p-[20px]">Diagnostic List</h1>

        <div className="flex justify-between bg-[#F6F7F8] rounded-[24px] h-[48px] w-[726px] items-center py-[14px] px-[30px] ml-[20px] font-bold">
          <p className="w-[30%]">Problem/Diagnosis</p>
          <p className="w-[40%]">Description</p>
          <p className="w-[30%]">Status</p>
        </div>

        <div className="h-[59px] w-[723px] flex flex-row py-[14px] mt-[11px] overflow-hidden">
          {profileData.diagnostic_list.map((diag, index) => (
            <div key={index}>
              <p className="flex-none w-[30%] pl-[50px]">{diag.name}</p>
              <p className="flex-none w-[40%] pl-[55px]">{diag.description}</p>
              <p className="flex-none w-[30%] truncate">{diag.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
