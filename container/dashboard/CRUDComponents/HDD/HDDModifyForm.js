import { useState } from 'react';
import PatchAPIData from '../../../../helpers/patch_api_data';
import { TextInput, Textarea, Button } from '@mantine/core';

const HDDModifyForm = ({ item, onClose, mutate }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    RPM: item ? item.RPM : 0,
    capacité: item ? item.capacité : 0,
    format: item ? item.format : "",
    interface: item ? item.interface : "",
    marque: item ? item.marque : "",
    mémoire_cache: item ? item.mémoire_cache : 0,
    transfert: item ? item.transfert : "",
    link: item ? item.link : "",
    description: item ? item.description : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await PatchAPIData(`/api/HDD/${item.id}`, credentials).then((response) => {
      onClose()
      mutate()
    });
    console.log(response, 'response api');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div>
          <TextInput 
            name='nom'
            label="Nom"
            type="text"
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
            label="Image"
            type="url"
            value={credentials.image}
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
            value={credentials.RPM}
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, RPM: event.currentTarget.valueAsNumber })
            }}
          />
          <TextInput 
            name='format'
            label="Format"
            type="text"
            value={credentials.format}
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
            value={credentials.interface}
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
            value={credentials.marque}
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
            value={credentials.mémoire_cache}
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
            value={credentials.capacité}
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
            value={credentials.transfert}
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
            value={credentials.link}
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
            value={credentials.description}
            type="text"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault()
              setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
          />
          <Button color="orange" sx={{ margin: "1rem" }} type="submit">Modifier</Button>
        </div>
    </form>
  )
}

export default HDDModifyForm