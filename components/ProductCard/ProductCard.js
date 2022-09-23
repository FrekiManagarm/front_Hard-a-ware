import React from 'react'
import { ProductCardBottomWrapper, ProductCardButton, ProductCardImageWrapper, ProductCardTitle, ProductCardWrapper } from './ProductCard.style'

const ProductCard = ({ title, imageUrl, link }) => {
  return (
    <ProductCardWrapper>
        <ProductCardImageWrapper>
        <a
          href="https://www.amazon.fr/ASUS-TUF-B450-PLUS-Gaming-II/dp/B08K93G7Q9?pd_rd_w=cjScV&content-id=amzn1.sym.841e11e3-55d4-4422-a11a-1f6d3371ceeb&pf_rd_p=841e11e3-55d4-4422-a11a-1f6d3371ceeb&pf_rd_r=MR7F1NFGWGEH8VJJ3Q13&pd_rd_wg=gW1iY&pd_rd_r=c81fc516-2ddb-4bf0-9a64-1b6bafa63b7c&pd_rd_i=B08K93G7Q9&linkCode=li3&tag=frekimanagarm-21&linkId=60425b89a2b05a8c5cb8a6f61ae6da16&language=fr_FR&ref_=as_li_ss_il"
          target="_blank"
        >
          <img
            border={0}
            src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08K93G7Q9&Format=_SL250_&ID=AsinImage&MarketPlace=FR&ServiceVersion=20070822&WS=1&tag=frekimanagarm-21&language=fr_FR"
          />
        </a>
        </ProductCardImageWrapper>
        <ProductCardBottomWrapper>
          <ProductCardTitle>
            {title}
          </ProductCardTitle>
          <ProductCardButton href={link}>
            Acheter
          </ProductCardButton>
        </ProductCardBottomWrapper>
    </ProductCardWrapper>
  )
}

export default ProductCard