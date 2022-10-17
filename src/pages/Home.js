import React, { useEffect } from "react";

import useFish from '../context/FIshesContext'
import { groupByRegion } from "../utils";

import Navbar from "../components/Navbar";
import RegionCard from "../components/RegionCard";

const Home = () => {
  const { loading ,getFishes, fishes } = useFish();

  useEffect(() => {
    getFishes();
  }, []);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container px-3 mx-auto">
      <Navbar regions={groupByRegion(fishes)}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20">
        {Object.entries(groupByRegion(fishes)).sort().map(([key, value]) => <RegionCard key={Math.random()} region={key} regionData={value} />)}
      </div>
    </div>
  )
}

export default Home