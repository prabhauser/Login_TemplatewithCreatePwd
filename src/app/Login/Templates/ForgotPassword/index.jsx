import { Paper, Grid } from "@material-ui/core";
import TextInput from "../../TextInput/index";
import Label from "../../Label/index";
import Button from "../../Button/index";
import { Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { FORGOTPWD_YUPSCHEMA } from "./schema";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const SimpleLoginTemplate = (props) => {
  const { data } = props;
  const history = useHistory();
  const [validationSchema, setValidationSchema] = useState({});
  const [disableLogin, setDisableLogin] = useState(true);
  const [initialValues] = useState({
    emailId: "",
    answer: "",
  });

  useEffect(() => {
    setValidationSchema(Yup.object().shape(FORGOTPWD_YUPSCHEMA));
  }, []);

  const handleSubmit = async (values) => {
    //api call to check if inputs are correct
    //data?.setTemplateType("createPassword");
    data?.setTemplateType("lockAccount");
  };
  return (
    <Paper elevation={2} className="loginPaper">
      <div className="loginFormHeader">
        <Typography className="welcomeText">Forgot Password</Typography>
        <Typography className="loginText">
          Enter below details to create new password
        </Typography>
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
          const { values, handleChange, handleBlur, isValid, errors, touched } =
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
                  setDisableLogin(false);
                  handleChange(e);
                }}
                onBlur={handleBlur}
                placeholder={"Enter Email ID"}
                helperText={
                  errors.emailId && touched.emailId ? errors.emailId : ""
                }
              />
              <Label className={"password-class"} label={"Question"} />
              <TextInput
                variant="outlined"
                maxLength={50}
                fullWidth={true}
                type={"text"}
                name="answer"
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  setDisableLogin(false);
                  handleChange(e);
                }}
                placeholder={"Enter answer"}
                value={values.answer}
                onBlur={handleBlur}
                helperText={
                  errors.answer && touched.answer ? errors.answer : ""
                }
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                  <Button
                    formInput={"buttonDiv"}
                    fullWidth={true}
                    name="Cancel"
                    handleClick={() => history.push("/")}
                    secondary={true}
                    //   disabled={disableLogin || !isValid}
                    type="button"
                    variant="contained"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} xl={6} lg={6}>
                  <Button
                    formInput={"buttonDiv"}
                    fullWidth={true}
                    name="Proceed"
                    disabled={disableLogin || !isValid}
                    type="submit"
                    variant="contained"
                  />
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default SimpleLoginTemplate;
