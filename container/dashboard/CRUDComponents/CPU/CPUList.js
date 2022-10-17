import { Anchor, Button, Divider, Drawer, Notification, ScrollArea, Table, Title } from '@mantine/core';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import { useFetchSwr } from '../../../../hooks/useFetchSwr';
import DeleteAPIData from '../../../../helpers/delete_api_data';
import CPUModifyForm from './CPUModifyForm';
import CPUForm from './CPUForm';
import { IconCheck } from '@tabler/icons';

const CPUList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])
  
  const { data } = useFetchSwr('/api/CPUs', mounted)
  console.log(data, 'data CPU')

  const onClose = () => {
    setOpen(!open)
  }

  const onCloseModify = () => {
    setOpenModify(!openModify)
  }

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
          <Anchor component='a' href={item.link} target="_blank" size="sm">
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
          <Button color="orange" sx={{ margin: "1rem" }}
            onClick={() => {
              setIndex(index)
              setOpenModify(true)
            }}
          >Modifier</Button>
          <Button color="red"
            onClick={async (event) => {
              event.preventDefault();
              await DeleteAPIData(`/api/CPU/${item.id}`)
            }}
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
        <Button color="green" onClick={() => setOpen(!open)} >Ajouter</Button>
      </ScrollArea>
      <Drawer
        opened={open}
        onClose={() => setOpen(!open)}
        position="right"
        size={700}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Ajouter un composant</Title>
        <Divider />
        <CPUForm onClose={onClose} setNotification={setNotification} />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        position="right"
        size={700}
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }}>Modifier un composant</Title>
        <Divider />
        <CPUModifyForm onClose={onCloseModify} item={data ? data[index] : null} setNotification={setNotification} />
      </Drawer>
      {notification == "success" ? (
        <Notification
          title="Component ajouté avec succès"
          icon={<IconCheck color='green' size={18} />}
        />
      ) : null}
    </>
  )
}

export default CPUList