"use client";

import React, { useEffect, useState } from "react";
import SelectLocation from "../SelectLocation/SelectLocation";
import Navbar from '../navbar/Navbarl'
import useDataStore from "../../store/useDataStore";

const Pixisphere = () => {

  const [avalibleLocation, setAvalibleLocation] = useState([]);
  const{storeData,setData} = useDataStore();
  useEffect(() => {
    fetch("/api/photographers")
      .then((res) => res.json())
      .then((data) => {
       const allLocation = [...new Set(data?.map((d) => d.location))];
        setAvalibleLocation(allLocation);
      });
  }, []);
  

  return (
    <div className="min-h-screen p-6 w-[80%] flex flex-col mx-auto ">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Select a City</h2>
        <SelectLocation avalibleLocation={avalibleLocation} />
      </div>
    </div>
  );
};

export default Pixisphere;
