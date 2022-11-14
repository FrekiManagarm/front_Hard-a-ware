import React, {useState} from 'react'
import {
  Card, Text, Group, Badge, Button, ActionIcon, Modal, Title, Divider, SimpleGrid,
} from '@mantine/core'
import { IconHeart } from '@tabler/icons'
import Image from 'next/image'
import useProductCardStyles from './ProductCard.style'

const ProductCard = ({ image, title, description, link, type, item }) => {

  const { classes, theme } = useProductCardStyles();
  const [open, setOpen] = useState(false);

  console.log(item, 'data in product card')

  const displayData = () => {
    switch (type) {
      case "processeur":
        return (
          <div className={classes.interWrapper}>
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
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "carte graphique":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "carte mere":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "disque dur":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "ssd":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "boitier":
        return (
          <div
            className={classes.interWrapper}
          >
            <div className={classes.infosWrapper}>
              <p><span>RGB :</span> {item.RGB ? "Oui" : "Non"}</p>
              <p><span>Alimentation inclus :</span> {item.alim_inclus ? "Oui" : "Non"}</p>
              <p><span>Ventilateur :</span> {item.ventilateur}</p>
              <p><span>Couleur :</span> {item.couleur}</p>
              <p><span>Format : </span> {item.format}</p>
              <p><span>Facade Latérale :</span> {item.facade_laterale}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>
                Voir plus
              </Button>
              <Button>
                Utiliser comme base
              </Button>
            </div>
          </div>
        );
      case "ram":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>
              <p><span>Capacité :</span> {item.capacité}</p>
              <p><span>Interface :</span> {item.interface}</p>
              <p><span>Latence :</span> {item.latence}</p>
              <p><span>Quantité :</span> {item.quantité}</p>
              <p><span>Description :</span> {item.description}</p>
            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>
                Voir plus
              </Button>
              <Button>
                Utiliser comme base
              </Button>
            </div>
          </div>
        );
      case "cooling":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      case "alim":
        return (
          <div className={classes.interWrapper}>
            <div className={classes.infosWrapper}>

            </div>
            <div className={classes.infosButtonsWrapper}>
              <Button>Voir plus</Button>
              <Button>Utiliser comme base</Button>
            </div>
          </div>
        );
      default:
        return <h3>Nothing found</h3>
    }
  }

  return (
    <>
      <Card withBorder radius="lg" p="md" className={classes.card}>
        <Card.Section sx={{ display: "flex", justifyContent: "center"}} >
          <Image src={image} alt={title} style={{ objectFit: "scale-down" }} width={500} height={350} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text component='a' href={link} target="_blank" size="lg" weight={900}>
              {title}
            </Text>
            <Badge size="sm">{type}</Badge>
          </Group>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
          {description}
          </Text>
        </Card.Section>

        <Group mt="xs">
          <Button onClick={() => setOpen(!open)} radius="md" style={{ flex: 1 }}>
            Voir plus
          </Button>
          <ActionIcon variant="default" radius="md" size={36}>
            <IconHeart size={18} className={classes.like} stroke={1.5} />
          </ActionIcon>
        </Group>
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
          <Divider size="xl" />
          <div>
            <Text sx={{ textAlign: "center" }}>Nom :</Text>
            <Title sx={{ textAlign: "center", paddingBottom: "1rem" }}>{title}</Title>
            <div
              style={{
                display: "flex"
              }}
            >
              {displayData()}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard