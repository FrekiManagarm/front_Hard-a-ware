import { SimpleGrid } from '@mantine/core';
import React, {useState, useEffect} from 'react'
import Banner from '../../../components/Banner/Banner';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useGPUStyles from './GPU.style'

const GPU = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  const { classes } = useGPUStyles();
  const { data } = useFetchSwr('/api/GPUs', mounted)
  // console.log(data, 'data GPU')

  return (
    <div className={classes.wrapper}>
      <Banner title="Carte Graphique" bgImage="https://i.imgur.com/9bNON4B.jpg" description="Bienvenue dans la partie Carte Graphique" />
      <SimpleGrid cols={4} spacing={32} className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard image={item.image} title={item.nom} link={item.link} cat="carte graphique" description={item.description} type="carte_graphique" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default GPU