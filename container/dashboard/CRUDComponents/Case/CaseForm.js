import {useState} from 'react'
import PostAPIData from '../../../../helpers/post_api_data';
import { TextInput, Textarea, Button, Checkbox } from '@mantine/core';

const CaseForm = ({ onClose, setNotification }) => {

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
            setNotification("success");
        })

        console.log(response, "response api")
    }

  return (
    <form onSubmit={handleSubmit}>
        <TextInput 
            name='image'
            type="url"
            label="Image"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, image: event.target.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='link'
            type="text"
            label="Link"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, link: event.target.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='nom'
            type="text"
            label="Nom"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, nom: event.target.value })
            }}
        />
        <Checkbox 
            name='RGB'
            type="checkbox"
            label="RGB"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, RGB: event.target.value })
            }}
        />
        <Checkbox
            sx={{ padding: "1rem" }}
            name='alim_inclus'
            type="checkbox"
            label="Alim inclus"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, alim_inclus: event.target.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='couleur'
            type="text"
            label="Couleur"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, couleur: event.target.value })
            }}
        />
        <TextInput 
            sx={{ padding: "1rem" }}
            name='facade_laterale'
            type="text"
            label="Facade Latérale"
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
            label="Format"
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
            label="Ventilateur"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, ventilateur: event.target.value })
            }}
        />
        <Textarea 
            sx={{ padding: "1rem" }}
            name='description'
            type="text"
            label="Description"
            required
            onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, description: event.target.value })
            }}
        />
        <Button sx={{ margin: "1rem" }} type="submit" color="green">Ajouter</Button>
    </form>
  )
}

export default CaseForm