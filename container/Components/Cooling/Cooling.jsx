import React, { useState, useEffect } from 'react'
import { useFetchSwr } from '../../../hooks/useFetchSwr'
import { SimpleGrid } from '@mantine/core'
import ProductCard from '../../../components/ProductCard/ProductCard'
import useCoolingStyles from './Cooling.style'
import Banner from '../../../components/Banner/Banner'

const Cooling = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);
  const { classes } = useCoolingStyles();
  const { data } = useFetchSwr('/api/Coolings', mounted)

  return (
    <div className={classes.wrapper}>
      <Banner bgImage="https://i.imgur.com/wchTTvi.jpg" title="Refroidissement" description="Bienvenue dans la partie Refroidissement" />
      <SimpleGrid cols={4} className={classes.cardSection} spacing={32}>
        {data && data?.map((item) => (
          <ProductCard image={item.image} title={item.nom} cat="refroidissement" link={item.link} country="Refroidissement" description={item.description} type="cooling" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Cooling