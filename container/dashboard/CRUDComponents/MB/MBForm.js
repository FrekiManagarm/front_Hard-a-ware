import { useState } from 'react'
import PostAPIData from '../../../../helpers/post_api_data'
import { TextInput, Textarea, Button } from '@mantine/core'

const MBForm = ({ onClose, mutate }) => {

  const [credentials, setCredentials] = useState({
    nom: "",
    image: "",
    link: "",
    constructeur: "",
    format: "",
    fréquence_mémoire: "",
    proco_compatible: "",
    socket: "",
    description: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await PostAPIData('/api/MotherBoard', credentials).then((response) => {
      onClose();
      mutate();
    });

    console.log(response, 'response api');
  }


  return (
    <form onSubmit={handleSubmit}>
        <TextInput 
          name='nom'
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
          label="Image (URL)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, image: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='link'
          label="Amazon Link (URL)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, link: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='constructeur'
          label="Constructeur (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, constructeur: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='format'
          label="Format (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, format: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='fréquence_mémoire'
          label="Fréquence mémoire (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, fréquence_mémoire: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='proco_compatible'
          label="Proco Compatible (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, proco_compatible: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='socket'
          label="Socket (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, socket: event.currentTarget.value })
          }}
        />
        <Textarea 
          name="description"
          label="Description (String)"
          required
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, description: event.currentTarget.value })
          }}
        />
        <Button type="submit" color="green" sx={{ margin: "1rem" }}>Ajouter</Button>
    </form>
  )
}

export default MBForm