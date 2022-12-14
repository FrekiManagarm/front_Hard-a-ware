import {useState, useEffect} from 'react';
import { SimpleGrid } from '@mantine/core';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import useHDDStyles from './HDD.style';
import ProductCard from '../../../components/ProductCard/ProductCard';
import Banner from '../../../components/Banner/Banner';

const HDD = () => {

  const { classes } = useHDDStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/HDDs', mounted)

  return (
    <div className={classes.wrapper}>
      <Banner title="Disque Dur" bgImage="https://i.imgur.com/f8BxASB.jpg" description="Bienvenue dans la partie Disque Dur" />
      <SimpleGrid cols={4} spacing={32} className={classes.cardSection} breakpoints={[
        { maxWidth: "xs", cols: 1 },
        { minWidth: 'sm', cols: 2 },
        { maxWidth: 'md', cols: 2 },
        { minWidth: 'md', cols: 3 },
        { maxWidth: "lg", cols: 3 },
        { maxWidth: 1200, cols: 3 },
      ]}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} cat="disque dur" link={item.link} description={item.description} type="disque_dur" item={item} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default HDD