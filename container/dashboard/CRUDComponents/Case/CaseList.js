import {useState, useEffect} from 'react'
import useCaseListStyles from './CaseList.style'
import { ScrollArea, Table, Button, Drawer, Title, Divider, Anchor } from '@mantine/core';
import { useFetchSwr } from '../../../../hooks/useFetchSwr';
import Image from 'next/image';
import DeleteAPIData from '../../../../helpers/delete_api_data';
import CaseForm from './CaseForm';
import CaseModifyForm from './CaseModifyForm';

const CaseList = () => {

  const { classes } = useCaseListStyles();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModify, setOpenModify] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    setMounted(true)
  }, []);

  const { data, mutate } = useFetchSwr('/api/Boitiers', mounted);

  const rows = data?.map((item, index) => (
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
      <td className={classes.hiddenMobile}>
        {item.couleur}
      </td>
      <td className={classes.hiddenMobile}>
        {item.format}
      </td>
      <td>
        <Button color="orange"
          sx={{ margin: "1rem" }}
          radius="md"
          onClick={() => {
            setOpenModify(!openModify)
            setIndex(index)
          }}
        >Modifier</Button>
        <Button color="red"
          radius="md"
          onClick={async (event) => {
            event.preventDefault();
            await DeleteAPIData(`/api/Boitier/${item.id}`).then(() => {
              mutate()
            })
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
            <th className={classes.hiddenMobile}>Couleur</th>
            <th className={classes.hiddenMobile}>Format</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {rows}
          </tbody>
          <Button color="green" onClick={() => setOpen(!open)} >Ajouter</Button>
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
        <CaseForm onClose={() => setOpen(!open)} mutate={mutate} />
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
        <CaseModifyForm item={data ? data[index] : null} onClose={() => setOpenModify(!openModify)} mutate={mutate} />
      </Drawer>
    </>
  )
}

export default CaseList