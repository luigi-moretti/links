import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Cria a instância do tema.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00694b',
    },
    secondary: {
      main: '#69001e',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e0f2ed',
    },
  },
    overrides:{
        MuiCssBaseline:{
            '@global':{
                '.root': {
                  flexGrow: 1,
                  height: "100vh"
                },
                '.fullHeight':{
                  height:"100%"
                },
                img: {
                  margin: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }
            }
        }
  }
});

export default theme;