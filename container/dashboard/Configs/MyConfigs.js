import { SegmentedControl } from '@mantine/core';
import React, { useState } from 'react'
import useMyConfigsStyles from './MyConfigs.style'

const MyConfigs = () => {

  const { classes } = useMyConfigsStyles();

  return (
    <div className={classes.wrapper}>
        <h2>Mes Configurations</h2>
    </div>
  )
}

export default MyConfigs