import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from "formik";
import useAuth from '../../../hooks/useAuth';


const defaultTheme = createTheme();

export default function SignUp() {
  const { register } = useAuth();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{bgcolor:'white', opacity: '0.8', borderRadius: '10px'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>

          <Formik
                initialValues={{
                name: "",
                email: "",
               }}
               validate={(values) => {
                const errors ={};
                const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                if(!values.email) {
                    errors.email = "Email requerido";

                }else if (!regexpEmail.test(values.email)) {
                    errors.email = "Email invalido";
                }

                if(!values.name) {
                    errors.name = "Nombre requerido";
                }

                if(!values.password) {
                    errors.password = "Contraseña requerida";
                }

                return errors;
               }}
                onSubmit = {(values) => {
                register(values);
               }}
           >
           {
                ({
                    values, errors, touched, handleChange, handleBlur, handleSubmit
                }) => (
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                      margin="normal"
                      fullWidth
                      name="name"
                      label="Nombre"
                      type="text"
                      id="name"
                      autoFocus
                      value= {values.name}
                      error={errors.name && touched.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText= {errors.name && touched.name && errors.name}
                    />
              </Grid>
              <Grid item xs={12}>
              <TextField
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      value= {values.email}
                      error={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText= {errors.email && touched.email && errors.email}
                    />
              </Grid>
              <Grid item xs={12}>
              <TextField
                      margin="normal"
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      value= {values.password}
                      error={errors.password && touched.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText= {errors.password && touched.password && errors.password}
                    />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
                )
            }
          </Formik>
        </Box>
      </Container>
      <br/>
      <br/>
    </ThemeProvider>
  );
}