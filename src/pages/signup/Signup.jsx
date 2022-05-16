import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MaterialLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Formik } from "formik";
import Axios from "axios";
import { API_URL } from "../../config/url";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <MaterialLink color="inherit" href="https://mui.com/">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      // validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
        Axios.post(`${API_URL}/auth/signup`, values)
          .then((response) => {
            console.log(response);
            toast.success("You are Succesfully Registered");
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              toast.error(error.response.data.message);
            } else {
              toast.error("Cannot Connect To Server");
            }
          });
      }}
    >
      {({ handleSubmit, handleChange, setFieldValue }) => (
        <Form>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={(e) => {
                          setFieldValue("firstName", e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" onChange={handleChange} />
                    </Grid>
                  </Grid>
                  <Button onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to={"/login"}>
                        <MaterialLink variant="body2">Already have an account? Sign in</MaterialLink>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </Form>
      )}
    </Formik>
  );
}
