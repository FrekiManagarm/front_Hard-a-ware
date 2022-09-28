import usePersonnalInformationsStyles from "./PersonnalInformations.style"


const PersonnalInformations = () => {

  const { classes } = usePersonnalInformationsStyles();

  return (
    <div className={classes.wrapper}>
        <h3>Mes Infos Personnelles</h3>
    </div>
  )
}

export default PersonnalInformations