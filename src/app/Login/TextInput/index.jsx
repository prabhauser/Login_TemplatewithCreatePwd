import { TextField, TextFieldProps, makeStyles, InputAdornment } from '@material-ui/core';

// type ComponentProps = {
//     id?: string;
//     name?: string;
//     value?: string;
//     label?: string;
//     type?: string;
//     onChange?: Function;
//     helperText?: string;
//     maxLength?: number;
//     placeholder?: string;
//     formInput?: string;
//     className?: string;
//     readOnly?: Boolean;
//     disabled?: Boolean;
//     inputRef?: Function;
//     style?: string;
//     fullWidth?: Boolean;
//     startAdornment?: any;
//     endAdornment?: any;
//     isIcon?: Boolean;
//     isRedOutline?: Boolean;
// } & TextFieldProps;

const useStyles = makeStyles({
    root: {
        flexDirection: 'row',
        '& .MuiInputAdornment-positionStart': {
            marginBottom: '4px',
            marginLeft: '5px',
            marginRight: '20px'
        },
        '& .MuiInputAdornment-positionEnd ': {
            marginBottom: '1px'
        },
        // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        //     border: '2px solid #9c9ea0'
        // },
        '& .MuiOutlinedInput-root': {
            height: '50px',
            backgroundColor: '#24263A',
            borderRadius: '10px',
            borderWidth: '1px',
            borderColor: '#2B2D42',
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
            color: '#b1c2df',
            //style the border of field on focus
            '&.Mui-focused fieldset': {
                border: 'none'
            }
        },
        // style the helpertext
        '& .MuiFormHelperText-root': {
            color: 'red',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: 0,
            marginTop: '5px',
            marginBottom: '-25px'
        }
    },
    redOutline: {
        border: '1px solid #FF001F !important',
        borderRadius: '10px',
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        },
        '& .MuiOutlinedInput-root': {
            border: 'none',
            '&.Mui-focused fieldset': {
                border: 'none'
            }
        }
    },
    //tod0 - style the placeholder text
    input: {
        '&::placeholder': {
            fontWeight: '500',
            color: '#B1C2DF',
            fontSize: '14px'
        }
    },
    //style the text of field with icon
    inputWithicon: {
        '& .MuiInputBase-input': {
            color: '#b1c2df',
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: '500',
            lineHeight: '21px',
            marginLeft: '30px'
        }
    },
    //style the input text of field
    inputWithoutIcon: {
        '& .MuiInputBase-input': {
            color: '#b1c2df',
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: '500',
            lineHeight: '21px'
        }
    },
    inputLabel: {
        fontSize: '16px',
        lineHeight: '17px',
        letterSpacing: '-0.16px',
        color: '#9c9ea0'
    },
    disabledComponent: {
        opacity: 0.6
    },
    iconStart: {
        position: 'absolute',
        marginTop: '30px',
        zIndex: 9
    }
});

const TextInput = (props) => {
    const classes = useStyles();
    const {
        name,
        id,
        value,
        label,
        helperText,
        maxLength,
        placeholder,
        className,
        formInput,
        readOnly,
        disabled,
        inputRef,
        style,
        type,
        onChange,
        fullWidth,
        startAdornment,
        endAdornment,
        isIcon,
        isRedOutline = true,
        ...rest
    } = props;
    const startAdor = startAdornment && <InputAdornment position="start"> {startAdornment} </InputAdornment>;
    const endAdor = endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>;

    return (
        <div
            className={`${disabled ? classes.disabledComponent : ''}
        ${classes.root}
        `}
            style={style}
        >
            {isIcon && <div className={classes.iconStart}>{startAdor}</div>}
            <TextField
                color="primary"
                id={id}
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`${formInput ? formInput : ''} ${isIcon ? classes.inputWithicon : classes.inputWithoutIcon}
                ${helperText ? (isRedOutline ? classes.redOutline : '') : ''}`}
                value={value}
                helperText={helperText}
                inputRef={inputRef}
                fullWidth={fullWidth}
                inputProps={{
                    maxLength: maxLength
                }}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                    readOnly: readOnly ? true : false,
                    disabled: disabled ? true : false,
                    startAdornment: isIcon ? '' : startAdor,
                    endAdornment: endAdor,
                    classes: { input: classes.input }
                }}
                {...rest}
            />
        </div>
    );
};

export default TextInput;
