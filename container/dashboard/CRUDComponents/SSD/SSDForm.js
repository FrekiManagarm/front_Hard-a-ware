import { useState } from 'react'
import PostAPIData from '../../../../helpers/post_api_data'
import { TextInput, Textarea, Button } from '@mantine/core';

const SSDForm = ({ onClose, mutate }) => {

  const [credentials, setCredentials] = useState({
    nom: "",
    image: "",
    capacité: 0,
    connectique: "",
    format: "",
    interface: "",
    lecture: 0,
    ecriture: 0,
    marque: "",
    link: "",
    description: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PostAPIData('/api/SSD', credentials).then((response) => {
      onClose()
      mutate()
    });

    console.log(response, 'response api');
  }

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <div>
          <TextInput 
            name='nom'
            type="text"
            label="Nom (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, nom: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='image'
            type="url"
            label="Image (URL)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, image: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='capacité'
            type="number"
            label="Capacité (Number)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, capacité: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='connectique'
            type="text"
            label="Connectique (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, connectique: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='format'
            type="text"
            label="Format (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, format: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='interface'
            type="text"
            label="Interface (String)"
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
            name='lecture'
            type="number"
            label="Lecture (Number)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, lecture: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='ecriture'
            type="number"
            label="Ecriture (Number)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, ecriture: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='marque'
            type="text"
            label="Marque (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, marque: event.currentTarget.value })
            }}
          />
          <TextInput 
            name='link'
            type="url"
            label="Amazon Link (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, link: event.currentTarget.value })
            }}
          />
          <Textarea 
            name='description'
            label="Description (String)"
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

export default SSDForm