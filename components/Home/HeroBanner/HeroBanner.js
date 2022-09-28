import { Container, Overlay, Title, Text } from '@mantine/core';
import React from 'react'
import useHeroBannerStyles from './HeroBanner.style'

const HeroBanner = () => {

    const { classes } = useHeroBannerStyles();

  return (
    <div className={classes.hero}>
        <Overlay 
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
        />
        <Container className={classes.container}>
            <Title className={classes.title}>A fully featured React Components library</Title>
            <Text className={classes.description} size="xl" mt="xl">
                Build fully functional accessible web applications faster than ever – Mantine includes
                more than 120 customizable components and hooks to cover you in any situation
            </Text>

            
        </Container>
    </div>
  )
}

export default HeroBanner