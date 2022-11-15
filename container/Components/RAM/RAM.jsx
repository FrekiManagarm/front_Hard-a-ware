import { SimpleGrid } from '@mantine/core';
import {useState, useEffect} from 'react'
import Banner from '../../../components/Banner/Banner';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useRAMStyles from './RAM.style'

const RAM = () => {

  const [mounted, setMounted] = useState(false);
  const { classes } = useRAMStyles();

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/RAMs', mounted)


  return (
    <div className={classes.wrapper}>
      <Banner title="Mémoire vive" description="Bienvenue dans la partie Mémoire vive" bgImage="https://i.imgur.com/P05hTez.jpg" />
      <SimpleGrid cols={4} spacing="xl" className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} cat="memoire vive" image={item.image} link={item.link} description={item.description} country="mémoire vive" type="ram" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default RAM