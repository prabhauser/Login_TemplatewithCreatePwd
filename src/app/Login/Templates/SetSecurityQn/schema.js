import * as Yup from "yup";

export const SETSECURITYQN_YUPSCHEMA = {
  securityQn: Yup.string().required("Please select security question"),
  answer: Yup.string().required("Please enter answer"),
};
