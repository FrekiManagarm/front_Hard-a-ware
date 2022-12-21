import { 
  Anchor,
  Group,
  ActionIcon
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons'
import useFooterStyles from './Footer.style';

const links = [
  {
    label: "Accueil",
    link: "/"
  },
  {
    label: "Composants",
    link: "/components"
  },
  {
    label: "Configurator",
    link: "/configurator"
  },
  {
    label: "Disclaimer",
    link: "/disclaimer"
  },
  {
    label: "A propos",
    link: "/about"
  },
  {
    label: "Contact",
    link: "/contact"
  },
];

const Footer = () => {

  const { classes } = useFooterStyles();

  const items = links.map((item) => (
    <Anchor component='a'
      color="dimmed"
      key={item.label}
      href={item.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {item.label}
    </Anchor>
  ))

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  )
}

export default Footer