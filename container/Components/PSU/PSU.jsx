import {useState, useEffect} from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { SimpleGrid } from '@mantine/core';
import usePSUStyles from './PSU.style';

const PSU = () => {

  const { classes } = usePSUStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/PSUs', mounted)

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard title={item.title} country="psu" description={item.description} image={item.image} link={item.link} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default PSU