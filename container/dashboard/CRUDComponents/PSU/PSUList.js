import { Anchor, Button, Divider, Drawer, ScrollArea, Table, Title } from '@mantine/core';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import DeleteAPIData from '../../../../helpers/delete_api_data';
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import PSUForm from './PSUForm';
import usePSUStyles from './PSUList.style';
import PSUModifyForm from './PSUModifyForm';



const PSUList = () => {

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);
  const { classes } = usePSUStyles();
 

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data, mutate } = useFetchSwr('/api/PSUs', mounted)

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
        <td className={classes.hiddenMobile}>
          {item.puissance}
        </td>
        <td className={classes.hiddenMobile}>
          {item.certif}
        </td>
        <td>
          <Button
            color="orange"
            radius="md"
            sx={{ margin: "1rem" }}
            onClick={() => {
              setOpenModify(!openModify)
              setIndex(index)
            }}
          >Modifier</Button>
          <Button
            radius="md"
            color="red"
            onClick={async (event) => {
              event.preventDefault();
              await DeleteAPIData(`/api/PSU/${item.id}`).then(() => {
                mutate()
              })
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
              <th className={classes.hiddenMobile}>Puissance</th>
              <th className={classes.hiddenMobile}>Certification</th>
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
        <PSUForm onClose={() => setOpen(!open)} mutate={mutate} />
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
        <PSUModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default PSUList