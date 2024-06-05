import React from 'react';
import PGCard from './PGCard';
import Map from './Map';
import Image from 'next/image';

const PGList = () => {
    const pgData = [
        {
            id: 1,
            name: 'Sendai House',
            location: 'South Campus',
            price: '₹14,499/mo',
            gender: 'Female',
            image:  <Image
            alt="alt tag"
            src={require("./public/pg.webp")}
            height={40}
            width={40}
            // className='w-12 mx-auto mb-2'
          />
        },
        {
            id: 2,
            name: 'Boston House',
            location: 'North Campus',
            price: '₹21,899/mo',
            gender: 'Male',
            image: 'boston_house_image_url',
        },
        {
            id: 3,
            name: 'Nagoya House',
            location: 'South Campus',
            price: '₹17,699/mo',
            gender: 'Male',
            image: 'nagoya_house_image_url',
        }
    ];

    return (
        <div className="flex flex-row">
            <div className="w-2/3 p-4">
                <h1 className="text-xl  bg-blue-600 font-bold mb-4">28 PGs waiting to be yours in Delhi</h1>
                {pgData.map(pg => (
                    <PGCard key={pg.id} pg={pg} />
                ))}
            </div>
            <div className="w-1/3">
                <Map />
            </div>
        </div>
    );
}

export default PGList;
