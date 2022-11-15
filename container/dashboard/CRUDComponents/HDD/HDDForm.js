import { useState } from 'react';
import { TextInput, Textarea, Button,  } from '@mantine/core';
import PostAPIData from '../../../../helpers/post_api_data';

const HDDForm = ({ onClose, mutate }) => {

  const [credentials, setCredentials] = useState({
    nom: "",
    image: "",
    RPM: 0,
    capacité: 0,
    format: "",
    interface: "",
    marque: "",
    mémoire_cache: 0,
    transfert: "",
    link: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await PostAPIData('/api/HDD', credentials).then((response) => {
      onClose()
      mutate()
    });
    // console.log(response, 'response api');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div>
          <TextInput 
            name='nom'
            label="Nom"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, nom: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='image'
            label="Image"
            type="url"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, image: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='RPM'
            label="RPM"
            type="number"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, capacité: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='format'
            label="Format"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, format: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='interface'
            label="Interface"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, interface: event.currentTarget.value })
            }}
          />
        </div>
        <div>
          <TextInput 
            name='marque'
            label="Marque"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, marque: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='mémoire_cache'
            label="Mémoire Cache"
            type="number"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, mémoire_cache: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='capacité'
            label="Capacité"
            type="number"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, capacité: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='transfert'
            label="Transfert"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, transfert: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='link'
            label="Amazon Link"
            type="url"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, link: event.currentTarget.value })
            }}
          />
          <Textarea 
            name='description'
            label="Description"
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
          />
          <Button color="green" type="submit" sx={{ margin: "1rem" }}>Ajouter</Button>
        </div>
    </form>
  )
}

export default HDDForm