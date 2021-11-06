import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import AppointmentModal from "./Modal/AppointmentModal";

const Appointment = ({ appointment, date }) => {
  const { name, time, spaces } = appointment;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="p" gutterBottom component="div">
            {spaces}
          </Typography>
          <Button onClick={handleOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <AppointmentModal
        date={date}
        appointment={appointment}
        open={open}
        handleClose={handleClose}
      ></AppointmentModal>
    </>
  );
};

export default Appointment;
