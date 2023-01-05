import LoginLogo from "../assets/loginBg.svg";
import Logo from "../assets/ACGLogoLogin.svg";
import { Box } from "@material-ui/core";
import "../Login/index.scss";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginModuleTemplates from "../Login/Templates/index";

const ACGLogin = () => {
  const [templateType, setTemplateType] = useState("forgotPassword");
  const history = useHistory();

  return (
    <div
      className="acgLoginPage"
      style={{
        backgroundImage: `linear-gradient( rgba(28, 31, 47,0.6), rgba(28, 31, 47,0.7)), url(${LoginLogo})`,
      }}
    >
      <div className="loginForm">
        <Box className="loginLogo">
          <img src={Logo} alt="logo" />
        </Box>

        <LoginModuleTemplates
          data={{
            templateType: templateType,
            setTemplateType: setTemplateType,
            isForgotPwdPage: true,
          }}
        />
      </div>
    </div>
  );
};

export default ACGLogin;
