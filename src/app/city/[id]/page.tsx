'use client'
import DealOptions from '@/app/components/DealOptions';
import Menu from '@/app/components/Menu';
import RestrauntInfoCard from '@/app/components/ui/RestrauntInfoCard';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const id = useParams().id;
    const [restInfoData, setRestInfoData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const heroku = "https://cors-anywhere.herokuapp.com/";
                const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.25050&lng=77.40650&restaurantId=${id}`;
                const response = await fetch(heroku+url);
                const data = await response.json();
                console.log(data);
                setRestInfoData(data.data);
            }catch(err) {
                console.log(err);
            }
        }
        fetchData();        
    }, []);

  return (
    <div className='w-[55%] m-auto my-10'>
        <h2 className='text-2xl font-bold'>{restInfoData?.cards[2].card.card.info.name}</h2>
        <RestrauntInfoCard rating={restInfoData?.cards[2].card.card.info.avgRating} costForTwo={restInfoData?.cards[2].card.card.info.costForTwo} cuisines={restInfoData?.cards[2].card.card.info.cuisines} location={restInfoData?.cards[2].card.card.info.locality} minTime={restInfoData?.cards[2].card.card.info.sla.minDeliveryTime} maxTime={restInfoData?.cards[2].card.card.info.sla.maxDeliveryTime} />
        <DealOptions restInfoDataAll={restInfoData?.cards[2].card.card.info.aggregatedDiscountInfo
          ?.descriptionList || []} />
          <Menu menuData={restInfoData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []} />
    </div>
  )
}
