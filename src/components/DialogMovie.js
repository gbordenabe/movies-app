import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogMovie({
  open,
  close,
  title,
  overview,
  rating,
  release_date,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="h6">Relase date: {release_date}</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {overview}
          </DialogContentText>
          <br />
          <Typography variant="h6" style={{ textAlign: "right" }}>
            Rating: {rating}/10
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
