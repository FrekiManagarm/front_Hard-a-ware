import { Container, MediaQuery, ScrollArea, SimpleGrid, Stack } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React from 'react'
import AccountSettingsResume from '../../components/Resumes/AccountSettingsResume/AccountSettingsResume';
import ComponentsResume from '../../components/Resumes/ComponentsResume/ComponentsResume';
import ConfigsResume from '../../components/Resumes/ConfigsResume/ConfigsResume';
import GlobalStats from '../../components/Resumes/GlobalStats/GlobalStats';
import UsersStats from '../../components/Resumes/UsersStats/UsersStats';
import useHomeDashboardStyles from './HomeDashboard.style'

const HomeDashboard = ({ user }) => {

  const { classes, theme } = useHomeDashboardStyles();
  const { height } = useViewportSize();
  const BASE_HEIGHT = height / 1.1
  const subHeight = (children, spacing) => BASE_HEIGHT / children - spacing * ((children - 1) / children);
  // const subWidth = (children, spacing) => BASE_WIDTH / children - spacing * ((children - 1) / children);
  const getChildComponents = (height, width) => <ComponentsResume radius="lg" height={height} width={width} />;
  const getChildConfigs = (height, width) => <ConfigsResume radius="lg" height={height} width={width} />;
  const getChildGlobalStats = (height, width) => <GlobalStats radius="lg" height={height} width={width} />;
  const getChildUsersStats = (height, width) => <UsersStats radius="lg" height={height} width={width} />;
  const getChildAccountSettings = (height, width) => <AccountSettingsResume radius="lg" height={height} width={width} />;


  return (
    <Container my="xl" className={classes.wrapper}>
      <SimpleGrid className={classes.grid} cols={3} breakpoints={[
        { maxWidth: 'xs', cols: 1 },
        { maxWidth: 'lg', cols: 2 },
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 2 },
        { maxWidth: 'xl', cols: 3 }
      ]}>
        <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
          {user?.is_Admin ? <Stack>
            {getChildGlobalStats(subHeight(1, theme.spacing.lg))}
          </Stack> : null}
        </MediaQuery>
        <MediaQuery>
          <Stack>
            {getChildConfigs(subHeight(2, theme.spacing.lg))}
            {getChildComponents(subHeight(2, theme.spacing.lg))}
          </Stack>
        </MediaQuery>
        <MediaQuery>
          <Stack>
            {getChildAccountSettings(subHeight(2, theme.spacing.lg))}
            {getChildUsersStats(subHeight(2, theme.spacing.lg))}
          </Stack>
        </MediaQuery>
      </SimpleGrid>
    </Container>
  )
}

export default HomeDashboard;