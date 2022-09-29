import { useState, useEffect } from 'react'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import Image from 'next/image'
import { Anchor, Button, ScrollArea, Table } from '@mantine/core'
import { deleteComponent } from '../common/functions'

const HDDList = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/HDDs', mounted);
  console.log(data, 'data HDD');

  const rows = data?.map((item) => (
    <tr>
      <td>
        {item.id}
      </td>
      <td>
        <Image src={item.image} width={100} height={100} />
      </td>
      <td>
        <Anchor>
          {item.nom}
        </Anchor>
      </td>
      <td>
        {item.capacité} Go
      </td>
      <td>
        {item.RPM}
      </td>
      <td>
        <Button color="orange" sx={{ margin: "1rem" }}>Modifier</Button>
        <Button color="red" onClick={() => deleteComponent(`/api/HDD/${item.id}`)} >Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 1000, marginTop: "2rem" }}  verticalSpacing="xs">
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>Nom</th>
          <th>Capacité</th>
          <th>RPM</th>
          <th>Action</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  )
}

export default HDDList