import { SimpleGrid } from '@mantine/core';
import {useState, useEffect} from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useSSDStyles from './SSD.style';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Banner from '../../../components/Banner/Banner';

const SSD = () => {

  const { classes } = useSSDStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/SSDs', mounted)

  return (
    <div className={classes.wrapper}>
      <Banner bgImage="https://i.imgur.com/VajKN46.jpg" description="Bienvenue dans la partie SSD" title="SSD" />
      <SimpleGrid cols={4} spacing={32} className={classes.cardSection} breakpoints={[
        { maxWidth: "xs", cols: 1 },
        { minWidth: 'sm', cols: 2 },
        { maxWidth: 'md', cols: 2 },
        { minWidth: 'md', cols: 3 },
        { maxWidth: "lg", cols: 3 },
        { maxWidth: 1200, cols: 3 },
      ]}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} cat="ssd" image={item.image} link={item.link} country="SSD" description={item.description} type="ssd" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default SSD