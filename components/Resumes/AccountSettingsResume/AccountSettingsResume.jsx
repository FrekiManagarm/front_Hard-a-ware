import { Paper, Title } from '@mantine/core'
import useAccountSettingsResumeStyles from './AccountSettingsResume.style'

const AccountSettingsResume = ({ height, radius }) => {

  const { classes } = useAccountSettingsResumeStyles();

  return (
    <Paper
      radius={radius}
      className={classes.wrapper}
      sx={{
        height: height,
      }}
    >
        <Title>AccountSettings Resume</Title>
    </Paper>
  )
}

export default AccountSettingsResume