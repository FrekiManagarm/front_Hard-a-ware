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
        {/* <a
          href="https://www.amazon.fr/ASUS-TUF-B450-PLUS-Gaming-II/dp/B08K93G7Q9?pd_rd_w=cjScV&content-id=amzn1.sym.841e11e3-55d4-4422-a11a-1f6d3371ceeb&pf_rd_p=841e11e3-55d4-4422-a11a-1f6d3371ceeb&pf_rd_r=MR7F1NFGWGEH8VJJ3Q13&pd_rd_wg=gW1iY&pd_rd_r=c81fc516-2ddb-4bf0-9a64-1b6bafa63b7c&pd_rd_i=B08K93G7Q9&linkCode=li3&tag=frekimanagarm-21&linkId=60425b89a2b05a8c5cb8a6f61ae6da16&language=fr_FR&ref_=as_li_ss_il"
          target="_blank"
        >
          <img
            border={5}
            src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08K93G7Q9&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=frekimanagarm-21&language=fr_FR"
          />
        </a> */}
        <ProductCard title="ASUS TUF B550 GAMING PLUS II" link="https://www.amazon.fr/ASUS-TUF-B450-PLUS-Gaming-II/dp/B08K93G7Q9?ref_=Oct_d_obs_d_430341031&amp;pd_rd_w=cjScV&amp;content-id=amzn1.sym.841e11e3-55d4-4422-a11a-1f6d3371ceeb&amp;pf_rd_p=841e11e3-55d4-4422-a11a-1f6d3371ceeb&amp;pf_rd_r=MR7F1NFGWGEH8VJJ3Q13&amp;pd_rd_wg=gW1iY&amp;pd_rd_r=c81fc516-2ddb-4bf0-9a64-1b6bafa63b7c&amp;pd_rd_i=B08K93G7Q9&_encoding=UTF8&tag=frekimanagarm-21&linkCode=ur2&linkId=9f5a642c406f4295fe83f53d7883f4cb&camp=1642&creative=6746" />
      </div>
    </>
  );
}
