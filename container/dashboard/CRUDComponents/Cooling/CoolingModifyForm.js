import { useState } from "react";
import { TextInput, Textarea, Button, ScrollArea } from "@mantine/core";
import PatchAPIData from "../../../../helpers/patch_api_data";

const CoolingModifyForm = ({ item, onClose, mutate }) => {
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
      mutate();
      onClose();
    });

    // console.log(response, "response api");
  };

  return (
    <ScrollArea>
      <form onSubmit={handleSubmit} style={{ display: "flex" }} >
        <div>
          <TextInput
            type="text"
            name="nom"
            label="Nom (String)"
            sx={{ padding: "1rem" }}
            value={credentials.nom}
            required
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, nom: event.currentTarget.value });
            }}
          />
          <TextInput
            type="url"
            name="image"
            label="Image (URL)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.image}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, image: event.currentTarget.value });
            }}
          />
          <TextInput
            type="text"
            name="link"
            label="Amazon Link (URL)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.link}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, link: event.currentTarget.value });
            }}
          />
          <TextInput
            name="bruit"
            type="text"
            label="Bruit (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.bruit}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, bruit: event.currentTarget.value });
            }}
          />
          <TextInput
            name="format"
            type="text"
            label="Format (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.format}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, format: event.currentTarget.value });
            }}
          />
        </div>
        <div>
          <TextInput
            name="marque"
            type="text"
            label="Marque (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.marque}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, marque: event.currentTarget.value });
            }}
          />
          <TextInput
            name="matériaux"
            type="text"
            label="Matériaux (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.matériaux}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, matériaux: event.currentTarget.value });
            }}
          />
          <TextInput
            name="socket"
            type="text"
            label="Socket (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.socket}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, socket: event.currentTarget.value });
            }}
          />
          <TextInput
            name="type"
            type="text"
            label="Type (String)"
            value={credentials.type}
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, type: event.currentTarget.value });
            }}
          />
          <Textarea
            name="description"
            type="text"
            label="Description (String)"
            required
            sx={{ padding: "1rem" }}
            value={credentials.description}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({
                ...credentials,
                description: event.currentTarget.value,
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
