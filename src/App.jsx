import React from "react";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import PatientList from "./Patientslist";
import Profile from "./profile";
function App() {
  return (
    <div className="mt-[0px]  w-[1600px] h-[1195px] bg-[#f6f7f8]">
      <Nav />
      <div className="flex justify-around">
        <PatientList />
        <Dashboard />
        <Profile />
      </div>
    </div>
  );
}
export default App;
