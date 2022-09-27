import React from 'react'
import {
  Card, Image, Text, Group, Badge, Button, ActionIcon,
} from '@mantine/core'
import { IconHeart } from '@tabler/icons'
import useProductCardStyles from './ProductCard.style'

const ProductCard = ({ image, title, description, country }) => {

  const { classes, theme } = useProductCardStyles();

  return (
    <Card withBorder radius="lg" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={300} width={300} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
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
        {/* <Group spacing={7} mt={5}>
          {features}
        </Group> */}
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size={18} className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  )
}

export default ProductCard