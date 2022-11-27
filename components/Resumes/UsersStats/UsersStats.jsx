import { Paper, Title } from '@mantine/core'
import useUsersStats from './UsersStats.style'

const UsersStats = ({ height, radius }) => {

    const {classes} = useUsersStats();

  return (
    <Paper
        radius={radius}
        sx={{
            height: height,
            margin: "0 1rem 1rem 1rem",
            background: "rgba(222, 222, 222, 0.7)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        }}
    >
        <Title>UsersStats</Title>
    </Paper>
  )
}

export default UsersStats