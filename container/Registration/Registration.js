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
} from '@mantine/core'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useRegistrationStyles from './Registration.style';
import { useRouter } from 'next/router';

const Registration = () => {

  const { classes } = useRegistrationStyles();
  const { signUp } = useContext(AuthContext);
  const router = useRouter();
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
          paddingTop: "2rem"
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
              <TextInput label="Prénom" required />
              <TextInput label="" />
              <TextInput />
              <PasswordInput required />
              <PasswordInput />
            </form>
          </Paper>
        </Container>
    </div>
  )
}

export default Registration