import { Paper, Title } from "@mantine/core";
import useComponentsResumeStyles from "./ComponentsResume.style";

const ComponentsResume = ({height, radius}) => {
  const { classes } = useComponentsResumeStyles();

  return (
    <Paper radius={radius} 
        className={classes.wrapper}
        sx={{ 
            height: height,
        }}
    >
      <Title>Derniers composants</Title>
    </Paper>
  );
};

export default ComponentsResume;
