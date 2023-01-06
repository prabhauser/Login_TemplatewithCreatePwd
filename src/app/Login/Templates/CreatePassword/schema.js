import * as Yup from "yup";
import YupPassword from 'yup-password';
YupPassword(Yup);

export const CREATEPWD_YUPSCHEMA = {
  newPwd: Yup.string().required("Please enter new password").min(8, 'Password must have a minimum of 8 characters'),
  confirmPwd: Yup.string().required("Please enter confirm password")
  .min(8, 'Password must have a minimum of 8 characters')
  .minLowercase(1, 'password must contain at least 1 lower case letter')
  .minUppercase(1, 'password must contain at least 1 upper case letter')
  .minNumbers(1, 'password must contain at least 1 number')
  .minSymbols(1, 'password must contain at least 1 special character')
  .oneOf([Yup.ref('newPwd'), null], 'Passwords must match')
  ,

};
