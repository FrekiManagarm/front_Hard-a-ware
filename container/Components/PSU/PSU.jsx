import {useState, useEffect} from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { SimpleGrid } from '@mantine/core';
import usePSUStyles from './PSU.style';
import Banner from '../../../components/Banner/Banner';

const PSU = () => {

  const { classes } = usePSUStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/PSUs', mounted)

  return (
    <div className={classes.wrapper}>
      <Banner bgImage="https://i.imgur.com/EJP9x7A.jpg" description="Bienvenue dans la partie Alimentation" title="Alimentation" />
      <SimpleGrid cols={4} spacing={32} className={classes.cardSection}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} description={item.description} cat="alimentation" image={item.image} link={item.link} type="alim" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default PSU