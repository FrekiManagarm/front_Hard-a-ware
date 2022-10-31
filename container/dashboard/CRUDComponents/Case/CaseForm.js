import {useState} from 'react'
import PostAPIData from '../../../../helpers/post_api_data';
import { TextInput, Textarea, Button, Checkbox } from '@mantine/core';

const CaseForm = ({ onClose, mutate }) => {

    const [credentials, setCredentials] = useState({
        image: "",
        RGB: false,
        alim_inclus: false,
        couleur: "",
        description: "",
        facade_laterale: "",
        format: "",
        nom: "",
        ventilateur: false,
        link: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await PostAPIData('/api/Boitier', credentials).then((response) => {
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
            label="Image (URL)"
            required
            sx={{ padding: "1rem" }}
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
            label="Alim inclus (Bool)"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, alim_inclus: event.currentTarget.checked })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='couleur'
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
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, facade_laterale: event.target.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='format'
            type="text"
            label="Format (String)"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, format: event.target.value })
            }}
        />
        <Checkbox 
            sx={{ padding: "1rem" }}
            name='ventilateur'
            type="checkbox"
            label="Ventilateur (Bool)"
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
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, description: event.currentTarget.value })
            }}
        />
        <Button sx={{ margin: "1rem" }} type="submit" color="green">Ajouter</Button>
    </form>
  )
}

export default CaseForm