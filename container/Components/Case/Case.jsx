import { SimpleGrid } from '@mantine/core';
import React, {useState, useEffect} from 'react'
import Banner from '../../../components/Banner/Banner';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useCaseStyles from './Case.style'

const Case = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/Boitiers', mounted);
  console.log(data, 'data, boitier')
  const { classes } = useCaseStyles();

  return (
    <div className={classes.wrapper}>
      <Banner bgImage="https://i.imgur.com/DZPyoxi.jpg" title="Boitiers" description="Bienvenue dans la partie Boitiers" />
      <SimpleGrid cols={4} className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} link={item.link} country="Boitier" />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Case