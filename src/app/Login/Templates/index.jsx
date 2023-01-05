import CreatePassword from "./CreatePassword";
import PasswordSuccess from "./PasswordSuccess";
import SetSecurityQn from "./SetSecurityQn";
import SimpleLoginTemplate from "./SimpleLogin";

const componentMap = {
  simpleLogin: SimpleLoginTemplate,
  setSecurityQn: SetSecurityQn,
  createPassword: CreatePassword,
  passwordSuccess: PasswordSuccess,
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
