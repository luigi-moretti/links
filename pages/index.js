import { Grid, Button, Typography } from '@material-ui/core';

export default function Home() {
  
  return (
    <div className="root">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="fullHeight"
      >
        <Grid item container direction="column" spacing={2} xs={10} sm={4}>
            <Grid item>
              <img alt="perfil" src="/vercel.svg" />
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
