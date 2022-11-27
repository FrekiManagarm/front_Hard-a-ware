import { Paper, Title } from '@mantine/core'
import React from 'react'
import useConfigsResumeStyles from './ConfigsResume.style'

const ConfigsResume = ({height, radius}) => {

    const { classes } = useConfigsResumeStyles();

  return (
    <Paper
        radius={radius}
        sx={{
            height: height,
            margin: "0 1rem 1rem 0",
            background: "rgba(222, 222, 222, 0.7)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        }}
    >
        <Title>Configs Resume</Title>
    </Paper>
  )
}

export default ConfigsResume