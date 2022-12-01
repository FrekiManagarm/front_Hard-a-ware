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
        <Title>GlobalStats</Title>
    </Paper>
  )
}

export default GlobalStats