import { Paper, Box } from "@material-ui/core";
import Button from "../../Button/index";
import { Typography } from "@material-ui/core";
import SuccessIcon from "../../../assets/passwordSuccess.svg";

const PasswordSuccess = (props) => {
  const { data } = props;

  const handleSubmit = async (values) => {
    //api call to check if its first time login
    data?.setTemplateType("simpleLogin");
  };
  return (
    <Paper elevation={2} className="loginPaper">
      <Box className="loginLogo">
        <img src={SuccessIcon} alt="logo" />
      </Box>
      <div className="loginFormHeader">
        <Typography className="welcomeText">
          Password updated successfully!
        </Typography>
        <Typography className="loginText">
          Please login with your new password
        </Typography>
      </div>

      <Button
        formInput={"buttonDiv"}
        fullWidth={true}
        name="Login"
        type="button"
        variant="contained"
        onClick={handleSubmit}
      />
    </Paper>
  );
};

export default PasswordSuccess;
