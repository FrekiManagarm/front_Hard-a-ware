import useLoaderStyles from './Loader.style.js'

const Loader = () => {

    const { classes, cx } = useLoaderStyles();

  return (
    <div className={classes.loading}>
        <span className={cx(classes.span, classes.span1)}></span>
        <span className={cx(classes.span, classes.span2)}></span>
        <span className={cx(classes.span, classes.span3)}></span>
        <span className={cx(classes.span, classes.span4)}></span>
        <span className={cx(classes.span, classes.span5)}></span>
    </div>
  )
}

export default Loader