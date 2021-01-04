import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
            <Avatar alt="perfil" src="/perfil.webp" />
          </Grid>
          <Grid item>
            <Typography align="center">
              Luigi Moretti
              </Typography>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" href="https://www.linkedin.com/in/luigimoretti" target="_blank" fullWidth>
              Linkedin
              </Button>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" href="http://instagram.com/luigi.moretti" target="_blank" fullWidth>
              Instagram
              </Button>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" href="https://www.facebook.com/luigivinicius.moretti" target="_blank" fullWidth>
              Facebook
              </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
