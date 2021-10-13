import React from "react";
import { makeStyles } from "@material-ui/core";
import useFetchMovies from "../hooks/useFetchMovies";
import CardMovie from "./CardMovie";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
      alingItems: "center",
      align: "center",
      justify: "center",
      alignItems: "center",
    },
  },
}));

const GridMovies = ({ category }) => {
  const { data: images, loading } = useFetchMovies(category);
  const classes = useStyles();

  return (
    <>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className={classes.grid}>
        {images.map((img) => {
          return <CardMovie className={classes.card} key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GridMovies;
