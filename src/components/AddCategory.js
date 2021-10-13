import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "grey",
    fontSize: "1.2rem",
    width: "100%",
  },
}));

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={hadleSubmit}>
      <input
        className={classes.input}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="
        Enter a movie or genre"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
