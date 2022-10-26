import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Anchor, Button, Table, ScrollArea, Drawer, Title, Divider } from '@mantine/core'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'

const MBList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
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
        <Anchor component='a' href={item.link} target="_blank">
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
    <>
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
      <Drawer
        opened={open}
        onClose={() => setOpen(!open)}
        size={500}
        position="right"
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Ajouter un composant</Title>
        <Divider />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        position="right"
        overlayOpacity={0.3}
        size={500}
      >
        <Title sx={{ padding: "1rem" }}></Title>
      </Drawer>
    </>
  )
}

export default MBList