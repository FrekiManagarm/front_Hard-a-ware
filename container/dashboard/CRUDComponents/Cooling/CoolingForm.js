import { useState } from "react";
import { TextInput, Textarea, Button, ScrollArea } from "@mantine/core";
import PostAPIData from "../../../../helpers/post_api_data";

const CoolingForm = ({ onClose, mutate }) => {
  const [credentials, setCredentials] = useState({
    nom: "",
    image: "",
    link: "",
    bruit: "",
    format: "",
    marque: "",
    matériaux: "",
    socket: "",
    type: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PostAPIData("/api/Cooling", credentials).then(
      (response) => {
        mutate();
        onClose();
      },
    );

    console.log(response, "response api");
  };

  return (
    <ScrollArea>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <div>
          <TextInput
            type="text"
            name="nom"
            label="Nom (String)"
            sx={{ padding: "1rem" }}
            required
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, nom: event.currentTarget.value });
            }}
          />
          <TextInput
            type="text"
            name="image"
            label="Image (URL)"
            required
            sx={{ padding: "1rem" }}
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
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, format: event.currentTarget.value });
            }}
          />
          <TextInput
            name="marque"
            type="text"
            label="Marque (String)"
            required
            sx={{ padding: "1rem" }}
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, marque: event.currentTarget.value });
            }}
          />
        </div>
        <div>
          <TextInput
            name="matériaux"
            type="text"
            label="Matériaux (String)"
            required
            sx={{ padding: "1rem" }}
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
            onChange={(event) => {
              event.preventDefault();
              setCredentials({ ...credentials, socket: event.currentTarget.value });
            }}
          />
          <TextInput
            name="type"
            type="text"
            label="Type (String)"
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
            onChange={(event) => {
              event.preventDefault();
              setCredentials({
                ...credentials,
                description: event.currentTarget.value,
              });
            }}
          />
          <Button type="submit" color="green" sx={{ margin: "1rem" }}>Ajouter</Button>
        </div>
      </form>
    </ScrollArea>
  );
};

export default CoolingForm;
