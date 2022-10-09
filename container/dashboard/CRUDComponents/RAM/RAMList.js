import { Anchor, ScrollArea, Table, Button, Drawer, Title, Divider, TextInput, Textarea } from '@mantine/core';
import Image from 'next/image';
import React, {useState, useEffect} from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { useFetchSwr } from '../../../../hooks/useFetchSwr'
import PostAPIData from '../../../../helpers/post_api_data'
import { getCookie } from '../../../../helpers/session';
import fetch from 'isomorphic-unfetch'

const RAMList = () => {

  const [mounted, setMounted] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [credentials, setCredentials] = useState({
    capacité: "",
    description: "",
    image: "",
    interface: "",
    latence: "",
    link: "",
    nom: "",
    quantité: 0
  });

  useEffect(() => {
   setMounted(true)
  }, []);

  const LegalSchema = Yup.object().shape({
    capacité: Yup.string()
      .required('Ce champ est requis pour continuer'),
    description: Yup.string()
      .required('Ce champ est requis pour continuer'),
    image: Yup.string()
      .required('Ce champ est requis pour continuer'),
    interface: Yup.string()
      .required('Ce champ est requis pour continuer'),
    latence: Yup.string()
      .required('Ce champ est requis pour continuer'),
    link: Yup.string()
      .required('Ce champ est requis pour continuer'),
    nom: Yup.string()
      .required('Ce champ est requis pour continuer'),
    quantité: Yup.number()
      .required('Ce champ est requis pour continuer')
  })

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
  console.log(credentials, 'data RAM')

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
        <Formik 
          initialValues={credentials}
          validationSchema={LegalSchema}
          onSubmit={async (values) => {
            console.log(values, 'values on submit')

            const endpoint = '/api/RAM';

            const response = await PostAPIData(endpoint, values).then((response) => {
              console.log(response, 'response api')
            })
          }}
        >
          <TextInput label="Nom" type="text" required sx={{ padding: "1rem" }} onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, nom: event.target.value })
          }} />
          <TextInput label="Image" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, image: event.target.value })
            }}
          />
          <TextInput label="Link" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, link: event.target.value })
            }}
          />
          <TextInput label="Interface" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, interface: event.target.value })
            }}
          />
          <TextInput label="Latence" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, latence: event.target.value })
            }}
          />
          <TextInput label="Capacité" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, capacité: event.target.value })
            }}
          />
          <TextInput type="number" sx={{ padding: "1rem" }} label="Quantité" onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, quantité: event.target.value })
          }}  />
          <Textarea rows={15} label="Description" type="text" required sx={{ padding: "1rem" }} 
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, description: event.target.value })
            }}
          />
          <Button color="green" type="submit" sx={{ margin: "1rem" }}>Ajouter</Button>
        </Formik>
      </Drawer>
    </>
  )
}

export default RAMList