import { Anchor, ScrollArea, Table, Button, Drawer, Title, Divider, Notification } from '@mantine/core';
import Image from 'next/image';
import React, {useState, useEffect} from 'react'
import DeleteAPIData from '../../../../helpers/delete_api_data';
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import RAMForm from './RAMForm';
import { IconCheck } from '@tabler/icons';
import RAMModifyForm from './RAMModifyForm';

const RAMList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  const [notification, setNotification] = useState("");
  
  useEffect(() => {
   setMounted(true)
  }, []);

  const onClose = () => {
    setOpen(!open)
  }

  const onCloseModify = () => {
    setOpenModify(!openModify)
  }

  const { data } = useFetchSwr('/api/RAMs', mounted)

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
          <Anchor>
            {item.nom}
          </Anchor>
        </td>
        <td>
          {item.capacité}
        </td>
        <td>
          {item.interface}
        </td>
        <td>
          {item.quantité}
        </td>
        <td>
          <Button color="orange" sx={{ margin: "1rem" }} onClick={() => {
            setIndex(index)
            setOpenModify(true)
          }} >Modifier</Button>
          <Button onClick={async (event) => {
            event.preventDefault();
            await DeleteAPIData(`/api/RAM/${item.id}`)
          }} color="red">Supprimer</Button>
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
              <th>Capacité</th>
              <th>interface</th>
              <th>Quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <Button color="green" onClick={() => {
            setOpen(!open)
          }} >Ajouter</Button>
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
        <Divider/>
        <RAMForm onClose={onClose} setNotification={setNotification} />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        position="right"
        size={500}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Modifier un composant</Title>
        <Divider/>
        <RAMModifyForm onClose={onCloseModify} item={ data ? data[index] : null} setNotification={setNotification} />
      </Drawer>
      {notification == "success" ? (
        <Notification 
          title="Composant ajouté avec succès"
          icon={<IconCheck color='green' size={18} />}
        />
      ) : null}
    </>
  )
}

export default RAMList