import { useState } from "react";
import { TextInput, Textarea, Button, Checkbox } from "@mantine/core";
import PatchAPIData from "../../../../helpers/patch_api_data";

const CPUModifyForm = ({ item, onClose, mutate }) => {
  const [credentials, setCredentials] = useState({
    nom: item ? item.nom : "",
    image: item ? item.image : "",
    architecture: item ? item.architecture : "",
    cache: item ? item.cache : "",
    chipset: item ? item.chipset : "",
    chipset_graphique: item ? item.chipset_graphique : "",
    frequence: item ? item.frequence : "",
    frequence_boost: item ? item.frequence_boost : "",
    nb_coeur: item ? item.nb_coeur : 0,
    nb_threads: item ? item.nb_threads : 0,
    description: item ? item.description : "",
    overclocking: item ? item.overclocking : false,
    socket: item ? item.socket : "",
    type: item ? item.type : "",
    link: item ? item.link : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await PatchAPIData(`/api/RAM/${item?.id}`).then(
      (response) => {
        setNotification(true);
        mutate();
      },
    );
    // console.log(response, "api response");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <div>
        <TextInput
          label="Nom"
          type="text"
          required
          value={credentials.nom}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, nom: event.target.value });
          }}
        />
        <TextInput
          label="Image"
          type="text"
          required
          value={credentials.image}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, image: event.target.value });
          }}
        />
        <TextInput
          type="text"
          label="Architecture"
          required
          value={credentials.architecture}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({
              ...credentials,
              architecture: event.target.value,
            });
          }}
        />
        <TextInput
          type="text"
          label="Cache"
          required
          value={credentials.cache}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, cache: event.target.value });
          }}
        />
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Chipset"
          required
          value={credentials.chipset}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, chipset: event.target.value });
          }}
        />
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Chipset Graphique"
          required
          value={credentials.chipset_graphique}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({
              ...credentials,
              chipset_graphique: event.target.value,
            });
          }}
        />
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Fréquence"
          required
          value={credentials.frequence}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, frequence: event.target.value });
          }}
        />
      </div>
      <div>
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Fréquence Boost"
          required
          value={credentials.frequence_boost}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({
              ...credentials,
              frequence_boost: event.target.value,
            });
          }}
        />
        <TextInput
          type="number"
          label="Nombre de coeur"
          required
          value={credentials.nb_coeur}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, nb_coeur: event.target.value });
          }}
        />
        <TextInput
          type="number"
          label="Nombre de threads"
          required
          sx={{ padding: "1rem" }}
          value={credentials.nb_threads}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, nb_threads: event.target.value });
          }}
        />
        <Checkbox
          type="checkbox"
          label="Overclocking"
          sx={{ padding: "1rem" }}
          required
          value={credentials.overclocking}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({
              ...credentials,
              overclocking: event.currentTarget.checked,
            });
          }}
        />
      </div>
      <div>
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Socket"
          required
          value={credentials.socket}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, socket: event.target.value });
          }}
        />
        <TextInput
          sx={{ padding: "1rem" }}
          type="text"
          label="Type"
          required
          value={credentials.type}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, type: event.target.value });
          }}
        />
        <TextInput
          type="url"
          label="Link"
          required
          value={credentials.link}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, link: event.target.value });
          }}
        />
        <Textarea
          type="text"
          label="Description"
          required
          value={credentials.description}
          sx={{ padding: "1rem" }}
          onChange={(event) => {
            event.preventDefault();
            setCredentials({ ...credentials, description: event.target.value });
          }}
        />
        <Button color="green" sx={{ margin: "1rem" }} type="submit">
          Ajouter
        </Button>
      </div>
    </form>
  );
};

export default CPUModifyForm;
