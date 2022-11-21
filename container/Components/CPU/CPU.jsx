import { useState, useEffect } from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import ProductCard from '../../../components/ProductCard/ProductCard'
import { SimpleGrid } from '@mantine/core';
import useCPUStyles from './CPU.style'
import Banner from '../../../components/Banner/Banner';
import { NextSeo } from 'next-seo';

const CPU = () => {

  const [mounted, setMounted] = useState(false);
  const { classes } = useCPUStyles();
  useEffect(() => {
    setMounted(true);
  }, [])

  const { data } = useFetchSwr('/api/CPUs', mounted);

  // console.log(data)

  return (
    <>
      <NextSeo 
        title='Processeur'
        description='Bienvenue dans la partie processeur'
      />
      <div className={classes.wrapper}>
        <Banner title="Processeur" bgImage="https://i.imgur.com/5JaBK3E.jpg" description="Bienvenue dans la partie processeur." />
        <SimpleGrid cols={4} className={classes.cardSection} spacing={32} breakpoints={[
          { maxWidth: 900, cols: 3 },
          { maxWidth: 755, cols: 2 },
          { maxWidth: 600, cols: 1 },
        ]}>
        {data && data.map((item) => (
          <ProductCard title={item.nom} image={item.image} cat="processeur" link={item.link} description={item.description} type="processeur" item={item} />
        ))}
        </SimpleGrid>
      </div>
    </>
  )
}

export default CPU