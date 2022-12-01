import { Paper, Title } from '@mantine/core'
import React from 'react'
import useConfigsResumeStyles from './ConfigsResume.style'

const ConfigsResume = ({height, radius}) => {

    const { classes } = useConfigsResumeStyles();

  return (
    <Paper
        radius={radius}
        className={classes.wrapper}
        sx={{
            height: height,
        }}
    >
        <Title>Mes configurations</Title>
    </Paper>
  )
}

export default ConfigsResume