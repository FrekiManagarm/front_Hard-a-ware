import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Anchor, Button, Table, ScrollArea } from '@mantine/core'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'

const MBList = () => {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/MotherBoards', mounted);
  console.log(data, 'mb data');

  const rows = data?.map((item) => (
    <tr>
      <td>
        {item.id}
      </td>
      <td>
        <Image src={item.image} width={100} height={100} />
      </td>
      <td>
        <Anchor component='a' href={`/components/motherboard/${item.id}`}>
          {item.nom}
        </Anchor>
      </td>
      <td>
        {item.socket}
      </td>
      <td>
        {item.constructeur}
      </td>
      <td>
        <Button color="orange" sx={{ margin: "1rem" }} >Modifier</Button>
        <Button color="red">Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 1200, marginTop: "2rem" }} verticalSpacing="xs">
        <thead>
          <th>ID</th>
          <th>Image</th>
          <th>Nom</th>
          <th>Socket</th>
          <th>Constructeur</th>
          <th>Action</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    </ScrollArea>
  )
}

export default MBList