import { useState } from "react";
import { TextInput, Textarea, Button } from "@mantine/core";

const GPUModifyForm = ({ item, onClose, setNotification }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    frequence: item ? item.frequence : "",
    frequence_boost: item ? item.frequence_boost : "",
    nb_coeur: item ? item.nb_coeur : 0,
    nb_ventilateur: item ? item.nb_ventilateur : 0,
    nb_video_output: item ? item.nb_video_output : 0,
    description: item ? item.description : "",
    link: item ? item.link : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PostAPIData("/api/GPU", credentials).then(
      (response) => {
        onClose();
        setNotification("success");
      },
    );
    console.log(response, 'response api')
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nom"
        type="text"
        name="nom"
        value={credentials.nom}
        sx={{ padding: "1rem" }}
        required
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, nom: event.target.value });
        }}
      />
      <TextInput
        name="image"
        type="text"
        label="Image"
        sx={{ padding: "1rem" }}
        value={credentials.image}
        required
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, image: event.target.value });
        }}
      />
      <TextInput
        type="text"
        sx={{ padding: "1rem" }}
        name="frequence"
        value={credentials.frequence}
        label="Frequence"
        required
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, frequence: event.target.value });
        }}
      />
      <TextInput
        required
        label="Frequence Boost"
        sx={{ padding: "1rem" }}
        type="text"
        value={credentials.frequence_boost}
        name="frequence_boost"
        onChange={(event) => {
          event.preventDefault();
          setCredentials({
            ...credentials,
            frequence_boost: event.target.value,
          });
        }}
      />
      <TextInput
        required
        label="Nb Coeur"
        type="number"
        sx={{ padding: "1rem" }}
        value={credentials.nb_coeur}
        name="nb_coeur"
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, nb_coeur: event.target.value });
        }}
      />
      <TextInput
        name="nb_ventilateur"
        label="Nb Ventilateur"
        sx={{ padding: "1rem" }}
        required
        value={credentials.nb_ventilateur}
        type="number"
        onChange={(event) => {
          event.preventDefault();
          setCredentials({
            ...credentials,
            nb_ventilateur: event.target.value,
          });
        }}
      />
      <TextInput
        type="number"
        name="nb_video_output"
        label="Nb Video Output"
        sx={{ padding: "1rem" }}
        required
        value={credentials.nb_video_output}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({
            ...credentials,
            nb_video_output: event.target.value,
          });
        }}
      />
      <TextInput
        type="url"
        name="link"
        sx={{ padding: "1rem" }}
        label="Amazon Link"
        value={credentials.link}
        required
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, link: event.target.value });
        }}
      />
      <Textarea
        name="description"
        label="Description"
        sx={{ padding: "1rem" }}
        value={credentials.description}
        required
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, description: event.target.value });
        }}
      />
      <Button sx={{ margin: "1rem", width: "90%" }} color="green" type="submit">
        Ajouter
      </Button>
    </form>
  );
};

export default GPUModifyForm;
