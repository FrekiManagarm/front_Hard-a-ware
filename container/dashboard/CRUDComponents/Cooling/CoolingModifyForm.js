import { useState } from "react";
import { TextInput, Textarea, Button, ScrollArea } from "@mantine/core";
import PatchAPIData from "../../../../helpers/patch_api_data";

const CoolingModifyForm = ({ item, onClose, setNotification }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    link: item ? item.link : "",
    bruit: item ? item.bruit : "",
    format: item ? item.format : "",
    marque: item ? item.marque : "",
    matériaux: item ? item.matériaux : "",
    socket: item ? item.socket : "",
    type: item ? item.type : "",
    description: item ? item.description : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PatchAPIData(
      `/api/Cooling/${item.id}`,
      credentials,
    ).then((response) => {
      setNotification("success");
      onClose();
    });

    console.log(response, "response api");
  };

  return (
    <ScrollArea>
      <form onSubmit={handleSubmit} style={{ display: "flex" }} >
        <div>
          <TextInput
            type="text"
            name="nom"
            label="Nom"
            sx={{ padding: "1rem" }}
            value={credentials.nom}
            required
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, nom: event.target.value });
            }}
          />
          <TextInput
            type="url"
            name="image"
            label="Image"
            required
            sx={{ padding: "1rem" }}
            value={credentials.image}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, image: event.target.value });
            }}
          />
          <TextInput
            type="text"
            name="link"
            label="Link"
            required
            sx={{ padding: "1rem" }}
            value={credentials.link}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, link: event.target.value });
            }}
          />
          <TextInput
            name="bruit"
            type="text"
            label="Bruit"
            required
            sx={{ padding: "1rem" }}
            value={credentials.bruit}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, bruit: event.target.value });
            }}
          />
          <TextInput
            name="format"
            type="text"
            label="Format"
            required
            sx={{ padding: "1rem" }}
            value={credentials.format}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, format: event.target.value });
            }}
          />
        </div>
        <div>
          <TextInput
            name="marque"
            type="text"
            label="Marque"
            required
            sx={{ padding: "1rem" }}
            value={credentials.marque}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, marque: event.target.value });
            }}
          />
          <TextInput
            name="matériaux"
            type="text"
            label="Matériaux"
            required
            sx={{ padding: "1rem" }}
            value={credentials.matériaux}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, matériaux: event.target.value });
            }}
          />
          <TextInput
            name="socket"
            type="text"
            label="Socket"
            required
            sx={{ padding: "1rem" }}
            value={credentials.socket}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, socket: event.target.value });
            }}
          />
          <TextInput
            name="type"
            type="text"
            label="Type"
            value={credentials.type}
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, type: event.target.value });
            }}
          />
          <Textarea
            name="description"
            type="text"
            label="Description"
            required
            sx={{ padding: "1rem" }}
            value={credentials.description}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({
                ...credentials,
                description: event.target.value,
              });
            }}
          />
          <Button sx={{ margin: "1rem" }}>Ajouter</Button>
        </div>
      </form>
    </ScrollArea>
  );
};

export default CoolingModifyForm;
