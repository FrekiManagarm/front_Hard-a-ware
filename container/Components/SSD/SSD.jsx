import { SimpleGrid } from '@mantine/core';
import {useState, useEffect} from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useSSDStyles from './SSD.style';
import ProductCard from '../../../components/ProductCard/ProductCard';

const SSD = () => {

  const { classes } = useSSDStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/SSDs', mounted)

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} link={item.link} country="SSD" description={item.description} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default SSD