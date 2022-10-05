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
import { Formik } from 'formik';
import * as Yup from 'yup';
import useLoginStyles from './Login.style'
import { useRouter } from 'next/router';

const Login = () => {

  const { classes } = useLoginStyles();
  const { signIn } = useContext(AuthContext)
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event;
    setInput({ ...input, [name]: value })
  }

  console.log(input)


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
        <form onChange={handleInputChange}>
          <TextInput radius={10} label="Email" name="email" placeholder="john@doe.com" required />
          <PasswordInput radius={10} name="password" label="Password" placeholder="Your password" required mt="md" />
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
      </Paper>
    </Container>
    </div>
  )
}

export default Login