import { Paper, Title } from "@mantine/core";
import useComponentsResumeStyles from "./ComponentsResume.style";

const ComponentsResume = ({height, radius}) => {
  const { classes } = useComponentsResumeStyles();

  return (
    <Paper radius={radius} 
        className={classes.wrapper}
        sx={{ 
            height: height,
            width: "inherit",
            margin: "0 1rem 0 1rem",
            background: "rgba(222, 222, 222, 0.7)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
        }}
    >
      <Title>Components Resume</Title>
    </Paper>
  );
};

export default ComponentsResume;
