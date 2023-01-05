import Button, { ButtonProps } from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

// type funcProps = ButtonProps & {
//     name?: string;
//     handleClick?: any;
//     type?: string;
//     disabled?: boolean;
//     className?: string;
//     secondary?: boolean;
//     formInput?: string;
//     fullWidth?: boolean;
// };

const useStyles = makeStyles({
    root: {
        borderRadius: '6px',
        height: '50px',
        textTransform: 'none',
        '&.MuiButton-root': {
            textTransform: 'none'
        },
        '&.MuiButton-root:hover': {
            background: '#5D97F6'
        }
    },
    primaryButton: {
        background: '#5D97F6',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: '25px',
        textAlign: 'right'
        // '&.MuiButton-root.Mui-disabled': {
        //     background: 'black',
        //     color: 'white'
        // }
    }
});

const ACGButton = (props) => {
    const classes = useStyles();
    const { name, handleClick, type, disabled, className, secondary, fullWidth, formInput, ...rest } = props;
    const isDisabled = disabled ? true : false;
    const buttonClass = `${formInput ? formInput : ''} ${classes.root} ${classes.primaryButton} ${className}`;
    return (
        <div>
            <Button
                type={type}
                name={name}
                className={buttonClass}
                onClick={handleClick}
                disabled={isDisabled}
                fullWidth={fullWidth}
                {...rest}
            >
                {name}
            </Button>
        </div>
    );
};

export default ACGButton;
