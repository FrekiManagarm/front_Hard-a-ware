import { BackgroundImage, Paper, Title } from '@mantine/core'
import useGlobalStatsStyles from './GlobalStats.style'

const GlobalStats = ({ height, radius }) => {

    const { classes } = useGlobalStatsStyles();

  return (
    <Paper
        radius={radius}
        className={classes.wrapper}
        sx={{
            height: height,
        }}
    >
        <Title>Stats Global</Title>
    </Paper>
  )
}

export default GlobalStats