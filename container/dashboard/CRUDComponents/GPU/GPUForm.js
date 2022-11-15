import { useState } from 'react';
import PostAPIData from '../../../../helpers/post_api_data';
import { TextInput, Textarea, Button } from '@mantine/core';

const GPUForm = ({ onClose, mutate }) => {

  const [credentials, setCredentials] = useState({
    nom: "",
    image: "",
    frequence: "",
    frequence_boost: "",
    nb_coeur: 0,
    nb_ventilateur: 0,
    nb_video_output: 0,
    description: "",
    link: ""
  });

  // console.log(credentials)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await PostAPIData('/api/GPU', credentials).then((response) => {
      onClose()
      mutate()
    })
  }

  return (
    <form onSubmit={handleSubmit} >
        <TextInput 
          label="Nom"
          type="text"
          name='nom'
          sx={{ padding: "1rem" }}
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, nom: event.currentTarget.value })
          }}
        />
        <TextInput 
          name='image'
          type="text"
          label="Image"
          sx={{ padding: "1rem" }}
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, image: event.currentTarget.value })
          }}
        />
        <TextInput 
          type="text"
          name='frequence'
          label="Frequence"
          sx={{ padding: "1rem" }}
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, frequence: event.currentTarget.value })
          }}
        />
        <TextInput 
          required
          label="Frequence Boost"
          type="text"
          name='frequence_boost'
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, frequence_boost: event.currentTarget.value })
          }}
        />
        <TextInput 
          required
          label="Nb Coeur"
          type="number"
          name='nb_coeur'
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, nb_coeur: event.currentTarget.valueAsNumber })
          }}
        />
        <TextInput 
          name='nb_ventilateur'
          sx={{ padding: "1rem" }}
          label="Nb Ventilateur"
          required
          type="number"
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, nb_ventilateur: event.currentTarget.valueAsNumber })
          }}
        />
        <TextInput 
          type="number"
          name='nb_video_output'
          sx={{ padding: "1rem" }}
          label="Nb Video Output"
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, nb_video_output: event.currentTarget.valueAsNumber })
          }}
        />
        <TextInput 
          type="url"
          name='link'
          sx={{ padding: "1rem" }}
          label="Amazon Link"
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, link: event.currentTarget.value })
          }}
        />
        <Textarea 
          name='description'
          sx={{ padding: "1rem" }}
          label="Description"
          required
          onChange={(event) => {
            event.preventDefault()
            setCredentials({ ...credentials, description: event.currentTarget.value })
          }}
        />
        <Button sx={{ margin: "1rem" }} color="green" type="submit">Ajouter</Button>
    </form>
  )
}

export default GPUForm