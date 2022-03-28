import React from 'react';
import { Grid, Paper, Avatar, TextField, FormControlLabel, Button, Typography, Link } from "@material-ui/core";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from './Firebase'
import { collection, query, where, getDocs } from "firebase/firestore";



const Login = () => {

    const paperStyle = { padding: 20, height: "55vh", width: 340, margin: "80px auto",marginTop: "180px" }
    const avatarStyle = { backgroundColor: "#1c4c74" }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    let navigate = useNavigate();
    const onSubmit = async (values) => {
        const usersRef = collection(db, "users");
        let responseData = null
        // Create a query against the collection.
        const q = query(usersRef, where("email", "==", values.username));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            responseData = doc.data()
        });

        if (!responseData) {
            //redirect to sign up
            alert("user does not exist Please SignUp!");
            navigate("/signup");
        }
        else if (responseData.email === values.username && responseData.password === values.password) {
            localStorage.setItem("email", responseData.email);
            localStorage.setItem("password", responseData.password);
            navigate('/home');

        }

        else {
            alert("password is not correct!")
        }

    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Please Enter Valid Email").required("Required"),
        password: Yup.string().required("Required"),
    })
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><DashboardOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name='username' placeholder='Enter your username..'
                                fullWidth required helperText={<ErrorMessage name='username' />} />
                            <Field as={TextField} label='Password' name='password' placeholder='Enter your password..'
                                type='password' fullWidth required helperText={<ErrorMessage name='password' />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                            <Button type='submit' color='primary' style={btnStyle} fullWidth variant='contained'
                                disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign In"}</Button>
                        </Form>
                    )}
                </Formik>
                <Typography align='center'>
                    <Link href='#' >
                        Forgot Password ?
                    </Link>
                </Typography >
                <Typography style={{ marginLeft: 40 }}> Do you have an account ? {" "}
                    <NavLink to='/signup' >
                        Sign Up
                    </NavLink>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login;