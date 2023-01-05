import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SelectArrowIcon from '../../assets/selectArrowIcon.svg';
import { FormControl, Select, MenuItem, FormHelperText, SelectProps } from '@material-ui/core';
import Label from '../Label/index';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(() => ({
    formControl: {
        margin: 0,
        fullWidth: true,
        display: 'flex',
        wrap: 'nowrap',
        // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        //     border: '1.5px solid #ccd0d5'
        // },
        '& .MuiSelect-icon': {
            color: '#B1C2DF'
        },
        '& .MuiSvgIcon-root':{
      //      display:'none'
        },
        '& .MuiInputLabel-formControl': {
            transform: 'translate(12px, 20px) scale(1)'
        },
        '& .MuiOutlinedInput-root': {
            height: '50px',
            backgroundColor: '#24263A',
            borderRadius: '10px',
            borderWidth: '1.5px',
            borderColor: '#ccd0d5',
            alignContent: 'center',
            justifyContent: 'center',
            width: '100%',
            //style the border of field on focus
            '&.Mui-focused fieldset': {
                borderWidth: '1.5px',
                borderColor: '#9c9ea0'
            }
        },

        '& .MuiSelect-select:focus': {
            backgroundColor: 'transparent'
        },
       '&.MuiMenu-list:hover':{
        backgroundColor:'#24263A'
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
    paper: {
        width: '100%'
    },

    dropdownStyle: {
        color: '#02122c',
        fontSize: '14px',
        letterSpacing: '0',
        fontWeight: 500,
        lineHeight: '21px',
        marginTop: '9px',
        backgroundColor:'#24263A'
    },
    disabledComponent: {
        opacity: 0.6
    },
    inputStyleIcon: {
        '& .MuiSelect-selectMenu': {
            color: '#02122c',
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: 500,
            lineHeight: '21px',
            marginLeft: '30px'
        }
    },
    inputStyleWithoutIcon: {
        '& .MuiSelect-selectMenu': {
            color: '#02122c',
            fontSize: '14px',
            letterSpacing: '0',
            fontWeight: 500,
            lineHeight: '21px'
        }
    },
    label: {
        height: '17px',
        opacity: 0.5,
        color: '#2C333A',
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: 0,
        marginBottom: '12px'
    },
    optionStyle: {
        color: '#B1C2DF',
        fontSize: '14px',
        letterSpacing: '0',
         fontWeight: 500,
        lineHeight: '21px',
        padding: '12px 0px 3px 14px'
    },

    iconStart: {
        position: 'absolute',
        marginTop: '15px',
        marginLeft: '10px',
        zIndex: 9
    }
}));

const DropDown=(props)=> {
    const classes = useStyles();
    const {
        value,
        items,
        helperText,
        name,
        disabled,
        variant,
        required,
        isIcon,
        onChange,
        label,
        fullWidth,
        placeHolder,
        ...rest
    } = props;

    return (
        <div
            id="parent"
            className={`${classes.paper} ${disabled ? classes.disabledComponent : ''}`}
            style={props.style}
        >
            {label == '' ? null : <Label label={props.label} className={classes.label} />}
            <FormControl
                fullWidth
                className={`${classes.formControl} ${isIcon ? classes.inputStyleIcon : classes.inputStyleWithoutIcon}`}
                required={required}
                variant={variant}
            >
              
                <Select
                //IconComponent={SelectArrowIcon}
                    fullWidth={fullWidth}
                    labelId="sub-category"
                    name={name}
                     displayEmpty
                    value={value}
                    onChange={onChange}
                    variant="outlined"
                    renderValue={(selected) => {
                        if (selected?.length === 0) {
                          return <span className={classes.optionStyle}>{placeHolder}</span>;
                        }          
                        return <span  className={classes.optionStyle}>{items?.find((item)=> item.code == value)?.name}</span>
                      }}
                    classes={{
                        disabled: disabled ? classes.disabledComponent : ''
                    }}
                    MenuProps={{
                        classes: { paper: classes.dropdownStyle },
                        getContentAnchorEl: null,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }
                    }}
                    inputProps={{
                        disabled: disabled ? true : false
                    }}
                    control={props.control}
                    {...rest}
                    
                >
                    <MenuItem disabled value="">
            <span className={classes.optionStyle}>{placeHolder}</span>
          </MenuItem>
                    {items?.map((item, i) => {
                        const itemId = i + 1;
                        return (
                            <MenuItem key={itemId} value={item.code} className={classes.optionStyle}>
                                {props.type == 'with' ? (
                                    item?.type
                                ) : (
                                    <span className={classes.optionStyle}>{item?.name}</span>
                                )}
                            </MenuItem>
                        );
                    })}
                </Select>
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </div>
    );
}

export default DropDown;