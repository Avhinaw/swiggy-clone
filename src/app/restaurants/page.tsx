'use client'
import React, { useEffect, useState } from 'react'
import LocationRestraunts from '../components/LocationRestraunts'
import DishOption from '../components/DishOption';
import SemmerEffect from '../components/layout/SemmerEffect';

export default function page() {
  const [dishData, setDishData] = useState([]);
  const [restData, setRestData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try{
              const heroku = "https://cors-anywhere.herokuapp.com/";
  const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";
              const response = await fetch(heroku+swiggyUrl);
              const data = await response.json();
              setDishData(data.data.cards[0].card.card.imageGridCards.info);
              setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, [])

if(restData.length === 0 || dishData.length === 0) {
  return <SemmerEffect />
};

  return (
    <div className='min-h-screen w-screen'>
      <DishOption DishData={dishData} />
      <LocationRestraunts restData={restData} />
    </div>
  )
}
