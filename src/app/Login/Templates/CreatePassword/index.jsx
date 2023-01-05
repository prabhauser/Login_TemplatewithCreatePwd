import { Paper, Typography, IconButton } from "@material-ui/core";
import TextInput from "../../TextInput/index";
import Label from "../../Label/index";
import Button from "../../Button/index";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { CREATEPWD_YUPSCHEMA } from "./schema";
import VisibilityIcon from "../../../assets/visibilityIcon.svg";
import VisibilityOffIcon from "../../../assets/visibilityOffIcon.svg";
import * as Yup from "yup";

const CreatePassword = (props) => {
  const { data } = props;
  const [validationSchema, setValidationSchema] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickConfirm = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const [initialValues] = useState({
    newPwd: "",
    confirmPwd: "",
  });

  useEffect(() => {
    setValidationSchema(Yup.object().shape(CREATEPWD_YUPSCHEMA));
  }, []);

  const handleSubmit = async (values) => {
    //api call to check if its first time login
    data?.setTemplateType("passwordSuccess");
  };
  return (
    <Paper elevation={2} className="loginPaper">
      <div className="loginFormHeader">
        <Typography className="welcomeText">Create Password</Typography>
        <Typography className="loginText">Create your new password</Typography>
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
              <Label label={"New Password"} />
              <TextInput
                variant="outlined"
                maxLength={30}
                autoFocus={true}
                fullWidth={true}
                type={showPassword ? "text" : "password"}
                name="newPwd"
                value={values.newPwd}
                autoComplete={"off"}
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  handleChange(e);
                }}
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
                onBlur={handleBlur}
                placeholder={"Enter new password"}
                helperText={
                  errors.newPwd && touched.newPwd ? errors.newPwd : ""
                }
              />
              <Label className={"password-class"} label={"Confirm Password"} />
              <TextInput
                variant="outlined"
                maxLength={50}
                fullWidth={true}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPwd"
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder={"Enter confirm password"}
                value={values.confirmPwd}
                onBlur={handleBlur}
                endAdornment={
                  <IconButton
                    tabIndex="-1"
                    className="password-eye"
                    onClick={handleClickConfirm}
                  >
                    {showConfirmPassword ? (
                      <img src={VisibilityIcon} alt="logo" />
                    ) : (
                      <img src={VisibilityOffIcon} alt="logo" />
                    )}
                  </IconButton>
                }
                helperText={
                  errors.confirmPwd && touched.confirmPwd
                    ? errors.confirmPwd
                    : ""
                }
              />
              <Button
                formInput={"buttonDiv"}
                fullWidth={true}
                name="Change Password"
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

export default CreatePassword;
