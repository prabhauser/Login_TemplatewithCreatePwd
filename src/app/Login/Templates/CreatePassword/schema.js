import * as Yup from "yup";

export const CREATEPWD_YUPSCHEMA = {
  newPwd: Yup.string().required("Please enter new password"),
  confirmPwd: Yup.string().required("Please enter confirm password"),
};
