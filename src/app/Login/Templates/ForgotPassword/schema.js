import * as Yup from "yup";

export const FORGOTPWD_YUPSCHEMA = {
  emailId: Yup.string().required("Please enter Email ID").email('Email format is incorrect'),
  answer: Yup.string().required("Please enter answer")
};
