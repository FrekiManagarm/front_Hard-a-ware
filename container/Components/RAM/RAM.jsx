import { SimpleGrid } from '@mantine/core';
import {useState, useEffect} from 'react'
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
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} link={item.link} description={item.description} country="mémoire vive" />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default RAM