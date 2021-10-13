import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GridMovies from "./GridMovies";
import background from "../static/background.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px",
    backgroundImage: `url(${background})`,
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  title: { textAlign: "center", marginBottom: "20px", color: "white" },
}));

const MoviesApp = () => {
  const [categories, setCategories] = useState(["Avengers"]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Movies App
      </Typography>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GridMovies
            className={classes.grid}
            key={category}
            category={category}
          />
        ))}
      </ol>
    </div>
  );
};

export default MoviesApp;
