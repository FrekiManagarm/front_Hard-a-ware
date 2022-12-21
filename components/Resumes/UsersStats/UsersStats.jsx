import { Paper, Title } from '@mantine/core'
import useUsersStats from './UsersStats.style'

const UsersStats = ({ height, radius, width }) => {

    const {classes} = useUsersStats();

  return (
    <Paper
        radius={radius}
        className={classes.wrapper}
        sx={{
            height: height,
            width: width
        }}
    >
        <Title>UsersStats</Title>
    </Paper>
  )
}

export default UsersStats