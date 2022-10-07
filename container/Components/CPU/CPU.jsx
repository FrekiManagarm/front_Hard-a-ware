import { useState, useEffect } from 'react';
import { useFetchSwr } from '../../../hooks/useFetchSwr';
import ProductCard from '../../../components/ProductCard/ProductCard'
import { SimpleGrid } from '@mantine/core';

const CPU = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])

  const { data } = useFetchSwr('/api/CPUs', mounted);

  console.log(data)

  return (
    <div>
      <SimpleGrid cols={4}>
      {data && data.map((item) => (
        <ProductCard />
      ))}
      </SimpleGrid>
    </div>
  )
}

export default CPU