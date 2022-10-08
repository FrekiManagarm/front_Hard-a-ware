import React from 'react'
import { Container, Overlay, Title, Text, Button } from '@mantine/core';
import useBannerStyles from './Banner.style';

const Banner = ({ title, description, bgImage }) => {

  const { classes, cx } = useBannerStyles();

  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${bgImage})` }}>
      <Overlay color="#000" opacity={0.65} zIndex={1} radius="xl" />

      <div className={classes.inner}>
        <Title className={classes.title}>
          {title}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {description}
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Live demo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Banner