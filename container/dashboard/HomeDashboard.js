import { Container, SimpleGrid, Stack, Title, Skeleton } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
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
  const { height } = useViewportSize();
  const BASE_HEIGHT = height / 1.1
  const subHeight = (children, spacing) => BASE_HEIGHT / children - spacing * ((children - 1) / children);
  const getChildComponents = (height) => <ComponentsResume radius="lg" height={height} />;
  const getChildConfigs = (height) => <ConfigsResume radius="lg" height={height} />;
  const getChildGlobalStats = (height) => <GlobalStats radius="lg" height={height} />;
  const getChildUsersStats = (height) => <UsersStats radius="lg" height={height} />;
  const getChildAccountSettings = (height) => <AccountSettingsResume radius="lg" height={height} />;


  return (
    <div className={classes.wrapper}>
        <Container my="md">
          <SimpleGrid cols={3} breakpoints={[
            {maxWidth: 'xs', cols: 1}
          ]}>
            <Stack>
              {getChildConfigs(subHeight(1, theme.spacing.lg))}
            </Stack>
            <Stack>
              {getChildGlobalStats(subHeight(2, theme.spacing.lg))}
              {getChildComponents(subHeight(2, theme.spacing.lg))}
            </Stack>
            <Stack>
              {getChildAccountSettings(subHeight(2, theme.spacing.lg))}
              {getChildUsersStats(subHeight(2, theme.spacing.lg))}
            </Stack>
          </SimpleGrid>
        </Container>
    </div>
  )
}

export default HomeDashboard;