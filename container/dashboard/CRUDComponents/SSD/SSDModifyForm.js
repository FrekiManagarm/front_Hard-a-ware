import { useState } from 'react';
import PatchAPIData from '../../../../helpers/patch_api_data';
import { TextInput, Textarea, Button } from '@mantine/core';

const SSDModifyForm = ({ item, onClose, mutate }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    capacité: item ? item.capacité : 0,
    connectique: item ? item.connectique : "",
    format: item ? item.format : "",
    interface: item ? item.interface : "",
    lecture: item ? item.lecture : 0,
    ecriture: item ? item.ecriture : 0,
    marque: item ? item.marque : "",
    link: item ? item.link : "",
    description: item ? item.description : ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PatchAPIData(`/api/SSD/${item.id}`, credentials).then((response) => {
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
            value={credentials.nom}
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
            value={credentials.image}
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
            value={credentials.capacité}
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
            value={credentials.connectique}
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
            value={credentials.format}
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
            value={credentials.interface}
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
            value={credentials.lecture}
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
            value={credentials.ecriture}
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
            value={credentials.marque}
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
            value={credentials.link}
            label="Amazon Link (URL)"
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
            value={credentials.description}
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
          />
          <Button sx={{ margin: "1rem" }} type='submit' color="orange">Modifier</Button>
        </div>
    </form>
  )
}

export default SSDModifyForm