import { SimpleGrid, UnstyledButton, Text } from '@mantine/core';
import React from 'react'
import Image from 'next/image';
import useHomeComponentsStyles from './HomeComponents.style'
import { useRouter } from 'next/router';
import Banner from '../../components/Banner/Banner';

const mockData = [
    {
        label: "Processeur",
        image: "https://i.imgur.com/5JaBK3E.jpg",
        link: "/components/cpu"
    },
    {
        label: "Carte Graphique",
        image: "https://i.imgur.com/9bNON4B.jpg",
        link: "/components/gpu"
    },
    {
        label: "Boitier",
        image: "https://i.imgur.com/DZPyoxi.jpg",
        link: "/components/case"
    },
    {
        label: "Refroidissement",
        image: "https://i.imgur.com/wchTTvi.jpg",
        link: "/components/cooling"
    },
    {
        label: "Disque Dur",
        image: "https://i.imgur.com/f8BxASB.jpg",
        link: "/components/hdd"
    },
    {
        label: "SSD",
        image: "https://i.imgur.com/VajKN46.jpg",
        link: "/components/ssd"
    },
    {
        label: "Carte Mère",
        image: "https://i.imgur.com/fsdypZw.jpg",
        link: "/components/motherboard"
    },
    {
        label: "Alimentation",
        image: "https://i.imgur.com/EJP9x7A.jpg",
        link: "/components/psu"
    },
    {
        label: "Mémoire Vive",
        image: "https://i.imgur.com/P05hTez.jpg",
        link: "/components/ram"
    },
];

const HomeComponents = () => {

    const { classes, theme } = useHomeComponentsStyles();
    const router = useRouter();

    const items = mockData.map((item) => (
        <UnstyledButton onClick={() => router.push(item.link)} key={item.label} className={classes.item}>
            <Image src={item.image} className={classes.image} width={theme.fn.smallerThan('lg') ? 210 : 275} height={theme.fn.smallerThan('lg') ? 210 : 275} />
            <Text className={classes.title}>
                {item.label}
            </Text>
        </UnstyledButton>
    ))

  return (
    <div className={classes.wrapper}>
        <Banner title="Composants" bgImage="https://i.imgur.com/ZOzrb6c.jpg" description="Retrouvez ici tout les composants pour vous monter un pc par vous même, de la mémoire vive en passant par la carte graphique pour finir sur le boitier de votre choix. Vous pouvez également profiter de notre configurateur personnalisé en cliquant sur le bouton ci-dessous" />
        <SimpleGrid spacing={35} cols={3} mt="md" breakpoints={[ 
            { maxWidth: "xs", cols: 1 },
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 2 },
            { minWidth: 1200, cols: 3 },
         ]}>
            {items}
        </SimpleGrid>
    </div>
  )
}

export default HomeComponents