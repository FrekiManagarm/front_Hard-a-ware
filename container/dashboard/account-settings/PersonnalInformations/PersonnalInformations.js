import usePersonnalInformationsStyles from "./PersonnalInformations.style"


const PersonnalInformations = () => {

  const { classes } = usePersonnalInformationsStyles();

  return (
    <div className={classes.wrapper}>
        <h2>Mes Infos Personnelles</h2>
    </div>
  )
}

export default PersonnalInformations