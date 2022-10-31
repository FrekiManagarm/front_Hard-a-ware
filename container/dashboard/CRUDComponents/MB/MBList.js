import {useState, useEffect} from 'react'
import Image from 'next/image'
import { Anchor, Button, Table, ScrollArea, Drawer, Title, Divider } from '@mantine/core'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import DeleteAPIData from '../../../../helpers/delete_api_data'
import MBForm from './MBForm'
import MBModifyForm from './MBModifyForm'

const MBList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    setMounted(true)
  }, []);

  const { data, mutate } = useFetchSwr('/api/MotherBoards', mounted);

  const rows = data?.map((item, index) => (
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
        <Button color="orange" sx={{ margin: "1rem" }}
          onClick={() => {
            setOpenModify(!openModify)
            setIndex(index)
          }}
        >Modifier</Button>
        <Button color="red"
          onClick={async (event) => {
            event.preventDefault();
            await DeleteAPIData(`/api/MotherBoards/${item.id}`)
            mutate()
          }}
        >Supprimer</Button>
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
          <Button color="green" 
            onClick={() => {
              setOpen(!open)
            }}
          >Ajouter</Button>
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
        <MBForm onClose={() => setOpen(!open)} mutate={mutate} />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        position="right"
        overlayOpacity={0.3}
        size={500}
      >
        <Title sx={{ padding: "1rem" }}>Modifier un composant</Title>
        <Divider />
        <MBModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default MBList