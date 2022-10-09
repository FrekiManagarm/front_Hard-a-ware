import { Anchor, ScrollArea, Table, Button, Drawer, Title, Divider, TextInput, Textarea } from '@mantine/core';
import Image from 'next/image';
import React, {useState, useEffect} from 'react'
import { Formik, Form } from 'formik';

import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import PostAPIData from '../../../../helpers/post_api_data'
import { getCookie } from '../../../../helpers/session';
import fetch from 'isomorphic-unfetch'

const RAMList = () => {

  const [mounted, setMounted] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  
  useEffect(() => {
   setMounted(true)
  }, []);

  // const handleSubmit = () => {
  //   const response = fetch(`${process.env.SERVER_API}/api/RAM`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + getCookie("token"),
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(credentials)
  //   }).then((response) => {
  //     console.log(response)
  //   })

  //   console.log(response, 'response post api ram');
  // }

  const { data } = useFetchSwr('/api/RAMs', mounted)

  const rows = data?.map((item) => (
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
        <Button color="orange" sx={{ margin: "1rem" }}>Modifier</Button>
        <Button color="red">Supprimer</Button>
      </td>
    </tr>
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
          <Button color="green" onClick={() => setAddOpen(!addOpen)} >Ajouter</Button>
        </Table>
      </ScrollArea>
      <Drawer
        opened={addOpen}
        onClose={() => setAddOpen(!addOpen)}
        position="right"
        size={500}
      >
        <Title sx={{ padding: "1rem" }}>Ajouter un composant</Title>
        <Divider/>
        
      </Drawer>
    </>
  )
}

export default RAMList