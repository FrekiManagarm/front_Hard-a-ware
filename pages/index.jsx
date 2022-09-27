import Image from "next/image";
import ProductCard from "../components/ProductCard/ProductCard";
import { MAIN_COLOR } from "../settings/constants";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10rem",
        }}
      >
        <ProductCard country="Processeur" title="Intel Core 12900K" image="https://i.imgur.com/Q7RfYcr.jpg" description="Processeur parfait pour le jeu et le multi-tâches" />
      </div>
    </>
  );
}
  