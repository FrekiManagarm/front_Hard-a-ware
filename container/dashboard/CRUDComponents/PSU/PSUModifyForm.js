import { useState } from 'react';
import { TextInput, Textarea, Button } from '@mantine/core';
import PatchAPIData from '../../../../helpers/patch_api_data';

const PSUModifyForm = ({ item, onClose, mutate }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    certif: item ? item.certif : "",
    format: item ? item.format : "",
    marque: item ? item.marque : "",
    modulaire: item ? item.modulaire : "",
    puissance: item ? item.puissance : 0,
    link: item ? item.link : "",
    description: item ? item.description : ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await PatchAPIData(`/api/PSU/${item.id}`, credentials).then((response) => {
      onClose()
      mutate()
    });
    // console.log(response, 'response api')
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
            name='certif'
            type="text"
            label="Certification"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, certif: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='format'
            type="text"
            label="Format"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, format: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='marque'
            type="text"
            label="Marque"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, marque: event.currentTarget.value })
            }}
          />
        </div>
        <div>
          <TextInput 
            name='modulaire'
            label="Modularité"
            type="text"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, modulaire: event.currentTarget.value })
            }}
          />
          <TextInput 
            name="puissance"
            label="Puissance"
            type="number"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, puissance: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name="link"
            type="url"
            label="Amazon Link"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, link: event.currentTarget.value })
            }}
          />
          <Textarea 
            name="description"
            type="text"
            label="Description"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
          />
          <Button color="green" type="submit">Ajouter</Button>
        </div>
    </form>
  )
}

export default PSUModifyForm