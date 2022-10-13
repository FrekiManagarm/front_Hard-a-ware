import React, {useState} from 'react'
import {
  Card, Text, Group, Badge, Button, ActionIcon, Modal, Title, Divider,
} from '@mantine/core'
import { IconHeart } from '@tabler/icons'
import Image from 'next/image'
import useProductCardStyles from './ProductCard.style'

const ProductCard = ({ image, title, description, country, link }) => {

  const { classes, theme } = useProductCardStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card withBorder radius="lg" p="md" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} objectFit="scale-down" width={500} height={300} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text component='a' href={link} size="lg" weight={900}>
              {title}
            </Text>
            <Badge size="sm">{country}</Badge>
          </Group>
          <Text size="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} color="dimmed">
            Perfect for you, if you enjoy
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
          <Image src={image} width={500} objectFit="scale-down" height={300} fit="scale-down" />
          <Divider size="xl" />
          <div style={{ padding: "2rem" }}>
            <Text>Nom :</Text>
            <Title>{title}</Title>
            <Text>

            </Text>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ProductCard