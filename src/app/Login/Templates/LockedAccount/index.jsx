import { Paper, Box } from "@material-ui/core";
import Button from "../../Button/index";
import { Typography } from "@material-ui/core";
import FailureIcon from "../../../assets/lockedAccount.svg";

const LockedAccount = (props) => {
  const { data } = props;

  const handleSubmit = async (values) => {
    //api call to check if its first time login
    data?.setTemplateType("simpleLogin");
  };
  return (
    <Paper elevation={2} className="loginPaper">
      <Box className="loginLogo">
        <img src={FailureIcon} alt="logo" />
      </Box>
      <div className="loginFormHeader">
        <Typography className="welcomeText">Your account is locked</Typography>
        <Typography className="loginText">
          Please contact admin to retrieve
        </Typography>
      </div>

      <Button
        formInput={"buttonDiv"}
        fullWidth={true}
        name="Back to Login"
        type="button"
        variant="contained"
        onClick={handleSubmit}
      />
    </Paper>
  );
};

export default LockedAccount;
