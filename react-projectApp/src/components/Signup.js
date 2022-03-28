import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, FormHelperText } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { NavLink,useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from './Firebase'
import { collection, addDoc } from 'firebase/firestore'



const Signup = () => {

    let navigate=useNavigate();
    const paperStyle = { padding: "30px 20px", width: 340, margin: "80px auto",marginTop: "180px" }
    const avatarStyle = { backgroundColor: '#1c4c74' }
    const marginTop = { marginTop: 20 }
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    };

    const onSubmit = async (values) => {
        try {
            await addDoc(collection(db, 'users'), values);
            alert("You Have Registered successfully");
            navigate("/");

        } catch (err) {
            alert(err)
        }

    }
 


    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "[a-z]!=min").required("Required"),
        email: Yup.string().email("Not Valid Email!").required("Required"),
        gender: Yup.string().oneOf(['female', 'male', 'other'], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter 10-digit Number").required("Required"),
        password: Yup.string().min(8, "Password length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password Do Not Match!").required("Required"),
        termsAndConditions: Yup.string().oneOf(['true'], "Accept Terms And Conditions")
    })
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2>Sign Up</h2>
                    <Typography variant='caption'>Please fill the details to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name='name' label='Name' placeholder='Enter Your Name'
                                helperText={<ErrorMessage name='name' />} />
                            <Field as={TextField} fullWidth name='email' label='Email' placeholder='Enter Your Email'
                                helperText={<ErrorMessage name='email' />} />
                            <FormControl style={marginTop}>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <Field as={RadioGroup} name="gender" aria-labelledby="demo-radio-buttons-group-label"
                                    style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name='gender' /></FormHelperText>
                            <Field as={TextField} fullWidth name='phoneNumber' label='Phone Number' placeholder='Enter Your 10-digit Number'
                                helperText={<ErrorMessage name='phoneNumber' />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder='Create Your Password'
                                helperText={<ErrorMessage name='password' />} />
                            <Field as={TextField} fullWidth name='confirmPassword' type="password"
                                label='Confirm Password' placeholder='Confirm Your Password'
                                helperText={<ErrorMessage name='confirmPassword' />} />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}

                                        name="termsAndConditions"
                                        color="secondary"
                                    />
                                }
                                label=" I accept the terms and conditions" />
                            <FormHelperText><ErrorMessage name='termsAndConditions' /></FormHelperText>

                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary' fullWidth >{props.isSubmitting ? "Loading":"Sign Up"}</Button>
                            <Typography style={{ paddingTop: 20, marginLeft: 110 }}> Back to {" "}
                                <NavLink to='/' >
                                    Sign In
                                </NavLink>
                            </Typography>

                        </Form>
                    )}
                </Formik>


            </Paper>
        </Grid>
    )

}


export default Signup;