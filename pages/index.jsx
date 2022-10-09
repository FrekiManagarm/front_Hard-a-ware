import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import CategoryListing from "../components/Home/CategoryListing/CategoryListing";
import HeroBanner from "../components/Home/HeroBanner/HeroBanner";
import ProductCard from "../components/ProductCard/ProductCard";
import { MAIN_COLOR } from "../settings/constants";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      
      {/* <CategoryListing/> */}
    </div>
  );
}
  