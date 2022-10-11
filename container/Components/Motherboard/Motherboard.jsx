import {useState, useEffect} from 'react'
import { useFetchSwr } from '../../../hooks/useFetchSwr'
import { SimpleGrid } from '@mantine/core'
import useMotherboardStyles from './Motherboard.style'
import ProductCard from '../../../components/ProductCard/ProductCard'

const Motherboard = () => {

  const { classes } = useMotherboardStyles();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/MotherBoards', mounted);

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={4}>
        {data && data?.map((item) => (
          <ProductCard title={item.nom} image={item.image} country="carte mère" description={item.description} link={item.link} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export default Motherboard