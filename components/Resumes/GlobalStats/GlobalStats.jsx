import { BackgroundImage, Paper, Title } from '@mantine/core'
import useGlobalStatsStyles from './GlobalStats.style'

const GlobalStats = ({ height, radius }) => {

    const { classes } = useGlobalStatsStyles();

  return (
    <Paper
        radius={radius}
        sx={{
            height: height,
            width: "20vw",
            background: "rgba(222, 222, 222, 0.7)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        }}
    >
        <Title>GlobalStats</Title>
    </Paper>
  )
}

export default GlobalStats