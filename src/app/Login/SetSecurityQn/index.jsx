import LoginLogo from '../../assets/loginBg.svg';
import Logo from '../../assets/ACGLogoLogin.svg';
import { Paper, Box } from '@material-ui/core';
import '../index.scss';
import TextInput from '../TextInput/index';
import Label from '../Label/index';
import Button from '../Button/index';
import { Typography, IconButton } from '@material-ui/core';
import VisibilityIcon from '../../assets/visibilityIcon.svg';
import VisibilityOffIcon from '../../assets/visibilityOffIcon.svg';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { LOGIN_YUPSCHEMA } from '../Templates/SimpleLogin/schema';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const SetSecurityQn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disableLogin, setDisableLogin] = useState(true);
    const [validationSchema, setValidationSchema] = useState({});
    const history=useHistory()
    const handleClick = () => {
        setShowPassword((prev) => !prev);
    };
    const [initialValues] = useState({
        emailId: '',
        password: ''
    });

    useEffect(() => {
        setValidationSchema(Yup.object().shape(LOGIN_YUPSCHEMA));
    }, []);

    const handleSubmit = async (values) => {
        //api call to check if its first time login
        history.push('/setSecurityQn')
    };

    return (
        <div
            className="acgLoginPage"
            style={{
                backgroundImage: `linear-gradient( rgba(28, 31, 47,0.6), rgba(28, 31, 47,0.7)), url(${LoginLogo})`
            }}
        >
            <div className="loginForm">
                <Box className="loginLogo">
                    <img src={Logo} alt="logo" />
                </Box>

                <Paper elevation={2} className="loginPaper">
                    <div className="loginFormHeader">
                        <Typography className="welcomeText">Welcome !</Typography>
                        <Typography className="loginText">Enter your login details</Typography>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            handleSubmit(values);
                        }}
                       validateOnBlur={false}
                    >
                        {(formikprops) => {
                            const { values,  handleChange, handleBlur, errors, touched } =
                                formikprops;
                            return (
                                <Form>
                                    <Label label={'Email ID'} />
                                    <TextInput
                                        variant="outlined"
                                        maxLength={30}
                                        autoFocus={true}
                                        fullWidth={true}
                                        type="text"
                                        name="emailId"
                                        value={values.emailId}
                                        autoComplete={'off'}
                                        formInput={'textBoxDiv'}
                                        onChange={(e) => {
                                            setDisableLogin(false);
                                            handleChange(e);
                                        }}
                                        onBlur={handleBlur}
                                        placeholder={'Enter Email ID'}
                                        helperText={errors.emailId && touched.emailId ? errors.emailId : ''}
                                    />
                                    <Label className={'password-class'} label={'Question'} />
                                    <TextInput
                                        variant="outlined"
                                        maxLength={50}
                                        fullWidth={true}
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        formInput={'textBoxDiv'}
                                        onChange={(e) => {
                                            setDisableLogin(false);
                                            handleChange(e);
                                        }}
                                        placeholder={'Enter Password'}
                                        endAdornment={
                                            <IconButton tabIndex="-1" className="password-eye" onClick={handleClick}>
                                                {showPassword ? (
                                                    <img src={VisibilityIcon} alt="logo"/>
                                                ) : (
                                                    <img src={VisibilityOffIcon} alt="logo" />
                                                )}
                                            </IconButton>
                                        }
                                        value={values.password}
                                        onBlur={handleBlur}
                                        helperText={errors.password && touched.password ? errors.password : ''}
                                    />
                                    <p className="forgotPwd">Forgot Password?</p>
                                    <Button
                                        formInput={'buttonDiv'}
                                        fullWidth={true}
                                        name="Login"
                                        // disabled={disableLogin || !isValid}
                                        type="submit"
                                        variant="contained"
                                    />
                                </Form>
                            );
                        }}
                    </Formik>
                </Paper>
                {/* <LoginModuleTemplates
                    data={{
                        templateType: 'simpleLogin',
                        initialValues: initialValues,
                        validationSchema: validationSchema,
                        handleSubmit: handleSubmit,
                        handleClick: handleClick,
                        buttonClass: 'buttonDiv',
                        textClass: 'textBoxDiv',
                        disableLogin: disableLogin,
                        showPassword: showPassword,
                        setDisableLogin: setDisableLogin,
                        header: { text1: 'Welcome !', text2: 'Enter your login details' }
                    }}
                /> */}
            </div>
        </div>
    );
};

export default SetSecurityQn;
