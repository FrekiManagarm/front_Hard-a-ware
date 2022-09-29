import { Container, Overlay, Title, Text, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react'
import useHeroBannerStyles from './HeroBanner.style'

const HeroBanner = () => {

    const { classes } = useHeroBannerStyles();
    const router = useRouter();

  return (
    <div className={classes.hero}>
        <Overlay 
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
            style={{
                borderRadius: "2rem"
            }}
        />
        <Container className={classes.container}>
            <Title className={classes.title}>Bienvenue sur le site du HardShop</Title>
            <Text className={classes.description} size="xl" mt="xl">
               Une référence en la matière de Hardware et PC profitez également de notre Configurateur sur-mesure
            </Text>

            <Button onClick={() => router.push('/configurator')} variant="gradient" size="xl" radius="xl" className={classes.control}>
                Démarrer une configuration
            </Button>
        </Container>
    </div>
  )
}

export default HeroBanner