import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { TextInput, Textarea, Button } from "@mantine/core";
import { getCookie } from "../../../../helpers/session";
import PostAPIData from "../../../../helpers/post_api_data";
import PatchAPIData from "../../../../helpers/patch_api_data";

const RAMForm = ({ item, onClose, setNotification }) => {
  const [credentials, setCredentials] = useState({
    capacité: "",
    description: "",
    image: "",
    interface: "",
    latence: "",
    link: "",
    nom: "",
    quantité: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault()
      const response = await PostAPIData('/api/RAM', credentials).then((response) => {
        setNotification(true)
        onClose()
      })
      console.log(response, 'api response')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Nom"
        type="text"
        value={credentials.nom}
        required
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
        label="Link"
        type="text"
        value={credentials.link}
        required
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, link: event.target.value });
        }}
      />
      <TextInput
        label="Interface"
        type="text"
        required
        value={credentials.interface}
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, interface: event.target.value });
        }}
      />
      <TextInput
        label="Latence"
        type="text"
        required
        value={credentials.latence}
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, latence: event.target.value });
        }}
      />
      <TextInput
        label="Capacité"
        type="text"
        required
        sx={{ padding: "1rem" }}
        value={credentials.capacité}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, capacité: event.target.value });
        }}
      />
      <TextInput
        type="number"
        sx={{ padding: "1rem" }}
        label="Quantité"
        value={credentials.quantité}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, quantité: event.target.value });
        }}
      />
      <Textarea
        rows={15}
        label="Description"
        type="text"
        required
        value={credentials.description}
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, description: event.target.value });
        }}
      />
      <Button color="green" type="submit" sx={{ margin: "1rem" }}>
        Ajouter
      </Button>
    </form>
  );
};

export default RAMForm;
