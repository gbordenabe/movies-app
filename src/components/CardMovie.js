import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DialogMovie from "./DialogMovie";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: "100%",
    border: "solid",
    margin: "10px",
  },
}));

export default function CardMovie({
  id,
  title,
  url,
  overview,
  rating,
  release_date,
}) {
  const classes = useStyles();
  const [openDialogMovie, setDialogMovie] = useState(false);

  const handleOpenDialogMovie = () => {
    setDialogMovie(true);
  };

  const handleCloseDialogMovie = () => {
    setDialogMovie(false);
  };

  return (
    <Card className={classes.card}>
      <Button onClick={handleOpenDialogMovie}>
        <CardMedia component="img" height="140" src={url} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        </CardContent>
      </Button>
      <DialogMovie
        open={openDialogMovie}
        close={handleCloseDialogMovie}
        title={title}
        overview={overview}
        rating={rating}
        release_date={release_date}
      />
    </Card>
  );
}
