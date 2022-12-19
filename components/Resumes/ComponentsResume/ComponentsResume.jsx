import { Paper, Title } from "@mantine/core";
import useComponentsResumeStyles from "./ComponentsResume.style";

const ComponentsResume = ({height, radius, width}) => {
  const { classes } = useComponentsResumeStyles();

  return (
    <Paper radius={radius} 
        className={classes.wrapper}
        sx={{ 
            height: height,
            width: width
        }}
    >
      <Title>Derniers composants</Title>
    </Paper>
  );
};

export default ComponentsResume;
