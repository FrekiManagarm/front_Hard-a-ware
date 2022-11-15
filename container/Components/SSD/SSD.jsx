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
      <SimpleGrid cols={4} className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} link={item.link} country="SSD" description={item.description} type="ssd" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default SSD