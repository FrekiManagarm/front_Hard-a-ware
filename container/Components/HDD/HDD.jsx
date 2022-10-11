import {useState, useEffect} from 'react';
import { SimpleGrid } from '@mantine/core';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useHDDStyles from './HDD.style';
import ProductCard from '../../../components/ProductCard/ProductCard';

const HDD = () => {

  const { classes } = useHDDStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/HDDs', mounted)

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} country="disque dur" image={item.image} link={item.link} description={item.description} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default HDD