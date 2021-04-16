import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


export default function Home() {

  const links = [
    { label: 'Linkedin', url: 'https://www.linkedin.com/in/luigimoretti' },
    { label: 'Instagram', url: 'http://instagram.com/luigi.moretti' },
    { label: 'Facebook', url: 'https://www.facebook.com/luigivinicius.moretti' },
    { label: 'Classificação de Robson', url: 'https://www.classificacaorobson.com/' },
  ]

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
          {
            links.map((link, indice) => {
              return (
                <Grid item xs key={indice}>
                  <Button variant="contained" color="primary" href={link.url} target="_blank" fullWidth>
                    {link.label}
                  </Button>
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </div>
  )
}
