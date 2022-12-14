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
  // console.log(data, 'data, boitier')
  const { classes } = useCaseStyles();

  return (
    <div className={classes.wrapper}>
      <Banner bgImage="https://i.imgur.com/DZPyoxi.jpg" title="Boitiers" description="Bienvenue dans la partie Boitiers" />
      <SimpleGrid cols={4} className={classes.cardSection} spacing={32} breakpoints={[
        { maxWidth: "xs", cols: 1 },
        { minWidth: 'sm', cols: 2 },
        { maxWidth: 'md', cols: 2 },
        { minWidth: 'md', cols: 3 },
        { maxWidth: "lg", cols: 3 },
        { maxWidth: 1200, cols: 3 },
      ]}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} description={item.description} cat="boitier" image={item.image} link={item.link} country="Boitier" type="boitier" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Case