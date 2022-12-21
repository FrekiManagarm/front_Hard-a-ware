import Image from 'next/image';
import React, { useRef } from 'react'
import { Rerousel } from 'rerousel'
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import useCategoryListingStyles from './CategoryListing.style';
import { useRouter } from 'next/router';

const images = [
    {
        imageUrl: "https://i.imgur.com/5JaBK3E.jpg",
        label: "processeur",
        url: "/components/cpu"
    },
    {
        imageUrl: "https://i.imgur.com/fsdypZw.jpg",
        label: "carte_mere",
        url: "/components/motherboard"
    },
    {
        imageUrl: "https://i.imgur.com/9bNON4B.jpg",
        label: "carte_graphique",
        url: "/components/gpu"
    },
    {
        imageUrl: "https://i.imgur.com/wchTTvi.jpg",
        label: "refroidissement",
        url: "/components/cooling"
    },
    {
        imageUrl: "https://i.imgur.com/f8BxASB.jpg",
        label: "hdd",
        url: "/components/hdd"
    },
    {
        imageUrl: "https://i.imgur.com/VajKN46.jpg",
        label: "ssd",
        url: "/components/ssd"
    },
    {
        imageUrl: "https://i.imgur.com/EJP9x7A.jpg",
        label: "alimentation",
        url: "/components/psu"
    },
    {
        imageUrl: "https://i.imgur.com/DZPyoxi.jpg",
        label: "boitier",
        url: "/components/case"
    },
    {
        imageUrl: "https://i.imgur.com/P05hTez.jpg",
        label: "memoire_vive",
        url: "/components/ram"
    },
];

const CategoryListing = () => {

    const autoplay = useRef(Autoplay({ delay: 2000 }))
    const { classes } = useCategoryListingStyles();
    const router = useRouter();

    return (
        <Carousel
            loop
            height={300}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            {images.map((item) => (
                <Image
                    quality={70}
                    className={classes.image}
                    onClick={() => router.push('/components/[[...tab]]', item.url)}
                    style={{
                        margin: "1rem", borderRadius: "2rem", cursor: "pointer", background: "rgba(222, 222, 222, 0.7)",
                        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.35)"
                    }}
                    loading="lazy"
                    src={item.imageUrl}
                    key={item.label}
                    width={300}
                    height={200} />
            ))}
        </Carousel>
    )
}

export default CategoryListing