import { Anchor, Button, Divider, Drawer, ScrollArea, Table, Title } from '@mantine/core';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import PSUForm from './PSUForm';
import PSUModifyForm from './PSUModifyForm';



const PSUList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/PSUs', mounted)

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
          <Anchor component='a' href={item.link} target='_blank'>
            {item.nom}
          </Anchor>
        </td>
        <td>
          {item.puissance}
        </td>
        <td>
          {item.certif}
        </td>
        <td>
          <Button
            color="orange"
            sx={{ margin: "1rem" }}
            onClick={() => {
              setOpenModify(!openModify)
              setIndex(index)
            }}
          >Modifier</Button>
          <Button
            color="red"
          >Supprimer</Button>
        </td>
      </tr>
    </>
  ))

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 1200, marginTop: "2rem" }} verticalSpacing="xs">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Nom</th>
              <th>Puissance</th>
              <th>Certification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <Button color="green" onClick={() => setOpen(!open)}>
            Ajouter
          </Button>
        </Table>
      </ScrollArea>
      <Drawer
        opened={open}
        onClose={() => setOpen(!open)}
        position="right"
        size={500}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }} >Ajouter un composant</Title>
        <Divider />
        <PSUForm />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        position="right"
        size={500}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Modifier un composant</Title>
        <Divider />
        <PSUModifyForm />
      </Drawer>
    </>
  )
}

export default PSUList