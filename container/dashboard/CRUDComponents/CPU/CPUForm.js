import { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";
import PostAPIData from "../../../../helpers/post_api_data";

const CPUForm = ({ onClose, setNotification }) => {

    const [credentials, setCredentials] = useState({
        nom: "",
        image: "",
        architecture: "",
        cache: "",
        chipset: "",
        chipset_graphique: "",
        frequence: "",
        frequence_boost: "",
        nb_coeur: 0,
        nb_threads: 0,
        description: "",
        overclocking: false,
        socket: "",
        type: "",
        link: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await PostAPIData('/api/CPU', credentials).then((response) => {
            setNotification(true)
            onClose()
          })
          console.log(response, 'api response')
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <div>
                <TextInput 
                    label="Nom"
                    type="text"
                    required
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, nom: event.target.value })
                    }}
                />
                <TextInput
                    label="Image"
                    type="text"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, image: event.target.value })
                    }}
                />
                <TextInput 
                    type="text"
                    label="Architecture"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, architecture: event.target.value })
                    }}
                />
                <TextInput
                    type="text"
                    label="Cache"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, cache: event.target.value })
                    }}
                />
            </div>
            <div>
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Chipset"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, chipset: event.target.value })
                    }}
                />
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Chipset Graphique"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, chipset_graphique: event.target.value })
                    }}
                />
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Fréquence"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, frequence: event.target.value })
                    }}
                />
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Fréquence Boost"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, frequence_boost: event.target.value })
                    }}
                />
                <TextInput 
                    type="number"
                    label="Nombre de coeur"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, nb_coeur: event.target.value })
                    }}
                />
            </div>
            <div>
                <TextInput 
                    type="number"
                    label="Nombre de threads"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, nb_threads: event.target.value })
                    }}
                />
                <TextInput 
                    type="checkbox"
                    label="Overclocking"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, overclocking: event.target.value })
                    }}
                />
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Socket"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, socket: event.target.value })
                    }}
                />
                <TextInput 
                    sx={{ padding: "1rem" }}
                    type="text"
                    label="Type"
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, type: event.target.value })
                    }}
                />
            </div>
            <div>
                <TextInput 
                    type="url"
                    label="Link"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, link: event.target.value })
                    }}
                />
                <Textarea 
                    type="text"
                    label="Description"
                    sx={{ padding: "1rem" }}
                    onChange={(event) => {
                        event.preventDefault()
                        setCredentials({ ...credentials, description: event.target.value })
                    }}
                />
            </div>

            <Button color="green" sx={{ margin: "1rem" }} type="submit">Ajouter</Button>
        </form>
    )
}

export default CPUForm