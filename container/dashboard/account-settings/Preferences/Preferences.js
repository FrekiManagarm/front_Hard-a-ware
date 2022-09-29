import React from 'react'
import usePreferencesStyles from './Preferences.style'

const Preferences = () => {

  const { classes } = usePreferencesStyles();

  return (
    <div className={classes.wrapper}>
        <h2>Mes Preferences</h2>
    </div>
  )
}

export default Preferences