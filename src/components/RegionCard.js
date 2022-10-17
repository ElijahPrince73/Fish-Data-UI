import React from "react";
import { Link } from "react-router-dom";

import { findAverages } from "../utils";

const FishCard = ({ region, regionData }) => {
  return (
    <Link to={`/regions/${region}`} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
      <div className="mt-3">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Region: {region}</p>
        <p className="font-bold text-gray-900 dark:text-white">Average Calories: {findAverages(regionData, 'Calories')}</p>
        <p className="font-bold text-gray-900 dark:text-white">Average Fat: {findAverages(regionData, 'FatTotal')} g</p>
      </div>
    </Link>
  )
}

export default FishCard