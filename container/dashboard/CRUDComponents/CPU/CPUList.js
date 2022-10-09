import { Anchor, Button, ScrollArea, Table } from '@mantine/core';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { useFetchSwr } from '../../../../hooks/useFetchSwr';

const CPUList = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [])
  
  const { data } = useFetchSwr('/api/CPUs', mounted)
  console.log(data, 'data CPU')

  const rows = data?.map((item) => (
    <tr>
      <td>
        {item.id}
      </td>
      <td>
        <Image src={item.image} width={100} height={100} />
      </td>
      <td>
        <Anchor component='a' href={`/components/cpu/${item.id}`} size="sm">
          {item.nom}
        </Anchor>
      </td>
      <td>
        {item.nb_coeur}
      </td>
      <td>
        {item.nb_threads}
      </td>
      <td>
        <Anchor component='a' href={item.link} target='_blank' size="sm">
          {item.link}
        </Anchor>
      </td>
      <td>
        <Button color="orange" sx={{ margin: "1rem" }}>Modifier</Button>
        <Button color="red">Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 1200, marginTop: "2rem" }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Nom</th>
            <th>NB Coeurs</th>
            <th>NB Threads</th>
            <th>Amazon Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
      <Button color="green" >Ajouter</Button>
    </ScrollArea>
  )
}

export default CPUList