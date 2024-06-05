import Link from 'next/link'
import React from 'react';

const PGCard = ({ pg }) => {
    // const router = useRouter()
    return (
        <>

            <div className="border rounded-lg mb-4 p-4 flex flex-col md:flex-row items-start md:items-center justify-between" >
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <Link href="/detail" >
                        {pg.image}

                    </Link>
                </div>
                <div className="md:ml-4 mt-4 md:mt-0 flex flex-col justify-between w-full md:w-2/3">
                    <div>
                        <h2 className="text-lg font-bold">{pg.name}</h2>
                        <p>{pg.location}</p>
                        <p>{pg.price}</p>
                        <p>{pg.gender === 'Female' ? 'Female' : 'Male'} 🏠</p>
                    </div>
                    <div className="flex mt-4">
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2">Schedule a Visit</button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Request a Callback</button>
                    </div>
                </div>
            </div >
         

        </>


    );
}

export default PGCard;
