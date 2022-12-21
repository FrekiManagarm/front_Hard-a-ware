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
  Button
} from '@mantine/core';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useRegistrationStyles from './Registration.style';
import { useRouter } from 'next/router';

const Registration = () => {

  const { classes } = useRegistrationStyles();
  const { signUp } = useContext(AuthContext);
  const router = useRouter();
  const { locale } = router;
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  return (
    <div className={classes.wrapper}>
        <Container style={{ 
          paddingTop: "10rem"
        }} size={450}>
          <Title
            align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
          >Bienvenue parmis nous !</Title>
          <Text color="dimmed" size='sm' align="center" mt={5}> 
            Vous avez déjà un compte ? {' '}
            <Anchor component='a' href='/login' size="sm"> 
              Se connecter
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form>
              <TextInput name="firstname" type="text" label="Prénom" required placeholder='John' onChange={(event) => {
                event.preventDefault()
                setCredentials({ ...credentials, firstname: event.target.value })
              }} />
              <TextInput name="lastname" type="text" label="Nom" required placeholder='Doe'
                onChange={(event) => {
                  event.preventDefault()
                  setCredentials({ ...credentials, lastname: event.target.value })
                }} 
              />
              <TextInput name="email" type="email" label="Email" required placeholder='john.doe@appleseed.com' 
                onChange={(event) => {
                  event.preventDefault()
                  setCredentials({ ...credentials, email: event.target.value })
                }}
              />
              <PasswordInput name="password" type="password" label="Mot de passe" required placeholder='johnDoe123' 
                onChange={(event) => {
                  event.preventDefault()
                  setCredentials({ ...credentials, password: event.target.value })
                }}
              />
              <PasswordInput name="confirm_password" type="password" label="Confirmation du mot de passe" required placeholder='johnDoe123' 
                onChange={(event) => {
                  event.preventDefault()
                  setCredentials({ ...credentials, confirm_password: event.target.value })
                }}
              />
              <Group position="apart" mt="md">
                <Checkbox label="Se souvenir de moi" />
                <Anchor component='a' onClick={(event) => event.preventDefault()} href="#" size="sm">
                  Mot de passe oublié ?
                </Anchor>
              </Group>
              <Button onClick={() => signUp(credentials, '/', locale)} fullWidth radius={10} mt="xl">
                Créer mon compte
              </Button>
            </form>
          </Paper>
        </Container>
    </div>
  )
}

export default Registration