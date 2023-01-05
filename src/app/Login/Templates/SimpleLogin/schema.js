import * as Yup from "yup";

export const LOGIN_YUPSCHEMA = {
  emailId: Yup.string().required("Please enter Email ID"),
  password: Yup.string().required("Please enter Password"),
};
