import React, { useContext, useState } from 'react'
import {
  Card, Text, Group, Badge, Button, ActionIcon, Modal, Title, Divider, SimpleGrid,
} from '@mantine/core'
import { IconHeart } from '@tabler/icons'
import Image from 'next/image'
import useProductCardStyles from './ProductCard.style'
import { useRouter } from 'next/router'
import { ConfigurationContext } from '../../context/ConfigurationProvider'
import { displayButton } from './common'

const ProductCard = ({ image, title, description, link, type, item, cat }) => {

  const { classes, theme } = useProductCardStyles();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { config, setConfig } = useContext(ConfigurationContext)


  // console.log(item, 'data in product card')

  const displayData = () => {
    switch (type) {
      case "processeur":
        return (
            <div className={classes.infosWrapper}>
              <SimpleGrid cols={2}>
                <div>
                  <p><span>Nombre de coeur :</span> {item.nb_coeur} coeurs</p>
                  <p><span>Nombre de threads :</span> {item.nb_threads} coeurs</p>
                  <p><span>Fréquence :</span> {item.frequence}</p>
                  <p><span>Fréquence boost :</span> {item.frequence_boost}</p>
                  <p><span>Chipset :</span> {item.chipset}</p>
                  <p><span>Chipset Graphique :</span> {item.chipset_graphique}</p>
                </div>
                <div>
                  <p><span>Cache :</span> {item.cache}</p>
                  <p><span>Architecture :</span> {item.architecture}</p>
                  <p><span>Type :</span> {item.type}</p>
                  <p><span>Overclocking :</span> {item.overclocking ? "Oui" : "Non"}</p>
                  <p><span>Socket :</span> {item.socket}</p>
                  <p><span>Description :</span> {item.description}</p>
                </div>
              </SimpleGrid>
            </div>
        );
      case "carte_graphique":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Nombre de coeurs :</span> {item.nb_coeur}</p>
              <p><span>Fréquence :</span> {item.frequence}</p>
              <p><span>Fréquence Boost :</span> {item.frequence_boost}</p>
              <p><span>Nombre de ventilateur :</span> {item.nb_ventilateur ?? "N/A"}</p>
              <p><span>Nombre de sorties vidéo :</span> {item.nb_video_output}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "carte_mere":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Socket :</span> {item.socket}</p>
              <p><span>Constructeur :</span> {item.constructeur}</p>
              <p><span>Format :</span> {item.format}</p>
              <p><span>Fréquence Mémoire :</span> {item.fréquence_mémoire}</p>
              <p><span>Processeur compatible :</span> {item.proco_compatible}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "disque_dur":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Tour par minutes (RPM) :</span> {item.RPM}</p>
              <p><span>Capacité :</span> {item.capacité} Go</p>
              <p><span>Format :</span> {item.format}</p>
              <p><span>Interface :</span> {item.interface}</p>
              <p><span>Marque :</span> {item.marque}</p>
              <p><span>Mémoire Cache :</span> {item.mémoire_cache} Mo</p>
              <p><span>Transfert :</span> {item.transfert}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "ssd":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Capacité :</span> {item.capacité} Go</p>
              <p><span>Connectique :</span> {item.connectique}</p>
              <p><span>Ecriture :</span> {item.ecriture}</p>
              <p><span>Format :</span> {item.format}</p>
              <p><span>Interface :</span> {item.interface}</p>
              <p><span>Lecture :</span> {item.lecture}</p>
              <p><span>Marque :</span> {item.marque}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "boitier":
        return (
            <div className={classes.infosWrapper}>
              <p><span>RGB :</span> {item.RGB ? "Oui" : "Non"}</p>
              <p><span>Alimentation inclus :</span> {item.alim_inclus ? "Oui" : "Non"}</p>
              <p><span>Ventilateur :</span> {item.ventilateur}</p>
              <p><span>Couleur :</span> {item.couleur}</p>
              <p><span>Format : </span> {item.format}</p>
              <p><span>Facade Latérale :</span> {item.facade_laterale}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "ram":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Capacité :</span> {item.capacité}</p>
              <p><span>Interface :</span> {item.interface}</p>
              <p><span>Latence :</span> {item.latence}</p>
              <p><span>Quantité :</span> {item.quantité}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "cooling":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Bruit :</span> {item.bruit}</p>
              <p><span>Format :</span> {item.format}</p>
              <p><span>Marque :</span> {item.marque}</p>
              <p><span>Matériaux :</span> {item.matériaux}</p>
              <p><span>Socket :</span> {item.socket}</p>
              <p><span>Type :</span> {item.type}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      case "alim":
        return (
            <div className={classes.infosWrapper}>
              <p><span>Certif :</span> {item.certif}</p>
              <p><span>Format :</span> {item.format}</p>
              <p><span>Marque :</span> {item.marque}</p>
              <p><span>Modulaire :</span> {item.modulaire}</p>
              <p><span>Puissance :</span> {item.puissance} W</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
        );
      default:
        return <h3>Aucune donnée</h3>
    }
  }

  // const buttonBis = displayButton(type, config);
  // console.log(buttonBis, 'displayButton')

  return (
    <>
      <Card withBorder radius="lg" p="md" className={classes.card}>
        <Card.Section sx={{ display: "flex", justifyContent: "center"}} onClick={() => setOpen(!open)} >
          <Image src={image} alt={title} style={{ objectFit: "scale-down" }} width={300} height={350} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md" onClick={() => setOpen(!open)}>
          <Group position="apart">
            <Text component='a' href={link} target="_blank" size="lg" weight={900}>
              {title}
            </Text>
            <Badge size="sm">{cat}</Badge>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section} onClick={() => setOpen(!open)}>
          <Text mt="md" className={classes.label} color="dimmed">
            {description}
          </Text>
        </Card.Section>

        {router.pathname == "/configurator" ? <Group mt="xs">
          {router.pathname == "/configurator" && displayButton(type, config) == null ? (
            <Button sx={{ flex: 1 }} color="orange" radius="md" 
              onClick={() => {
                setConfig({ ...config, [type]: item.id })
              }}
            >
              Sélectionner
            </Button>
          ) : router.pathname == "/configurator" && displayButton(type, config) == item.id ? (
            <Button
              sx={{ flex: 1 }}
              color="green" 
              radius="md"
              onClick={() => {
                setConfig({ ...config, [type]: null })
              }}
            >
              Sélectionné
            </Button>
          ) : (
            <Button
              sx={{ flex: 1 }}
              disabled
            >
              Sélectionner
            </Button>
          )}
        </Group> : null}
        {router.pathname !== "/configurator" ? <Button mt="xs" sx={{ width: "100%" }} variant="default" radius="md">
            <IconHeart size={18} className={classes.like} stroke={1.5} />
          </Button> : null}
      </Card>
      <Modal
        opened={open}
        onClose={() => setOpen(!open)}
        centered
        lockScroll
        radius={30}
        size="70%"
      >
        <div className={classes.modalWrapper}>
          <Image src={image} width={400} height={400} style={{ objectFit: 'scale-down' }} />
          <div>
            <Text sx={{ textAlign: "start" }}>Nom :</Text>
            <Title sx={{ textAlign: "start", paddingBottom: "1rem" }}>{title}</Title>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              {displayData()}
              <div className={classes.infosButtonsWrapper}>
                <Button component='a' href={link} target="_blank">Voir plus</Button>
                <Button>Utiliser comme base</Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard