import { Container, SimpleGrid, Stack, Title, Skeleton } from '@mantine/core';
import { getDisplayName } from 'next/dist/shared/lib/utils';
import React from 'react'
import AccountSettingsResume from '../../components/Resumes/AccountSettingsResume/AccountSettingsResume';
import ComponentsResume from '../../components/Resumes/ComponentsResume/ComponentsResume';
import ConfigsResume from '../../components/Resumes/ConfigsResume/ConfigsResume';
import GlobalStats from '../../components/Resumes/GlobalStats/GlobalStats';
import UsersStats from '../../components/Resumes/UsersStats/UsersStats';
import useHomeDashboardStyles from './HomeDashboard.style'

const HomeDashboard = ({ user }) => {

  const { classes, theme } = useHomeDashboardStyles();


  return (
    <div className={classes.wrapper}>
        <div className={classes.column1}>
          { user?.is_Admin ? <GlobalStats radius="lg" height="100%" /> : null}
        </div>
        <div className={classes.column2}>
          <UsersStats radius="lg" height="40vh" />
          <ComponentsResume radius="lg" height="40vh" />
        </div>
        <div className={classes.column3}>
          <ConfigsResume radius="lg" height="40vh" />
          <AccountSettingsResume radius="lg" height="40vh" />
        </div>
    </div>
  )
}

export default HomeDashboard