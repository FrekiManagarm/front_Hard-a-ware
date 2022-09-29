import React from 'react'
import useHomeDashboardStyles from './HomeDashboard.style'

const HomeDashboard = () => {

  const { classes } = useHomeDashboardStyles();

  return (
    <div>
        <h2 className={classes.wrapper} >Mon tableau de bord</h2>
    </div>
  )
}

export default HomeDashboard