import {useState, useEffect} from 'react'
import Image from 'next/image';
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import DeleteAPIData from "../../../../helpers/delete_api_data";
import { Button, Divider, Drawer, ScrollArea, Table, Title } from '@mantine/core';
import CoolingForm from './CoolingForm';
import CoolingModifyForm from './CoolingModifyForm';

const CoolingList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [openModify, setOpenModify] = useState(false);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data } = useFetchSwr('/api/Coolings', mounted)

  const rows = data?.map((item, index) => (
    <tr>
      <td>
        {item.id}
      </td>
      <td>
        <Image src={item.image} width={100} height={100} />
      </td>
      <td>
        {item.nom}
      </td>
      <td>
        {item.format}
      </td>
      <td>
        {item.socket}
      </td>
      <td>
        <Button onClick={() => {
          setOpenModify(!openModify)
          setIndex(index)
        }} color="orange" sx={{ margin: "1rem" }} >Modifier</Button>
        <Button onClick={async () => await DeleteAPIData(`/api/Cooling/${item.id}`)} color="red">Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 1200 }} verticalSpacing="xs">
          <thead>
            <th>ID</th>
            <th>Image</th>
            <th>Nom</th>
            <th>Format</th>
            <th>Socket</th>
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
        size={500}
        position="right"
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }} >Ajouter un composant</Title>
        <Divider />
        <CoolingForm onClose={() => setOpen(!open)} setNotification={setNotification} />
      </Drawer>
      <Drawer
        opened={openModify}
        onClose={() => setOpenModify(!openModify)}
        size={500}
        position="right"
        overlayOpacity={0.3}
      >
        <Title sx={{ padding: "1rem" }} >Modifier un composant</Title>
        <Divider />
        <CoolingModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} setNotification={setNotification} />
      </Drawer>
      {notification ? (
        <Notification 
          title="Composant ajouté avec succès"
          icon={<IconCheck color='green' size={18} />}
      />
      ) : null}
    </>
  )
}

export default CoolingList