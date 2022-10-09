import React, { useState, useEffect } from 'react'
import { useFetchSwr } from '../../../hooks/useFetchSwr'
import { SimpleGrid } from '@mantine/core'
import ProductCard from '../../../components/ProductCard/ProductCard'
import useCoolingStyles from './Cooling.style'

const Cooling = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);
  const { classes } = useCoolingStyles();
  const { data } = useFetchSwr('/api/Coolings', mounted)

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard image={item.image} title={item.nom} link={item.link} country="Refroidissement" description={item.description} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Cooling