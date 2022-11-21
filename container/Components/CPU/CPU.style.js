import { createStyles } from "@mantine/core";

const useCPUStyles = createStyles((theme) => ({
   wrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "5rem 4rem",
      alignItems: "center",

      [theme.fn.smallerThan('md')]: {
         padding: "5rem 2rem"
      },

      [theme.fn.smallerThan('sm')]: {
         padding: "4rem 2rem"
      }
   },

   cardSection: {
      paddingTop: "4rem",
   }
}))

export default useCPUStyles;