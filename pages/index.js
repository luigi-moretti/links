import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core';
import Head from 'next/head';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "rgb(63,251,152)",
    background: "radial-gradient(circle, rgba(63,251,152,1) 0%, rgba(19,75,80,1) 80%)", 
    //background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
    height: "100vh"
  },
  fullHeight:{
    height:"100%"
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  

}));

export default function Home() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Head>
        <title>Links</title>
      </Head>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.fullHeight}
      >
        <Grid item container direction="column" spacing={2} xs={10} sm={4}>
            <Grid item>
              <img className={classes.image} alt="perfil" src="/vercel.svg" />
            </Grid>
            <Grid>
              <Typography align="center">
                Luigi Moretti
              </Typography>
            </Grid>
            <Grid item xs>
              <Button variant="contained" color="primary" fullWidth>
                Linkedin
              </Button>
            </Grid>
            <Grid item xs>
              <Button variant="contained" color="primary" fullWidth>
                Linkedin
              </Button>
            </Grid>
            <Grid item xs>
              <Button variant="contained" color="primary" fullWidth>
                Linkedin
              </Button>
            </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
