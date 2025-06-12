'use client'
import React, { useEffect, useState } from 'react'
import RestrauntCard from './ui/RestrauntCard';

export default function LocationRestraunts() {
    const [restData, setRestData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const heroku = "https://cors-anywhere.herokuapp.com/";
    const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.25050&lng=77.40650&is-seo-homepage-enabled=true";
                const response = await fetch(heroku+swiggyUrl);
                const data = await response.json();
                setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    console.log(restData);
  return (
    <div className='flex gap-5 overflow-x-auto w-[80%] m-auto'>
        {restData.map((item, index) => (
            <RestrauntCard title={item.info.name} rating={item.info.avgRating} location={item.info.areaName} image={item.info.cloudinaryImageId} cuisiness={item.info.cuisines} key={index} />
        ))}

    </div>
  )
}
