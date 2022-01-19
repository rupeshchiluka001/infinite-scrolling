import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactComponent as LoginLogo } from './assests/Computer-login.svg';

function HomeScreen() {
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

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={< HomeScreen />} />
        <Route path="/home" element={< Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
