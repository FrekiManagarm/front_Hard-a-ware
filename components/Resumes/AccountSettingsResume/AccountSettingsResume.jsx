import { Paper, Title } from '@mantine/core'
import useAccountSettingsResumeStyles from './AccountSettingsResume.style'

const AccountSettingsResume = ({ height, radius }) => {

  const { classes } = useAccountSettingsResumeStyles();

  return (
    <Paper
      radius={radius}
      sx={{
        height: height,
        margin: "0 1rem 0 0",
        background: "rgba(222, 222, 222, 0.7)",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
        <Title>AccountSettings Resume</Title>
    </Paper>
  )
}

export default AccountSettingsResume