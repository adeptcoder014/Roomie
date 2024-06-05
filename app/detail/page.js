import PGCard from "@/component/PGCard";
import Map from "@/component/Map";
import Image from "next/image";
import FilterBar from "@/component/FilterBar";
import FrankfurtHouseDetails from "@/component/Details1";
import FrankfurtHouse from "../../component/Details";
import PropertyDetails from '../../component/PropertyDetails';
import SimilarProperties from '../../component/PropertyDetails1';

export default function Detail() {


    return (
        <>

            <FrankfurtHouse />
            <FrankfurtHouseDetails />


            <PropertyDetails />
            <SimilarProperties />
        </>
    );
}
