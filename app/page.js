import PGCard from "@/component/PGCard";
import Map from "@/component/Map";
import Image from "next/image";
import FilterBar from "@/component/FilterBar";

export default function Home() {
    const pgData = [
        {
            id: 1,
            name: 'Sendai House',
            location: 'South Campus',
            price: '₹14,499/mo',
            gender: 'Female',
            image: <Image
                alt="Sendai House"
                src="/pg.webp"
                height={250}
                width={550}
                className='w-full md:w-auto'
            />
        },
        {
            id: 2,
            name: 'Boston House',
            location: 'North Campus',
            price: '₹21,899/mo',
            gender: 'Male',
            image: <Image
                alt="Boston House"
                src="/pg.webp"
                height={250}
                width={550}
                className='w-full md:w-auto'
            />
        },
        {
            id: 3,
            name: 'Nagoya House',
            location: 'South Campus',
            price: '₹17,699/mo',
            gender: 'Male',
            image: <Image
                alt="Nagoya House"
                src="/pg.webp"
                height={250}
                width={550}
                className='w-full md:w-auto'
            />
        }
    ];

    return (
        <>
            <FilterBar />
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 p-4">
                    <h1 className="text-xl font-bold mb-4">28 PGs waiting to be yours in Delhi</h1>
                    {pgData.map(pg => (
                        <PGCard key={pg.id} pg={pg} />
                    ))}
                </div>
                <div className="w-full md:w-1/3 p-4">
                    <Map />
                </div>
            </div>
        </>
    );
}
