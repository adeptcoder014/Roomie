import PGCard from "@/component/PGCard";
import Map from "@/component/Map";
import Image from "next/image";

export default function Home() {
  const pgData = [
    {
        id: 1,
        name: 'Sendai House',
        location: 'South Campus',
        price: '₹14,499/mo',
        gender: 'Female',
        image: 'sendai_house_image_url',
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
            <h1 className="text-xl font-bold mb-4">28 PGs waiting to be yours in Delhi</h1>
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

