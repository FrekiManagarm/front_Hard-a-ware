import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import { Anchor, Button, ScrollArea, Table } from '@mantine/core';
import { deleteComponent } from '../common/functions';
import DeleteAPIData from '../../../../helpers/delete_api_data';

const GPUList = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  const { data } = useFetchSwr('/api/GPUs', mounted);
  // console.log(data, 'data GPU')

  const rows = data?.map((item) => (
    <tr>
      <td>
        {item.id}
      </td>
      <td>
        <Image src={item.image} width={100} height={100} />
      </td>
      <td>
        <Anchor component='a' href={`/components/gpu/${item.id}`} size="sm">
          {item.nom}
        </Anchor>
      </td>
      <td>
        {item.nb_coeur}
      </td>
      <td>
        {item.link}
      </td>
      <td>
        <Button color="orange" sx={{ margin: "1rem" }} onClick={async () => await DeleteAPIData(`/api/GPU/${item.id}`)} >Modifier</Button>
        <Button color="red">Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 1000, marginTop: "2rem" }} verticalSpacing="xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Nom</th>
            <th>NB Coeurs</th>
            <th>Amazon Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  )
}

export default GPUList