import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from './Dialog';

const theme = createTheme();

export default function Login() {

    const [usernameValid, setUsernameValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [dialog, setDialog] = useState(null);

    const loginUser = async (formData) => {
        if (!usernameValid || !passwordValid) {
            return;
        }

        if (formData.get('username') === 'foo' && formData.get('password') === 'bar') {
            // navigate.push('/home');
        }
        else {
            setDialog(<Dialog title={"Incorrect username or password"} msg={""}></Dialog>);
        }
    }

    const usernameHandle = (event) => {
      setUsernameValid(event.currentTarget.value.match(/^[a-z0-9]+$/i) ? true : false);
    };

    const passwordHandle = (event) => {
      setPasswordValid(event.currentTarget.value.match(/^[a-z0-9]+$/i) ? true : false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDialog(null);
        loginUser(new FormData(event.currentTarget));        
    };

    return (
        <>
            {dialog}
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <h3>Login</h3>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    helperText={"Only characters and numbers"}
                                    onChange={usernameHandle}
                                    error={!usernameValid}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    id="password"
                                    type="password"
                                    aria-label="empty password"
                                    helperText={"only numbers, alphabets"}
                                    onChange={passwordHandle}
                                    error={!passwordValid}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                >
                                    Login
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}