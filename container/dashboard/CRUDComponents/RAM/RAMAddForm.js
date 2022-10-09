import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const RAMAddForm = () => {
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

  const LegalSchema = Yup.object().shape({
    capacité: Yup.string().required("Ce champ est requis pour continuer"),
    description: Yup.string().required("Ce champ est requis pour continuer"),
    image: Yup.string().required("Ce champ est requis pour continuer"),
    interface: Yup.string().required("Ce champ est requis pour continuer"),
    latence: Yup.string().required("Ce champ est requis pour continuer"),
    link: Yup.string().required("Ce champ est requis pour continuer"),
    nom: Yup.string().required("Ce champ est requis pour continuer"),
    quantité: Yup.number().required("Ce champ est requis pour continuer"),
  });

  return (
    <Formik
      initialValues={credentials}
      validationSchema={LegalSchema}
      onSubmit={async (values) => {
        console.log(values, "values on submit");

        const endpoint = "/api/RAM";

        const response = await PostAPIData(endpoint, values).then(
          (response) => {
            console.log(response, "response api");
          },
        );
      }}
    >
      <TextInput
        label="Nom"
        type="text"
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
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, image: event.target.value });
        }}
      />
      <TextInput
        label="Link"
        type="text"
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
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, capacité: event.target.value });
        }}
      />
      <TextInput
        type="number"
        sx={{ padding: "1rem" }}
        label="Quantité"
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
        sx={{ padding: "1rem" }}
        onChange={(event) => {
          event.preventDefault();
          setCredentials({ ...credentials, description: event.target.value });
        }}
      />
      <Button color="green" type="submit" sx={{ margin: "1rem" }}>
        Ajouter
      </Button>
    </Formik>
  );
};

export default RAMAddForm;
