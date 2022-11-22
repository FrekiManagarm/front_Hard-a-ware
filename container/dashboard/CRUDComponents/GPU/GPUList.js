import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import { Anchor, Button, ScrollArea, Table, Notification, Drawer, Title, Divider } from '@mantine/core';

import { deleteComponent } from '../common/functions';
import DeleteAPIData from '../../../../helpers/delete_api_data';
import GPUForm from './GPUForm';
import GPUModifyForm from './GPUModifyForm';
import useGPUListStyles from './GPUList.style';

const GPUList = () => {

  const { classes } = useGPUListStyles();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    setMounted(true)
  }, [])

  const { data, mutate } = useFetchSwr('/api/GPUs', mounted);
  // console.log(data, 'data GPU')

  const rows = data?.map((item, index) => (
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
      <td className={classes.hiddenMobile}>
        {item.nb_coeur}
      </td>
      <td className={classes.hiddenMobile}>
        {item.link}
      </td>
      <td>
        <Button radius="md" color="orange" sx={{ margin: "1rem" }} onClick={(event) => {
          event.preventDefault();
          setIndex(index)
          setOpenModify(!openModify)
        }} >Modifier</Button>
        <Button radius="md" color="red" onClick={async (event) => {
          event.preventDefault()
          await DeleteAPIData(`/api/GPU/${item.id}`).then(() => {
            mutate()
          })
        }}>Supprimer</Button>
      </td>
    </tr>
  ))

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 1000, marginTop: "2rem" }} verticalSpacing="xs">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Nom</th>
              <th className={classes.hiddenMobile}>NB Coeurs</th>
              <th className={classes.hiddenMobile}>Amazon Link</th>
              <th>Action</th>
            </tr>
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
        <Title sx={{ padding: "1rem" }} >Ajouter un composant</Title>
        <Divider />
        <GPUForm onClose={() => setOpen(!open)} mutate={mutate} />
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
        <GPUModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default GPUList