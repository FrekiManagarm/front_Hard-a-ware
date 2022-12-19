import { Paper, Title } from '@mantine/core'
import useAccountSettingsResumeStyles from './AccountSettingsResume.style'

const AccountSettingsResume = ({ height, radius, width }) => {

  const { classes } = useAccountSettingsResumeStyles();

  return (
    <Paper
      radius={radius}
      className={classes.wrapper}
      sx={{
        height: height,
        width: width
      }}
    >
        <Title>Mes infos personnelles</Title>
    </Paper>
  )
}

export default AccountSettingsResume