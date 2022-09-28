import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import CardsCarousel from "../components/Home/Banner/Banner";
import ProductCard from "../components/ProductCard/ProductCard";
import { MAIN_COLOR } from "../settings/constants";

export default function Home() {
  return (
    <div>
      <CardsCarousel />
    </div>
  );
}
  