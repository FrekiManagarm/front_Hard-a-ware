import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor
} from '@mantine/core'
import useLoginStyles from './Login.style'

const Login = () => {

  const { classes } = useLoginStyles();

  return (
    <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} mt="md" mb={50}>
          <Title order={2} className={classes.title} align="center" mt="md" mb={50} >
            Bon retour sur le site du HardShop ! Référence numéro 1 en Hardware
          </Title>

          <TextInput label="Email" placeholder='john.doe@gmail.com' size='md'/>
          <PasswordInput label='Mot de passe' placeholder='Votre mot de passe' mt="md" size='md'/>
          <Checkbox label="Se souvenir de moi" mt="xl" size='md' />
          <Button fullWidth mt='xl' size='md' className={classes.button}>
            Connexion
          </Button>
        </Paper>
    </div>
  )
}

export default Login