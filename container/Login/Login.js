import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import useLoginStyles from './Login.style'
import { useRouter } from 'next/router';

const Login = () => {

  const initialCredentialsState = {
    email: "",
    password: ""
  }

  const { classes } = useLoginStyles();
  const { signIn } = useContext(AuthContext)
  const router = useRouter();
  const [credentials, setCredentials] = useState(initialCredentialsState);

  const handleInputChange = (event) => {
    event.preventDefault()
    const { name, value } = event;
    setCredentials({ ...credentials, [name]: value })
  }

  const initialValues = {
    email: credentials.email ?? "",
    password: credentials.password ?? ""
  }

  const LegalSchema = Yup.object().shape({
    email: Yup.string()
      .email('Saisissez un email valide')
      .required("Votre email est requis"),
    password: Yup.string()
      .required('Votre mot de passe est requis pour continuer')
  })

  console.log({ initialValues, credentials, initialCredentialsState })


  return (
    <div className={classes.wrapper}>
    <Container style={{
      paddingTop: "2rem"
    }} size={450}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Ravi de vous revoir !
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}> 
        Vous n'avez pas encore de compte ?{' '}
        <Anchor component='a' href="/registration" size="sm" onClick={(event) => event.preventDefault()}>
          Créer un compte
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Formik
          initialValues={initialValues}
          validationSchema={LegalSchema}
          onSubmit={async () => signIn(credentials, {})}
        >
          {({ errors, touched, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit} >
              <TextInput name="email" type="text" placeholder="john@doe.com" />
              <PasswordInput name="password" type="password" placeholder="Your password" />
              <Group position="apart" mt="md">
                <Checkbox label="Se souvenir de moi" />
                <Anchor component='a' onClick={(event) => event.preventDefault()} href="#" size="sm">
                  Mot de passe oublié ?
                </Anchor>
              </Group>
              <Button onClick={() => signIn({ email: "mathchambaud2000@gmail.com", password: "M@thieu2020!" }, {})} fullWidth radius={10} mt="xl">
                Se connecter
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Container>
    </div>
  )
}

export default Login