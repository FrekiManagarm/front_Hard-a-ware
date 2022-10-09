import React from 'react'
import Carousel from 'react-multi-carousel'
import { Card, Title } from '@mantine/core';
import Image from 'next/image';
import useCategoryListingStyles from './CategoryListing.style'

const mockData = [
  {
    label: "Processeur",
    image: "https://i.imgur.com/QNagqNo.jpg",
    link: ""
  },
  {
    label: "Carte Graphique",
    image: "https://i.imgur.com/9bNON4B.jpg",
    link: ""
  },
  {
    label: "Boitier",
    image: "https://i.imgur.com/DZPyoxi.jpg",
    link: ""
  },
  {
    label: "Refroidissement",
    image: "https://i.imgur.com/wchTTvi.jpg",
    link: ""
  },
  {
    label: "SSD",
    image: "https://i.imgur.com/VajKN46.jpg",
    link: ""
  },
  {
    label: "Disque Dur",
    image: "https://i.imgur.com/f8BxASB.jpg",
    link: ""
  },
  {
    label: "Mémoire Vive",
    image: "https://i.imgur.com/P05hTez.jpg",
    link: ""
  },
  {
    label: "Carte Mère",
    image: "https://i.imgur.com/fsdypZw.jpg",
    link: ""
  },
  {
    label: "Alimentation",
    image: "https://i.imgur.com/EJP9x7A.jpg",
    link: ""
  },
];

const CategoryListing = () => {

  const { classes } = useCategoryListingStyles()

  return (
      <div className={classes.wrapper} >
        <Carousel 
          partialVisbile
          additionalTransfrom={0}
          arrows
          ssr
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass='container-with-dots'
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={true}
          responsive={{
            desktop1: {
              breakpoint: {
                max: 5000,
                min: 2000,
              },
              items: 9,
              slidesToSlide: 3,
            },
            desktop2: {
              breakpoint: {
                max: 2000,
                min: 1700,
              },
              items: 8,
              slidesToSlide: 2,
            },
            desktop3: {
              breakpoint: {
                max: 1700,
                min: 1500,
              },
              items: 7,
              slidesToSlide: 2,
            },
            desktop4: {
              breakpoint: {
                max: 1500,
                min: 1350,
              },
              items: 6,
              slidesToSlide: 2,
            },
            desktop5: {
              breakpoint: {
                max: 1350,
                min: 1060,
              },
              items: 5,
              slidesToSlide: 2,
            },
            desktop6: {
              breakpoint: {
                max: 1060,
                min: 850,
              },
              items: 4,
              slidesToSlide: 2,
            },
            desktop7: {
              breakpoint: {
                max: 850,
                min: 650,
              },
              items: 3,
              slidesToSlide: 1,
            },
            desktop8: {
              breakpoint: {
                max: 650,
                min: 0,
              },
              items: 1,
              slidesToSlide: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          swipeable
        >
          {mockData.map((item, index) => {
            return (
              <>
                <div className={classes.item} key={index}>
                  <Image src={item.image} width={35} height={35} />
                  <Title>{item.label}</Title>
                </div>
              </>
            )
          })}
        </Carousel>
      </div>
  )
}

export default CategoryListing