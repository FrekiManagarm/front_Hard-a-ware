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
        { maxWidth: 900, cols: 3 },
        { maxWidth: 755, cols: 2 },
        { maxWidth: 600, cols: 1 },
      ]}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} cat="ssd" image={item.image} link={item.link} country="SSD" description={item.description} type="ssd" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default SSD