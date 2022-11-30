import {
  Container,
  Overlay,
  Title,
  Text,
  Button,
  Notification,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";
import { useRouter } from "next/router";
import React from "react";
import Loader from "../../Loader/Loader";
import useHeroBannerStyles from "./HeroBanner.style";

const HeroBanner = () => {
  const { classes } = useHeroBannerStyles();
  const router = useRouter();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Bienvenue sur Hard-a-ware</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Une référence en la matière de Hardware et PC profitez également de
          notre Configurateur sur-mesure et Made in France
        </Text>

        <Button
          variant="gradient"
          size="xl"
          onClick={() => router.push("/configurator")}
          radius="xl"
          className={classes.control}
        >
          Commencer une configuration
        </Button>
        <Notification
          className={classes.notification}
          disallowClose
          radius="lg"
          title="Attention BETA"
          icon={<IconAlertCircle size={18} />}
          color="red"
        >
          Ce que vous voyez est une version BETA Publique ou d'essai du site,{" "}
          <br />
          il est donc toujours en cours de construction
        </Notification>
      </Container>
    </div>
  );
};

export default HeroBanner;
