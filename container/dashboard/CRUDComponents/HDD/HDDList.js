import { useState, useEffect } from 'react'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import Image from 'next/image'
import { Anchor, Button, Drawer, ScrollArea, Table, Title, Divider } from '@mantine/core'
import { deleteComponent } from '../common/functions'
import DeleteAPIData from '../../../../helpers/delete_api_data'
import HDDForm from './HDDForm'
import HDDModifyForm from './HDDModifyForm'

const HDDList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data, mutate } = useFetchSwr('/api/HDDs', mounted);
  // console.log(data, 'data HDD');

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
        {item.capacité} Go
      </td>
      <td>
        {item.RPM}
      </td>
      <td>
        <Button color="orange" sx={{ margin: "1rem" }}
          radius="md"
          onClick={() => {
            setIndex(index)
            setOpenModify(!openModify)
          }}
        >Modifier</Button>
        <Button radius="md" color="red" onClick={async (event) => {
          event.preventDefault();
          await DeleteAPIData(`/api/HDD/${item.id}`).then((response) => {
            mutate()
          })
        }} >Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <>
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
        <HDDForm onClose={() => setOpen(!open)} mutate={mutate} />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        size={500}
        position="right"
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Modifier un composant</Title>
        <Divider />
        <HDDModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default HDDList