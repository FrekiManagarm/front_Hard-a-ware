import React from 'react'
import usePreferencesStyles from './Preferences.style'

const Preferences = () => {

  const { classes } = usePreferencesStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Mes Preferences</h3>
    </div>
  )
}

export default Preferences