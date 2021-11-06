import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({ open, handleClose, appointment, date }) => {
  const { name, time } = appointment || {};

  const handleBookingSubmit = (e) => {
    alert("Submitted");
    //to close the form after submit, we call the handleClose
    handleClose();
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
              <TextField
                disabled
                id="outlined-size-small"
                sx={{ width: "90%", margin: "1px" }}
                defaultValue={time}
                size="small"
              />
              <TextField
                id="outlined-size-small"
                sx={{ width: "90%", margin: "1px" }}
                defaultValue="Your Name"
                size="small"
              />
              <TextField
                id="outlined-size-small"
                sx={{ width: "90%", margin: "1px" }}
                defaultValue="Your Email"
                size="small"
              />
              <TextField
                id="outlined-size-small"
                sx={{ width: "90%", margin: "1px" }}
                defaultValue="Your Number"
                size="small"
              />
              <TextField
                disabled
                id="outlined-size-small"
                sx={{ width: "90%", margin: "1px" }}
                defaultValue={date?.toDateString()}
                size="small"
              />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
