import React from 'react'
import useMyConfigsStyles from './MyConfigs.style'

const MyConfigs = () => {

  const { classes } = useMyConfigsStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Mes configurations</h3>
    </div>
  )
}

export default MyConfigs