import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Login from './components/Login';
import { ReactComponent as LoginLogo } from './assests/Computer-login.svg';

function App() {
  return (
    <>
    <Box
      m={2}
      sx={{
        height: '100%'
      }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center">
          <Grid item md={6}>
            <LoginLogo style={{width: '90%'}} />
          </Grid>
          <Grid item md={6}>
            <Login />
          </Grid>
      </Grid>
    </Box>
    </>
  );
}

export default App;
