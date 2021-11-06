import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Appointment from "../Appointment";

const DisplayAppointment = ({ date }) => {
  const [appointments, setAppointments] = useState([]);

  //get
  fetch("http://localhost:5000/appointment")
    .then((res) => res.json())
    .then((data) => setAppointments(data));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">
          Appointment on {date.toDateString()}
        </Typography>
        <Grid container spacing={2} sx={{ padding: "50px" }}>
          {appointments.map((appointment) => (
            <Appointment
              date={date}
              key={appointment.id}
              appointment={appointment}
            ></Appointment>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default DisplayAppointment;
