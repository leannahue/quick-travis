import React from "react";
import "rbx/index.css";
import { makeStyles } from "@material-ui/core/styles";
import MakeBidDialog from "./MakeBidDialog";
import "firebase/storage";
import { Grid, Typography, Slide, Dialog, AppBar, Toolbar, IconButton, DialogContent, DialogActions } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const ProductDescriptionCard = props => {
  const classes = useStyles();
  
  if (props.product) {
    return (
      <Dialog fullScreen open={props.open} onClose={() => { props.setOpen(false) }} TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => { props.setOpen(false) }} aria-label="close">
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Thrift Shift
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <DialogContent>
          <Grid
            justify="center"
            direction="column"
            alignItems="center"
            container
            style={{ padding: "15px 10px 15px 10px" }}
            spacing={2}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} container>
                <Grid xs item>
                  <Typography variant="h5">
                    {props.product.name}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} container>
                <img className={classes.img} alt={props.product.name} src={props.imageURL} />
              </Grid>
              <Grid item xs={12} sm={12} container>
                <Grid item xs container>
                  <Typography gutterBottom variant="h5">
                    Starting Price
              </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">$ {props.product.price}</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} container>
                <Typography gutterBottom variant="body1">
                  {props.product.description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <MakeBidDialog user={props.user} userRole={props.userRole} productId={props.productId} />
        </DialogActions>
      </Dialog>
    );
  } else {
    return null;
  }
}

export default ProductDescriptionCard;
