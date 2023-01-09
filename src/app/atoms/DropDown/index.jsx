import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import PropTypes from "prop-types";
import Label from "../Label/index";
import "./index.scss";

const dropdownTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          border: "1px solid #2B2D42",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#1D1E2C",
          "&:hover": {
            border: "none",
          },
          "&:focus": {
            border: "none",
          },
        },
        icon: {
          color: "#b1c2df",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "50px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1D1E2C",
          borderRadius: "10px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#b1c2df",
          fontSize: "14px",
          letterSpacing: "0",
          fontWeight: "500",
          lineHeight: "17px",
          padding: "16.5px 32px 16.5px 14px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
          fontSize: "12px",
          fontWeight: "500",
          letterSpacing: "0",
          marginTop: "-13px",
        },
      },
    },
  },
});

const DropDown = (props) => {
  const {
    value,
    items,
    helperText,
    name,
    disabled,
    variant,
    required,
    onChange,
    label,
    fullWidth,
    placeHolder,
    control,
    ...rest
  } = props;

  return (
    <ThemeProvider theme={dropdownTheme}>
      <div
        id="parent"
        className={`acgDropdown paper ${disabled ? "disabledComponent" : ""}`}
      >
        {label === "" ? null : <Label label={label} className="label" />}
        <FormControl fullWidth required={required} variant={variant}>
          <Select
            fullWidth={fullWidth}
            labelId="sub-category"
            name={name}
            displayEmpty
            value={value}
            onChange={onChange}
            variant="outlined"
            renderValue={(selected) => {
              if (selected?.length === 0) {
                return (
                  <span className="optionStyle disabledComponent">
                    {placeHolder}
                  </span>
                );
              }
              return (
                <span className="optionStyle">
                  {items?.find((item) => item.code === value)?.name}
                </span>
              );
            }}
            classes={{
              disabled: disabled ? "disabledComponent" : "",
            }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "center",
              },
            }}
            inputProps={{
              disabled: !!disabled,
            }}
            control={control}
            {...rest}
          >
            <MenuItem disabled value="">
              <span className="optionStyle">{placeHolder}</span>
            </MenuItem>
            {items?.map((item, i) => {
              const itemId = i + 1;
              return (
                <MenuItem
                  key={itemId}
                  value={item.code}
                  className="optionStyle"
                >
                  <span className="optionStyle">{item?.name}</span>
                </MenuItem>
              );
            })}
          </Select>
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

DropDown.propTypes = {
  value: PropTypes.any,
  items: PropTypes.array,
  helperText: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeHolder: PropTypes.string,
  control: PropTypes.any,
};

export default DropDown;
