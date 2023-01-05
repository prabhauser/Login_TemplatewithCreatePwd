import { Paper } from "@material-ui/core";
import TextInput from "../../TextInput/index";
import Label from "../../Label/index";
import Button from "../../Button/index";
import { Typography, IconButton } from "@material-ui/core";
import VisibilityIcon from "../../../assets/visibilityIcon.svg";
import VisibilityOffIcon from "../../../assets/visibilityOffIcon.svg";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { LOGIN_YUPSCHEMA } from "./schema";
import * as Yup from "yup";

const SimpleLoginTemplate = (props) => {
  const { data } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [validationSchema, setValidationSchema] = useState({});
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  const [initialValues] = useState({
    emailId: "",
    password: "",
  });

  useEffect(() => {
    setValidationSchema(Yup.object().shape(LOGIN_YUPSCHEMA));
  }, []);

  const handleSubmit = async (values) => {
    //api call to check if its first time login
    data?.setTemplateType("setSecurityQn");
  };
  return (
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
          const { values, handleChange, handleBlur, errors, touched } =
            formikprops;
          return (
            <Form>
              <Label label={"Email ID"} />
              <TextInput
                variant="outlined"
                maxLength={30}
                autoFocus={true}
                fullWidth={true}
                type="text"
                name="emailId"
                value={values.emailId}
                autoComplete={"off"}
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                placeholder={"Enter Email ID"}
                helperText={
                  errors.emailId && touched.emailId ? errors.emailId : ""
                }
              />
              <Label className={"password-class"} label={"Password"} />
              <TextInput
                variant="outlined"
                maxLength={50}
                fullWidth={true}
                type={showPassword ? "text" : "password"}
                name="password"
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder={"Enter Password"}
                endAdornment={
                  <IconButton
                    tabIndex="-1"
                    className="password-eye"
                    onClick={handleClick}
                  >
                    {showPassword ? (
                      <img src={VisibilityIcon} alt="logo" />
                    ) : (
                      <img src={VisibilityOffIcon} alt="logo" />
                    )}
                  </IconButton>
                }
                value={values.password}
                onBlur={handleBlur}
                helperText={
                  errors.password && touched.password ? errors.password : ""
                }
              />
              <p className="forgotPwd">Forgot Password?</p>
              <Button
                formInput={"buttonDiv"}
                fullWidth={true}
                name="Login"
                type="submit"
                variant="contained"
              />
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default SimpleLoginTemplate;
