import CreatePassword from "./CreatePassword";
import PasswordSuccess from "./PasswordSuccess";
import SetSecurityQn from "./SetSecurityQn";
import SimpleLoginTemplate from "./SimpleLogin";
import ForgotPassword from "./ForgotPassword";
import LockedAccount from "./LockedAccount";

const componentMap = {
  simpleLogin: SimpleLoginTemplate,
  setSecurityQn: SetSecurityQn,
  createPassword: CreatePassword,
  passwordSuccess: PasswordSuccess,
  forgotPassword: ForgotPassword,
  lockAccount: LockedAccount,
};

const LoginModuleTemplates = (props) => {
  const { data } = props;
  const Component = componentMap[data?.templateType];

  return (
    <div>
      <Component data={data} />
    </div>
  );
};
export default LoginModuleTemplates;
