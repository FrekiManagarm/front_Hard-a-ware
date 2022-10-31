import {useState} from 'react'
import PatchAPIData from '../../../../helpers/patch_api_data'
import { TextInput, Textarea, Button, Checkbox } from '@mantine/core';

const CaseModifyForm = ({ item, onClose, mutate }) => {
    const [credentials, setCredentials] = useState({
        image: item ? item.image : "",
        RGB: item ? item.RGB : false,
        alim_inclus: item ? item.alim_inclus : false,
        couleur: item ? item.couleur : "",
        description: item ? item.description : "",
        facade_laterale: item ? item.facade_laterale : "",
        format: item ? item.format : "",
        nom: item ? item.nom : "",
        ventilateur: item ? item.ventilateur : false,
        link: item ? item.link : "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await PatchAPIData(`/api/Boitier/${item.id}`, credentials).then((response) => {
            onClose();
            mutate();
        })

        console.log(response, "response api")
    }

  return (
    <form onSubmit={handleSubmit}>
        <TextInput 
            name='image'
            type="url"
            value={credentials.image}
            sx={{ padding: "1rem" }}
            label="Image (URL)"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, image: event.currentTarget.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='link'
            type="text"
            label="Link (URL)"
            required
            value={credentials.link}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, link: event.currentTarget.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='nom'
            type="text"
            label="Nom (String)"
            required
            value={credentials.nom}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, nom: event.currentTarget.value })
            }}
        />
        <Checkbox 
            name='RGB'
            type="checkbox"
            label="RGB (Bool)"
            required
            value={credentials.RGB}
            sx={{ padding: "1rem" }}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, RGB: event.currentTarget.checked })
            }}
        />
        <Checkbox
            sx={{ padding: "1rem" }}
            name='alim_inclus'
            type="checkbox"
            label="Alim Inclus (Bool)"
            required
            value={credentials.alim_inclus}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, alim_inclus: event.currentTarget.checked })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='couleur'
            value={credentials.couleur}
            type="text"
            label="Couleur (String)"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, couleur: event.currentTarget.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='facade_laterale'
            type="text"
            label="Facade Latérale (String)"
            required
            value={credentials.facade_laterale}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, facade_laterale: event.currentTarget.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='format'
            type="text"
            label="Format (String)"
            required
            value={credentials.format}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, format: event.currentTarget.value })
            }}
        />
        <Checkbox 
            sx={{ padding: "1rem" }}
            name='ventilateur'
            type="checkbox"
            label="Ventilateur (Bool)"
            required
            value={credentials.ventilateur}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, ventilateur: event.currentTarget.checked })
            }}
        />
        <Textarea 
            sx={{ padding: "1rem" }}
            name='description'
            type="text"
            label="Description (String)"
            required
            value={credentials.description}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
        />
        <Button type="submit" sx={{ margin: "1rem" }} color="green">Ajouter</Button>
    </form>
  )
}

export default CaseModifyForm