import { Anchor, ScrollArea, Table, Button, Drawer, Title, Divider } from '@mantine/core';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import DeleteAPIData from '../../../../helpers/delete_api_data';
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import SSDForm from './SSDForm';
import SSDModifyForm from './SSDModifyForm';

const SSDList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data, mutate } = useFetchSwr('/api/SSDs', mounted)

  const rows = data?.map((item, index) => (
    <>
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
          {item.interface}
        </td>
        <td>
          {item.lecture}
        </td>
        <td>
          <Button color="orange"
            onClick={(event) => {
              event.preventDefault();
              setOpenModify(!openModify)
              setIndex(index)
            }}
          >Modifier</Button>
          <Button color="red" onClick={async (event) => {
            event.preventDefault()
            await DeleteAPIData(`/api/SSD/${item.id}`)
            mutate()
          }}>Supprimer</Button>
        </td>
      </tr>
    </>
  ))

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 1200, marginTop: "2rem" }} verticalSpacing="xs">
          <thead>
            <th>ID</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Interface</th>
            <th>Lecture</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <Button onClick={() => setOpen(!open)} color="green">Ajouter</Button>
        </Table>  
      </ScrollArea>
      <Drawer
        opened={open}
        onClose={() => setOpen(!open)}
        position="right"
        size={500}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Ajouter un composant</Title>
        <Divider />
        <SSDForm onClose={() => setOpen(!open)} mutate={mutate} />
      </Drawer> 
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        size={500}
        overlayOpacity={0.3}
        position="right"
      >
        <Title sx={{ padding: "1rem" }} >Modifier un composant</Title>
        <Divider />
        <SSDModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default SSDList