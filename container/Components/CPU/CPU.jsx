import { useState, useEffect } from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import ProductCard from '../../../components/ProductCard/ProductCard'
import { SimpleGrid } from '@mantine/core';
import useCPUStyles from './CPU.style'

const CPU = () => {

  const [mounted, setMounted] = useState(false);
  const { classes } = useCPUStyles();
  useEffect(() => {
    setMounted(true);
  }, [])

  const { data } = useFetchSwr('/api/CPUs', mounted);

  console.log(data)

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
      {data && data.map((item) => (
        <ProductCard title={item.nom} country="processeur" image={item.image} link={item.link} description={item.description} />
      ))}
      </SimpleGrid>
    </div>
  )
}

export default CPU