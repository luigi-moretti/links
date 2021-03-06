import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Cria a instância do tema.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#867d7f',
    },
    secondary: {
      main: '#F3EAE3',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#c8b684',
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
                },
                '.avatarLarge':{
                    width: '100px',
                    height: '100px',
                }
            }
        },
        MuiAvatar:{
                root:{
                    margin: 'auto',
                    display: 'block',
                    width: '100px',
                    height: '100px',
                }
        }
  },
  
});

export default theme;