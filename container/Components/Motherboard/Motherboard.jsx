import {useState, useEffect} from 'react'
import { useFetchSwr } from '../../../hooks/useFetchSwr'
import { SimpleGrid } from '@mantine/core'
import useMotherboardStyles from './Motherboard.style'
import ProductCard from '../../../components/ProductCard/ProductCard'
import Banner from '../../../components/Banner/Banner'

const Motherboard = () => {

  const { classes } = useMotherboardStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/MotherBoards', mounted);

  return (
    <div className={classes.wrapper}>
      <Banner title="Carte Mère" description="Bienvenue dans la partie Carte Mère" bgImage="https://i.imgur.com/fsdypZw.jpg" />
      <SimpleGrid cols={4} className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} description={item.description} link={item.link} type="carte mere" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Motherboard