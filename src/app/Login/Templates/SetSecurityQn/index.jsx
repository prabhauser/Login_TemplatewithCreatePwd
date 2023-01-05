import { Paper } from "@material-ui/core";
import TextInput from "../../TextInput/index";
import Label from "../../Label/index";
import Button from "../../Button/index";
import { Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { SETSECURITYQN_YUPSCHEMA } from "./schema";
import DropDown from "../../DropDown/index";
import * as Yup from "yup";

const SetSecurityQn = (props) => {
  const { data } = props;
  const [validationSchema, setValidationSchema] = useState({});
  const [initialValues] = useState({
    securityQn: "",
    answer: "",
  });

  useEffect(() => {
    setValidationSchema(Yup.object().shape(SETSECURITYQN_YUPSCHEMA));
  }, []);

  const handleSubmit = async (values) => {
    //api call to check if its first time login
    data?.setTemplateType("createPassword");
  };
  return (
    <Paper elevation={2} className="loginPaper">
      <div className="loginFormHeader">
        <Typography className="welcomeText">Set Security Question</Typography>
        <Typography className="loginText">
          Setup your security questions
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
          const { values, handleChange, handleBlur, errors, touched } =
            formikprops;
          return (
            <Form>
              <Label label={"Security Question"} />

              <DropDown
                onChange={(event) => {
                  handleChange(event);
                }}
                className="textBoxDiv"
                name={"securityQn"}
                items={[{ code: "1", name: "What is your favourite colour" }]}
                placeHolder={"Select Security Question"}
                value={values.securityQn}
                helperText={
                  errors.securityQn && touched.securityQn
                    ? errors.securityQn
                    : ""
                }
              />

              <Label className={"password-class"} label={"Answer"} />
              <TextInput
                variant="outlined"
                maxLength={50}
                fullWidth={true}
                type={"text"}
                name="answer"
                formInput={"textBoxDiv"}
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder={"Enter Answer"}
                value={values.answer}
                onBlur={handleBlur}
                helperText={
                  errors.answer && touched.answer ? errors.answer : ""
                }
              />
              <Button
                formInput={"buttonDiv"}
                fullWidth={true}
                name="Proceed"
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

export default SetSecurityQn;
