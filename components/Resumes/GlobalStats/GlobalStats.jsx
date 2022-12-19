import { BackgroundImage, Paper, Title } from '@mantine/core'
import useGlobalStatsStyles from './GlobalStats.style'

const GlobalStats = ({ height, radius, width }) => {

    const { classes } = useGlobalStatsStyles();

  return (
    <Paper
        radius={radius}
        className={classes.wrapper}
        sx={{
            height: height,
            width: width
        }}
    >
        <Title>Stats Global</Title>
    </Paper>
  )
}

export default GlobalStats