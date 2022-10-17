import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

import useFish from '../context/FIshesContext'
import { groupByRegion, findAverages } from "../utils";

import Navbar from "../components/Navbar";
import Image from '../components/Image'

const Regions = () => {
  const { regionName } = useParams()
  const { getFishes, fishes } = useFish();

  useEffect(() => {
    getFishes();
  }, []);

  const region = groupByRegion(fishes)[regionName]

  if (!region) {
    return <div>LOADING</div>
  }

  return (
    <div className="container px-3 mx-auto pb-3">
      <Navbar regions={groupByRegion(fishes)} />
      <div className="mt-20">
        <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
          <div className="mt-3">
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Region: {regionName}</p>
            <p className="font-bold text-gray-900 dark:text-white">Average Calories: {findAverages(region, 'Calories')}</p>
            <p className="font-bold text-gray-900 dark:text-white">Average Fat: {findAverages(region, 'FatTotal')} g</p>
          </div>
          <div className="mt-3">
            {region.map(({ ImageGallery, SpeciesName, Calories, FatTotal, Color }) => {
              return (
                <div key={Math.random()} className="flex items-center mt-6 ">
                  <Image images={ImageGallery} />
                  <div className="ml-12">
                    <p className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{SpeciesName}</p>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Average Calories: {Calories}</p>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">Fat per serving: {FatTotal}</p>
                    <div className="font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{__html: Color}}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Regions